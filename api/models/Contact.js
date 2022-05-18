/**
 * Contact.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'contacts',
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    firstName: {
      type: 'string',
      columnName: 'first_name',
      maxLength: 25
    },
    lastName: {
      type: 'string',
      columnName: 'last_name',
      maxLength: 25
    },
    email: {
      type: 'string',
      maxLength: 50
    },
    phone: {
      type: 'string',
      maxLength: 50
    },
    address: {
      type: 'string',
      maxLength: 150
    },
    city: {
      type: 'string',
      maxLength: 50
    },
    region: {
      type: 'string',
      maxLength: 50
    },
    country: {
      type: 'string',
      maxLength: 2
    },
    postalCode: {
      type: 'string',
      maxLength: 25,
      columnName: 'postal_code'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    account: {
      model: 'account'
    },
    organization: {
      model: 'organization'
    }
  }
}
