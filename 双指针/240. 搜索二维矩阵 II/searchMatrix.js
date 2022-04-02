/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分查找
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (search(matrix[i], target)) return true
  }
  return false
}

const search = (cur, target) => {
  console.log('@', cur)
  let low = 0,
    high = cur.length - 1
  while (low <= high) {
    const mid = Math.floor((high + low) / 2)
    console.log('@#', mid, low, high)
    if (cur[mid] === target) {
      console.log('@@', mid, cur[mid])
      return true
    } else if (cur[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return false
}

//  遍历查找
var searchMatrix1 = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true
      }
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    5
  )
)
