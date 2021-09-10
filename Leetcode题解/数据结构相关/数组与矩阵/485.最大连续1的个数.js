/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 * nums: [1,1,1,0,1,1,0,1]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let oneCount = 0;
  for (let item of nums) {
    if (item === 1) {
      oneCount++;
    } else {
      oneCount = 0;
    }
    if (oneCount > max) {
      max = oneCount;
    }
  }
  return max;
};
// @lc code=end

/* 

*/