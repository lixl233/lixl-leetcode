/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  const numOfChildren = g.length,
    numOfCookies = s.length
  for (let i = 0, j = 0; i < numOfChildren, j < numOfCookies; i++, j++) {
    while (j < numOfCookies && g[i] > s[j]) {
      j++
    }
    if (j < numOfCookies) count++
  }
  return count
}

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]))
