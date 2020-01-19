---
title: React Props in 30 Seconds
date: 2020-01-19T20:38:12.164Z
template: "post"
draft: false
slug: react-props-in-30-seconds
category: "React"
description: "How props work, quick."
---
Every component in React has props. Props are accessed via `this.props` in the definition of the component. Values of props are passed to instances when the instances are created.

The first block of code shows the creation of an instance of `SomeComponent`. The value `"blue"` is passed to the prop `color`.

```jsx
<div>
	<SomeComponent color={"blue"} />
</div>
```

The second block of code shows the definition of `SomeComponent`. The `color` prop is accessed via `this.props.color`.

```jsx
class SomeComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.color}</h1>
			</div>
		)
}
```
