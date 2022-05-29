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
    const PAGE_SIZE = 15
    const path = `${sails.config.custom.baseUrl}${this.req.path}`
    const { account } = await User.findOne(this.req.session.userId)

    const skip = (page - 1) * PAGE_SIZE
    const count = await Organization.count({ account })
    const totalPage = Math.ceil(count / PAGE_SIZE)

    const links = []
    for (i = 0; i < totalPage; i++) {
      let linkPageNumber = i + 1
      let linkUrl =
        page != linkPageNumber || linkPageNumber == totalPage
          ? `${path}?page=${linkPageNumber}`
          : null

      links.push({
        label: linkPageNumber,
        url: linkUrl,
        active: linkPageNumber == page
      })
    }

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
