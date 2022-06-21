module.exports = {
  friendlyName: 'View reports',

  description: 'Display "Reports" page.',

  exits: {
    success: {}
  },

  fn: async function () {
    return sails.inertia.render('reports/index')
  }
}
