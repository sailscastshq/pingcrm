module.exports = {
  friendlyName: 'View create',

  description: 'Display "Create" page.',

  exits: {
    success: {}
  },

  fn: async function () {
    return sails.inertia.render('users/create')
  }
}
