/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
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
      isEmail: true,
      unique: true,
      maxLength: 50,
      required: true
    },
    emailVerifiedAt: {
      type: 'number',
      columnName: 'email_verified_at'
    },
    password: {
      type: 'string',
      required: true,
      description:
        "Securely hashed representation of the user's login password.",
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },
    owner: {
      type: 'boolean',
      defaultsTo: false
    },
    photoPath: {
      type: 'string',
      maxLength: 100,
      isURL: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    account: {
      model: 'account'
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  }
}
