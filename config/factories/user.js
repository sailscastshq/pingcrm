const { fake } = require('captain-vane')

module.exports.default = () => {
  return {
    firstName: fake.randFirstName({ length: 25 }),
    lastName: fake.randLastName({ length: 25 }),
    email: fake.randEmail(),
    password: fake.randPassword(),
    photoPath: fake.randomAvatar()
  }
}
