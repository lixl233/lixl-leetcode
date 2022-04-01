# 分发饼干

贪心算法
优先用最小的饼干满足食量最小的小孩

## 先对两个数组进行排序

Array.prototype.sort()
原地排序算法，时间复杂度为 $O(n*log^n + m*log^m)$

```js
g.sort((a, b) => a - b)
s.sort((a, b) => a - b)
```

## 使用循环对两个数组进行遍历

该步骤时间复杂度为 $O(m+n)$

```js
for (let i = 0, j = 0; i < numOfChildren, j < numOfCookies; i++, j++) {
  while (j < numOfCookies && g[i] > s[j]) {
    j++
  }
  if (j < numOfCookies) count++
}
return count
```
