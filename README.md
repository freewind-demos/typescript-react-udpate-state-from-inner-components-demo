TypeScript React Update State from Inner Components Demo
========================================================

之前遇到了一个bug，就是在父组件里维护了一个数组，在子组件中可以把自己的结果与它合并，结果发现父组件中数组的值总是最后一次更新的值。

原来`setNames`需要拿之前的`names`的时候，不能从外面拿（可能是旧的），而需要从第一个参数中拿。

```
npm install
npm run demo
```

It will open page on browser automatically.
