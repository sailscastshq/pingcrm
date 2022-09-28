module.exports = {
  friendlyName: 'Paginate',

  description: 'Paginate something.',

  inputs: {
    model: {
      type: 'string',
      required: true
    },
    page: {
      type: 'number',
      description: 'The page number',
      defaultsTo: 1
    },
    pageSize: {
      type: 'number',
      defaultsTo: 30
    }
  },

  exits: {
    success: {
      description: 'All done.'
    }
  },

  fn: async function ({ model, page }) {
    // TODO
  }
}
