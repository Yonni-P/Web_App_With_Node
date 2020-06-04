/* eslint-env jest */

const getMinBalance = require('../src/getMinBalance')

describe('function for extracting minimum balance', () => {
  test('should find minimum balance (all positive)', () => {
    const input = [
      {
        name: 'Josh',
        Total_Spent: 10,
        Balance: 6
      },
      {
        name: 'Yona',
        Total_Spent: 32,
        Balance: 10
      }
    ]

    const output = 6

    expect(getMinBalance(input)).toEqual(output)
  })
  test('should find minimum balance (including negative)', () => {
    const input = [
      {
        name: 'Josh',
        Total_Spent: 10,
        Balance: -5
      },
      {
        name: 'Yona',
        Total_Spent: 32,
        Balance: 10
      }
    ]

    const output = -5

    expect(getMinBalance(input)).toEqual(output)
  })
})
