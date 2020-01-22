---
title: React State in 30 Seconds
date: 2020-01-20T00:05:34.290Z
template: "post"
draft: false
slug: react-state-in-30-seconds
category: "React"
description: "How state works, quick."
---
Every component in React has state.
* State is accessed via `this.state` in the definition of the component.
* The state is set, *initially*, in the constructor of the component
* The state is set *after the component has rendered* using `this.setState` .

The first block of code shows the definition of `SomeComponent`. The `state` is setup with `name` and `favoriteColor`. The values are accessed via `this.state`. And the values are changed with `setState`.

```jsx
class SomeComponent extends React.Component {

    constructor() {
        this.state = {
            name: 'Mark',
            favoriteColor: 'Blue'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({favoriteColor: 'Green'});
    }

	render() {
		return (
			<div>
				<h1>Profile</h1>
                <span>Name: {this.state.name}</span>
                <span>Favorite Color: {this.state.favoriteColor}</span>
                <button onClick={this.handleClick}>Update</button>
			</div>
		)
}
```
