module.exports = {
  friendlyName: 'View organizations',

  description: 'Display "Organizations" page.',

  inputs: {
    page: {
      type: 'number',
      description: 'What page of the paginator to send back',
      example: 1,
      defaultsTo: 1
    }
  },

  exits: {
    success: {}
  },

  fn: async function ({ page }) {
    const PAGE_SIZE = 10
    const path = `${sails.config.custom.baseUrl}${this.req.path}`
    const { account } = await User.findOne(this.req.session.userId)

    const skip = (page - 1) * PAGE_SIZE
    const count = await Organization.count({ account })
    const totalPage = Math.ceil(count / PAGE_SIZE)

    const links = []
    for (i = 0; i < totalPage; i++) {
      let linkPageNumber = i + 1
      let linkUrl = `${path}?page=${linkPageNumber}`

      links.push({
        label: linkPageNumber,
        url: linkUrl,
        active: linkPageNumber == page
      })
    }

    const previousLink = {
      label: '&laquo; Previous',
      active: false,
      url: page > 1 ? `${path}?page=${page - 1}` : null
    }
    const nextLink = {
      label: 'Next &raquo;',
      active: false,
      url: page < totalPage ? `${path}?page=${page + 1}` : null
    }

    links.unshift(previousLink)
    links.push(nextLink)

    const organizations = await Organization.find({ account })
      .sort([{ createdAt: 'DESC' }])
      .skip(skip)
      .limit(PAGE_SIZE)

    const payload = {
      total: count,
      data: organizations,
      currentPage: page,
      perPage: PAGE_SIZE,
      lastPage: totalPage,
      prevPageUrl:
        page <= 1 || page >= totalPage ? null : `${path}?page=${page - 1}`,
      nextPageUrl: page == totalPage ? null : `${path}}?page=${page + 1}`,
      path,
      firstPageUrl: `${path}?page=1`,
      lastPageUrl: `${path}?page=${totalPage}`,
      links
    }
    return sails.hooks.inertia.render('organizations/index', {
      organizations: payload
    })
  }
}
