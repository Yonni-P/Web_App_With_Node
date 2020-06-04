
const Balances = function (_members) {
  return _members.map(d => d.Balance)
}
function getMinBalance (members) {
  return members.reduce((min, p) => p.Balance < min ? p.Balance : min, members[0].Balance)
}

function getMaxBalance (members) {
  return members.reduce((max, p) => p.Balance > max ? p.Balance : max, members[0].Balance)
}

const Transactions = []

function getBalanceModel (members) {
  const memberOwedMost = members[Balances(members).indexOf(getMinBalance(members))]
  const memberOwingMost = members[Balances(members).indexOf(getMaxBalance(members))]

  let amountOwed = 0
  if (memberOwedMost.Balance + memberOwingMost.Balance <= 0) {
    amountOwed = Math.abs(memberOwingMost.Balance)
  } else {
    amountOwed = Math.abs(memberOwedMost.Balance)
  }

  Transactions.push({ payFrom: memberOwingMost.name, payTo: memberOwedMost.name, amount: amountOwed })

  memberOwingMost.Balance -= amountOwed
  memberOwedMost.Balance += amountOwed

  // return Transactions
}

module.exports = getBalanceModel

/* const setBalance = require('../src/setBalance')

// const Transactions = []
const members = [
  {
    name: 'Josh',
    Total_Spent: 10,
    Balance: 0
  },
  {
    name: 'Yona',
    Total_Spent: 32,
    Balance: 0
  },
  {
    name: 'Palay',
    Total_Spent: 3,
    Balance: 0
  }
]
setBalance(members, 45)
// const Transactions = []
// getBalanceModel(input, Transactions)

while (getMaxBalance(members) !== 0 && getMinBalance(members) !== 0) {
  getBalanceModel(members)
}

console.log()
*/
