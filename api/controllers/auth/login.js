module.exports = {
  friendlyName: 'Login',

  description: 'Login user.',

  inputs: {
    email: {
      description:
        'The email to try in this attempt, e.g. "jacksparrow@blackpearl.com".',
      type: 'string',
      required: true
    },

    password: {
      description:
        'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: true
    },

    remember: {
      description: "Whether to extend the lifetime of the user's session.",
      type: 'boolean'
    }
  },

  exits: {
    success: {
      responseType: 'redirect'
    },
    badCombo: {
      statusCode: 400,
      responseType: 'redirect'
    }
  },

  fn: async function ({ email, password, remember }) {
    const credentialErrorMessage = 'These credentials do not match our records.'
    var user = await User.findOne({
      email: email.toLowerCase()
    })

    // If there was no matching user, respond thru the "noUser" exit.
    if (!user) {
      sails.hooks.inertia.share('errors', {
        email: credentialErrorMessage
      })
      throw { badCombo: 'back' }
    }

    // If the password doesn't match, then also exit thru "badCombo".
    await sails.helpers.passwords
      .checkPassword(password, user.password)
      .intercept('incorrect', (error) => {
        sails.log(error)
        sails.hooks.inertia.share('errors', {
          password: credentialErrorMessage
        })
        return { badCombo: 'back' }
      })

    if (remember) {
      this.req.session.cookie.maxAge =
        sails.config.custom.rememberMeCookieMaxAge
    }

    // Modify the active session instance.
    // (This will be persisted when the response is sent.)
    this.req.session.userId = user.id
    return '/'
  }
}
