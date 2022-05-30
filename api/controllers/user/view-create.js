module.exports = {
  friendlyName: 'View create',

  description: 'Display "Create" page.',

  exits: {
    success: {}
  },

  fn: async function () {
    return sails.hooks.inertia.render('users/create')
  }
}
