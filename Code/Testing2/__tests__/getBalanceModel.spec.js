/* eslint-env jest */

const getBalanceModel = require('../src/getBalanceModel')

const setBalance = require('../src/setBalance')

/* const Balances = function (_members) {
  return _members.map(d => d.Balance)
}
*/
function getMinBalance (members) {
  return members.reduce((min, p) => p.Balance < min ? p.Balance : min, members[0].Balance)
}

function getMaxBalance (members) {
  return members.reduce((max, p) => p.Balance > max ? p.Balance : max, members[0].Balance)
}

describe('get balance model function', () => {
  test('works for 2 members', () => {
    const Transactions = []

    const input = [
      {
        name: 'Josh',
        Total_Spent: 10,
        Balance: 0
      },
      {
        name: 'Yona',
        Total_Spent: 32,
        Balance: 0
      }
    ]
    setBalance(input, 42)

    while (getMaxBalance(input) !== 0 && getMinBalance(input) !== 0) {
      getBalanceModel(input)
    }

    const output = [{ payFrom: 'Josh', payTo: 'Yona', amount: 11 }]

    expect(Transactions).toEqual(output)

    // expect(getBalanceModel(members)).toEqual(output)
  })
  /* test('works for 3 members', () => {
    const Transactions = []

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

    while (getMaxBalance(members) !== 0 && getMinBalance(members) !== 0) {
      getBalanceModel(members, Transactions)
    }

    const output = [
      { payFrom: 'Palay', payTo: 'Yona', amount: 11 },
      { payFrom: 'Josh', payTo: 'Yona', amount: 4 }
    ]

    expect(Transactions).toEqual(output)
  })
  */
})
