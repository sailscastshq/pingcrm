const { fake } = require('captain-vane')

module.exports.default = () => {
    return {
         id: fake.randUuid(),
    }
}
