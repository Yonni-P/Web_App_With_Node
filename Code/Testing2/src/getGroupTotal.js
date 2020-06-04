function getGroupTotal (members) {
  let total = 0
  members.forEach(function (element) { total += element.Total_Spent })
  return total
}
module.exports = getGroupTotal
