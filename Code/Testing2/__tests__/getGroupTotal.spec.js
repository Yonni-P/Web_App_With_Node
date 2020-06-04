/* eslint-env jest */

const getGroupTotal = require('../src/getGroupTotal')

describe('Group total function', () => {
  test('should add up totals', () => {
    const input = [
      { name: 'Yona', Total_Spent: 10 },
      { name: 'Josh', Total_Spent: 16 }
    ]
    const output = 26

    expect(getGroupTotal(input)).toEqual(output)
  })
})
