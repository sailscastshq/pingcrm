const { fake } = require('captain-vane')

module.exports.default = () => {
  return {
    firstName: fake.randFirstName(),
    lastName: fake.randLastName(),
    email: fake.randEmail(),
    password: fake.randPassword(),
    photoPath: fake.randomAvatar()
  }
}
