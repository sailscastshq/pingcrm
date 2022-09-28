/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // Set up fake development data (or if we already have some, avast)
  if ((await User.count()) > 0) {
    return
  }

  const account = await sails.helpers.vane('account')

  await sails.helpers.vane('user', {
    email: 'jacksparrow@blackpearl.com',
    password: 'parley',
    account: account.id,
    owner: true
  })

  await sails.helpers.vane('user', { account: account.id }, { count: 5 })

  const organizations = await sails.helpers.vane(
    'organization',
    { account: account.id },
    { count: 100 }
  )

  const contacts = await sails.helpers.vane('contact', { account: account.id }, { count: 100 })

  const organizationIds = organizations.map((organization) => organization.id)

  const contactsId = contacts.map((contact) => contact.id)
 

   for (let i = 0; i < contacts.length; i++) {
     const contactId = contactsId[i];
     const organizationId = organizationIds[i];
     await Contact.updateOne({id: contactId}, {
       organization: organizationId
     })
   }
}
