/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false
  }
  let [left, up] = [matrix[0].length - 1, 0]
  while (left >= 0 && up < matrix.length) {
    if (target > matrix[up][left]) {
      up++
    }else if(target <matrix[up][left]){
      left--
    }else{
      return true
    }
  }
  return false
};
// @lc code=end

