module.exports = async function (req, res, proceed) {
  if (req.session.userId) {
    const loggedInUser = await User.findOne({
      id: req.session.userId
    })
    if (!loggedInUser) {
      sails.log.warn(
        'Somehow, the user record for the logged-in user (`' +
          req.session.userId +
          '`) has gone missing....'
      )
      delete req.session.userId
      return res.redirect('/login')
    }
    sails.hooks.inertia.share('user', loggedInUser)
    return proceed()
  }
  return res.redirect('/login')
}
