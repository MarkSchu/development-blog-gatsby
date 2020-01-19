---
title: Redux Refresher
date: 2020-01-19T20:45:08.271Z
template: "post"
draft: false
slug: redux-refresher
category: "Redux"
description: "Refresher on the main concepts in Redux"
---
There are three main concepts in Redux.

* Store
* Actions
* Reducers
* `store.dispatch`

The **Store** stores the app's state. It is the single source of truth. When you want to get check the state, you look inside the store. When you want to change the state, you update the store.

A store is created with a reducer and, if you like, an initial state.

```js

const initialState = {
    foo: 0
}

const store = createStore(reducer, initialState);
```

An **Action** is a way to update the store. Suppose, for instance, that you want to set the value of `foo` to `42`. This is an action; the action of setting `foo` to `42`.

An action is an `Object` with a `type` key. The `type` names the action. They may also have a `value` that is used to updated the state.

```js
const action = {type: 'SET_FOO', value: 42};
```

The **Reducer** is a function that describes, for each action, how the store is updated. It inputs the current state of the store and an action and returns a new copy of the state.

In the case of `SET_FOO`, the store updates `foo` with the value contained in the `SET_FOO` action, like this:

```js
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'SET_FOO':
            return Object.assign({}, currentState, {
                foo: action.value
            });
        default:
            return currentState;
    }
}
```
The **`store.dispatch`** method requests an action to update the store. It inputs an action and calls the reducer to do the actual updating.

```js
store.dispatch({type: 'SET_FOO', value: 42});
```

Here are the main concepts put together in a working, minimal script.

```js
const {createStore} = require('redux');

// create an action
const action = {type: 'SET_FOO', value: 42}

// define the reducer
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'SET_FOO':
            return Object.assign({}, currentState, {
                foo: action.value
            });
        default:
            return currentState;
    }
}

// set the initial state
const initialState = {
    foo: 0
}

// create the store
const store = createStore(reducer, initialState);

// prints out {foo: 0}
console.log(store.getState());

// update the store
store.dispatch(action);

// prints out {foo: 42}
console.log(store.getState());
```
