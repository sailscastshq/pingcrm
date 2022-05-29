module.exports = {
  friendlyName: 'View reports',

  description: 'Display "Reports" page.',

  exits: {
    success: {}
  },

  fn: async function () {
    return sails.hooks.inertia.render('reports/index')
  }
}
