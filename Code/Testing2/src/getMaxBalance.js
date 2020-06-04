function getMaxBalance (members) {

    return members.reduce((max, p) => p.Balance > max ? p.Balance : max, members[0].Balance)
}

module.exports = getMaxBalance