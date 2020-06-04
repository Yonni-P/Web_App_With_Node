
function setBalance (members, groupTotal) {
  const avg = groupTotal / members.length
  members.forEach(function (element) {
    element.Balance = (avg - element.Total_Spent)
    return members
  })
}

module.exports = setBalance

/* const members = [
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
    Total_Spent: 0,
    Balance: 0
  },
  {
    name: 'Simon',
    Total_Spent: 24,
    Balance: 0
  }
]

setBalance(members, 66)

console.log(members)
 */
