module.exports = {
  friendlyName: 'View login',

  description: 'Display "Login" page.',

  exits: {
    success: {}
  },

  fn: async function () {
    return sails.hooks.inertia.render('login')
  }
}
