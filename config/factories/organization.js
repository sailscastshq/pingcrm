const { fake } = require('captain-vane')

module.exports.default = () => {
  return {
    name: fake.randCompanyName()
  }
}
