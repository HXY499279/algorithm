# 二叉树

## [1. 二叉树前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let ret = []
    let stack = []
    if (root === null) {
        return []
    }
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        ret.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return ret
};
/* 
  迭代
*/
```
```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function preorderTraversal(root: TreeNode | null): number[] {
    let ret: number[] = []
    const dfs = (cur:TreeNode) => {
        if (cur === null) {
            return
        }
        ret.push(cur.val)
        dfs(cur.left)
        dfs(cur.right)
    }
    dfs(root)
    return ret
};
/* 
  递归DFS
*/
```