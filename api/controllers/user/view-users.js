module.exports = {
  friendlyName: 'Index',

  description: 'Index users.',

  inputs: {},

  exits: {},

  fn: async function () {
    const { account } = await User.findOne(this.req.session.userId)
    const { users } = await Account.findOne({ id: account }).populate('users')
    return sails.inertia.render('users/index', { users })
  }
}
