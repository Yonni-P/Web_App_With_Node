// Splitvengers - Algorithm to equally split costs among group members
// Step 1: Retrieve data from database (locally - from file or terminal user input)
// Step 2: Get total spent per group member.
// Step 3: Get total spent by group.
// Step 4: Divide group total by number of participants.
// Step 5: Split group members into "below" and "above", with amount owing and owed. (If value from Step 3 < value from Step 4 => below)
// Step 6: Sort lists by highest value owed/owing.

'use strict'

const message = 'Balancing Algorithm'
console.log(message)
/*
Getting values from database: (something like this)
const data = []
for (let x = 1; x <= 100000; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * (1000000)) })
}
*/

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
    Total_Spent: 21,
    Balance: 0
  },
  {
    name: 'Simon',
    Total_Spent: 21,
    Balance: 0
  }
]

const Transactions = []

const names = function (_members) {
  return _members.map(d => d.name)
}
console.log(names(members))

const totalsSpent = function (_members) {
  return _members.map(d => d.Total_Spent)
}
console.log(totalsSpent(members))

const getGroupTotal = function (_members) {
  let total = 0
  _members.forEach(function (element) { total += element.Total_Spent })
  return total
}

const GroupTotal = getGroupTotal(members)
console.log(`Group Total Spent = ${GroupTotal}`)

const setBalance = function (_members, _GroupTotal) {
  const avg = _GroupTotal / _members.length
  _members.forEach(function (element) {
    element.Balance = (avg - element.Total_Spent)
    // console.log(element.Balance)
  })
}
setBalance(members, GroupTotal)
members.forEach(function (element) { console.log(element) })

const getMinBalance = function (_members) {
  return _members.reduce((min, p) => p.Balance < min ? p.Balance : min, _members[0].Balance)
}
// console.log(getMinBalance(members))

const getMaxBalance = function (_members) {
  return _members.reduce((max, p) => p.Balance > max ? p.Balance : max, _members[0].Balance)
}
// console.log(getMaxBalance(members))

const Balances = function (_members) {
  return _members.map(d => d.Balance)
}
// console.log(Balances(members))

const getBalanceModel = function (_members) {
  const memberOwedMost = _members[Balances(_members).indexOf(getMinBalance(_members))]
  const memberOwingMost = _members[Balances(_members).indexOf(getMaxBalance(_members))]
  // console.log(`Member Owed Most: ${memberOwedMost.name}`)
  // console.log(`Member Owing Most: ${memberOwingMost.name}`)
  let amountOwed = 0
  if (memberOwedMost.Balance + memberOwingMost.Balance <= 0) {
    amountOwed = Math.abs(memberOwingMost.Balance)
  } else {
    amountOwed = Math.abs(memberOwedMost.Balance)
  }
  // console.log(amountOwed)
  Transactions.push({ payFrom: memberOwingMost.name, payTo: memberOwedMost.name, amount: amountOwed })
  // console.log(Transactions)
  memberOwingMost.Balance -= amountOwed
  memberOwedMost.Balance += amountOwed
}

while (getMaxBalance(members) !== 0 && getMinBalance(members) !== 0) {
  getBalanceModel(members)
}
console.log('Transactions:')
console.log(Transactions)
