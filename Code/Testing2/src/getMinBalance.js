function getMinBalance (members) {
  return members.reduce((min, p) => p.Balance < min ? p.Balance : min, members[0].Balance)
}

module.exports = getMinBalance
