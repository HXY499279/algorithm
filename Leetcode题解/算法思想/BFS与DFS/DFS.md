## [1.岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return;
  }
  // 定义count记录岛屿数量
  let count = 0;
  // 双循环来遍历二维数组每一个点
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 当该点为 '1'，计数一次，并从这里开始广度优先搜索
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};
// 该函数就是广度优先搜索
var dfs = function (grid, i, j) {
  // 如果出现超出界限或者该点为'0'就退出循环
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  ) {
    return;
  }
  // 否则就把该点为'1'，就把该点置为'0'，并从它的上下左右四个方向继续遍历
  grid[i][j] = "0";
  dfs(grid, i - 1, j); //上
  dfs(grid, i + 1, j); //下
  dfs(grid, i, j - 1); //右
  dfs(grid, i, j + 1); //左
};
/* 

*/
```

## [2.克隆图](https://leetcode-cn.com/problems/clone-graph/)

```javascript
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // 定义一个map结构-visited，来保存new出来的节点
  const visited = new Map();
  const cloneDfs = (curNode) => {
    // 1. 终点和特殊条件
    if (!node) {
      return null;
    }
    if (visited.has(curNode.val)) {
      return visited.get(curNode.val);
    }
    // 2. 本轮循环执行的操作
    const newNode = new Node(curNode.val);
    visited.set(curNode.val, newNode); // 将新节点放入观察组
    for (neighbor of curNode.neighbors) {
      newNode.neighbors.push(cloneDfs(neighbor));
    }
    // 3. 本轮循环返回值
    return newNode;
  };
  return cloneDfs(node);
};
/* 

*/
```

## [3.目标和](https://leetcode-cn.com/problems/target-sum/)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  const dfs = (nums, target, index, sum) => {
    // 当传入的index等于数组长度时,不再回溯
    if (index === nums.length) {
      // 当表达式最终值等于目标值时,计数一次
      if (sum === target) {
        count++;
      }
      return;
    } else {
      // 每一层运算都对应两个不同的运算方法
      dfs(nums, target, index + 1, sum + nums[index]);
      dfs(nums, target, index + 1, sum - nums[index]);
    }
  };
  dfs(nums, target, 0, 0);
  return count;
};
/* 
  数组nums的每个元素都可以添加符号 + 或 -，因此每个元素有 2 种添加符号的方法，n 个数共有 2^n 种添加符号的方法，对应 2^n 种不同的表达式。
  当 n 个元素都添加符号之后，即得到一种表达式，如果表达式的结果等于目标数 target，则该表达式即为符合要求的表达式。

  可以使用回溯的方法遍历所有的表达式，回溯过程中维护一个计数器 count，当遇到一种表达式的结果等于目标数 target 时，将 count
  的值加 1。遍历完所有的表达式之后，即可得到结果等于目标数 target 的表达式的数目。

  抽象成二叉树的结构,左边是+,右边是-,每一层节点都对应两种运算方法到下一层级
*/
```

## [4.钥匙和房间](https://leetcode-cn.com/problems/keys-and-rooms/)

```typescript
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms: number[][]): boolean {
    // 创建一个set结构数组，用于存放访问过的房间号
    const visited = new Set()
    const dfs = (roomNumber: number) => {
                console.log(1)
        for (let nextRoomIndex of rooms[roomNumber]){
            if(!visited.has(nextRoomIndex)){
                visited.add(nextRoomIndex)
                dfs(nextRoomIndex)
                console.log(2)
            }
        }
    }
    visited.add(0)
    dfs(0)
    // 当访问过的房间数等于rooms的长度，说明全部访问过了
    return visited.size === rooms.length
};
/* 

*/
```
