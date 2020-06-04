/* eslint-env jest */

const totalsSpent = require('../src/totalsSpent')

describe('Totals spent function', () => {
  test('should return total', () => {
    const input = [
      { name: 'Yona', Total_Spent: 10 },
      { name: 'Josh', Total_Spent: 16 }
    ]
    const output = [10, 16]

    expect(totalsSpent(input)).toEqual(output)
  })
})
