/**
 * custom hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineCustomHook(sails) {
  return {
    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function () {
      sails.log.info('Initializing custom hook (`custom`)')
    },
    routes: {
      before: {
        'GET /': {
          skipAssets: true,
          fn: async function (req, res, next) {
            if (!sails.hooks.inertia || !req.session || req.session.userId)
              return next()

            // You can share data for inertia data in here.
            // Things like the loggedInUser is perfect to be shared here

            // Uncomment to set new version
            sails.hooks.inertia.version(1)

            // Otherwise, look up the logged-in user.
            // var loggedInUser = await User.findOne({
            //   id: req.session.userId,
            // })

            // If the logged-in user has gone missing, log a warning,
            // wipe the user id from the requesting user agent's session,
            // and then send the "unauthorized" response.
            // if (!loggedInUser) {
            //   sails.log.warn(
            //     'Somehow, the user record for the logged-in user (`' +
            //       req.session.userId +
            //       '`) has gone missing....'
            //   )
            //   delete req.session.userId
            //   return sails.hooks.inertia.render('user/login')
            // }

            // if (sails.hooks.inertia.getSharedData('user')) {
            //   throw new Error(
            //     'Cannot share data `user` because this property already exists!  (Is it being attached somewhere else?)'
            //   )
            // }

            sails.hooks.inertia.share('user', { name: 'Kelvin Omereshone' })
            sails.hooks.inertia.viewData('user', { name: 'Kelvin Omereshone' })

            // Prevent the browser from caching logged-in users' pages.
            // (including w/ the Chrome back button)
            // > • https://mixmax.com/blog/chrome-back-button-cache-no-store
            // > • https://madhatted.com/2013/6/16/you-do-not-understand-browser-history
            res.setHeader('Cache-Control', 'no-cache, no-store')

            next()
          },
        },
      },
    },
  }
}
