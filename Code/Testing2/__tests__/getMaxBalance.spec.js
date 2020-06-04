const getMinBalance = require('../src/getMaxBalance')

describe('function for extracting maximum balance', () => {
  test('should find maximum balance (all positive)', () => {
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

    const output = 10

    expect(getMinBalance(input)).toEqual(output)
  })
  test('should find maximum balance (including negative)', () => {
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

    const output = 10

    expect(getMinBalance(input)).toEqual(output)
  })
})
