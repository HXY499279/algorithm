/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n != r * c) {
      return mat;
  }
  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let x = 0; x < m * n; ++x) {
      ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
  }
  return ans;
};
// @lc code=end
/* 
  1.通过new Array(r).fill(0).map(() => new Array(c).fill(0));的方式
    创造一个r X c的数组，并且把里面初始化为0
  2.根据两个数组中元素个数相同来进行循环，一对一的进行赋值
    其中[Math.floor(总数 / 行数)][总数 % 行数]的巧妙方式
    解决了不同形状矩阵一对一赋值的问题
*/