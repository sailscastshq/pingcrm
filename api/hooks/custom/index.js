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

      sails.on('hook:inertia:loaded', () => {
        sails.hooks.inertia.version(1)
        sails.hooks.inertia.share('flash', {})
        sails.hooks.inertia.share('errors', {})
      })
    },
    routes: {
      before: {
        'GET /': {
          skipAssets: true,
          fn: async function (req, res, next) {
            return next()
          }
        }
      }
    }
  }
}
