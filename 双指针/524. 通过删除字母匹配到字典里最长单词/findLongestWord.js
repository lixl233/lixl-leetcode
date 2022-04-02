/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  // 排序，先测较长的字符串，贪心
  dictionary.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length
    } else {
      return a.localeCompare(b)
    }
  })
  console.log(dictionary)
  for (let i = 0; i < dictionary.length; i++) {
    const cur = dictionary[i]
    let p = 0,
      q = 0
    while (p < s.length && q < cur.length) {
      if (s[p] !== cur[q]) {
        p++
      } else {
        p++
        q++
      }
    }
    if (q === cur.length) return cur
  }
  return ''
}

console.log(findLongestWord('abce', ['abe', 'abc']))
