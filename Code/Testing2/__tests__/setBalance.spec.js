/* eslint-env jest */

const setBalance = require('../src/setBalance')
const getGroupTotal = require('../src/getGroupTotal')
describe('set balance function', () => {
  test('should balance totals', () => {
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
    const output = [
      {
        name: 'Josh',
        Total_Spent: 10,
        Balance: 11
      },
      {
        name: 'Yona',
        Total_Spent: 32,
        Balance: -11
      }
    ]

    const groupTotal = getGroupTotal(input)
    setBalance(input, groupTotal)

    // expect(setBalance(input, groupTotal)).toEqual(output)
    // expect(input[0].Balance).toEqual(11)
    expect(input).toEqual(output)
  })
})
