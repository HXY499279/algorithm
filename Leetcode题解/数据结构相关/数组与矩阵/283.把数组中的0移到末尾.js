/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i]
    }
  }
  while (index < nums.length) {
    nums[index++] = 0
  }
};

/* 
  创建变量index，记录数组中的非零数个数
  该代码 nums[index++] = nums[i] 实现了将非零数在原数组上移动到前面和记录非零数的个数
  最后将统计出的非零数的个数与原数组长度进行比较，补充0
*/
