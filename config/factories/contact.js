const { fake } = require('captain-vane')

module.exports.default = () => {
  return {
    firstName: fake.randFirstName(),
    lastName: fake.randLastName(),
    email: fake.randEmail(),
    phone: fake.randPhoneNumber(),
    address: fake.randStreetAddress(),
    city: fake.randCity(),
    region: fake.randState(),
    country: fake.randCountryCode(),
    postalCode: fake.randZipCode()
  }
}
