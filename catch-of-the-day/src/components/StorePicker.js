// always import react into components
import React from 'react';
import { getFunName } from '../helpers';
//////////////////////
// creating a class
//////////////////////

// best practice for caps
// or written class NameHere extends Component
class StorePicker extends React.Component {
	// handleClick() {
	// 	alert('hey!');
	// }
	// this is used with goToStore(event) syntax
	// constructor() {
	// 	super();
	// 	// must bind or 'this' is undefined
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	myInput = React.createRef();
	// If you need to access 'this' inside of a custom method, use this syntax (and avoid having to bind all methods)
	goToStore = event => {
	// goToStore(event) {
		// 1. stop form from submitting
		event.preventDefault();
		// 2. get the text from that input. dont touch the dom!
		const storeName = this.myInput.value.value;
		// 3. change the page to store/whatever they need. then in router.js this will display the right component!
		this.props.history.push(`/store/${storeName}`);
	}
// every class needs at least one method: render
	render() {
		// need space between return and ()
		// from render method, can only return one element including comments (no siblings) without react.fragment tag (or import react, {fragment} to use fragment w out the react.)
		return (
			<React.Fragment>
				{/* comment */}
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>please enter a store</h2>
				{/*no parentheses bc we don't want it on page load*/}
				{/*<button onClick={this.handleClick}>Click me!</button>*/}
					
					<input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
					<button type="submit">Visit Store >></button>
				</form>
			</React.Fragment>
		);
	}
}

// export what you need
export default StorePicker;