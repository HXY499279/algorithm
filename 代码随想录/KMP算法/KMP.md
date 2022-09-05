# [KMP 算法](https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)

## [28. 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

```ts
function strStr(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = 0;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        j = next[j - 1];
      }
      if (str[i] === str[j]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  if (needle.length === 0) return 0;
  let next = getNext(needle);
  let i = 0,
    j = 0,
    length = haystack.length;
  while (i < length) {
    // 不相等就回退到相等的位置继续开始匹配
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    }
    i++;
  }
  return -1;
}
```

## [459.重复的子字符串](https://leetcode-cn.com/problems/repeated-substring-pattern/)

```ts

```