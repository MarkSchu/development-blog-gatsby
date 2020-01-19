---
title: What does await Do?
date: 2020-01-16T17:26:51.214Z
template: "post"
draft: false
slug: what-does-await-do
category: "JavaScript"
description: "Very quick explanation of the await keyword in JavaScript."
---
The `await` operator, when prepended to a promise, halts code execution until the promise resolves and then passes the resolve value.

Think about a promise that resolves with the value `42`.

```javascript
somePromise.then((value) => {
    // value === 42;
    console.log(value);
});
console.log('hello');
```

When this code executes, `console.log('hello')` does not wait until the promise resolves. It'll get called before `console.log(value)`.

With the `await` operator, you can halt the execution. In the following, the program waits until `somePromise` resolves. Then it calls `console.log(value)`. Then it calls ` console.log('hello')`.

```js
let value = await somePromise;
console.log(value);
console.log('hello');
```
