---
title: What does async Do?
date: "2020-01-07"
template: "post"
draft: false
slug: "what-does-async-do"
category: "JavaScript"
description: "Very quick explanation of the async keyword in JavaScript."
---
The `async` operator makes a function return a promise.

Think about the following function:
```javascript
let doStuff = () => {
    return 42;
}
```

When you call `doStuff`, it returns `42`.

Now add the async operator.
```javascript
let doStuff = async () => {
    return 42;
}
```
When do you call `doStuff` now, the function returns a promise that resolves with `42`.
```javascript
doStuff().then((data) => {
    // data === 42;
});
```
