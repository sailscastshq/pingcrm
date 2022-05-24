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
      responseType: 'redirect'
    },
    noUser: {
      description: `The provided email does not match any user in the database.`,
      responseType: 'unauthorized'
    }
  },

  fn: async function ({ email, password, remember }) {
    var userRecord = await User.findOne({
      email: email.toLowerCase()
    })

    // If there was no matching user, respond thru the "noUser" exit.
    if (!userRecord) {
      throw 'noUser'
    }

    // If the password doesn't match, then also exit thru "badCombo".
    await sails.helpers.passwords
      .checkPassword(password, userRecord.password)
      .intercept('incorrect', 'badCombo')

    if (remember) {
      this.req.session.cookie.maxAge =
        sails.config.custom.rememberMeCookieMaxAge
    }

    // Modify the active session instance.
    // (This will be persisted when the response is sent.)
    this.req.session.userId = userRecord.id
    return '/'
  }
}
