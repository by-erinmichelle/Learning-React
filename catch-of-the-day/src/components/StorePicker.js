// always import react into components
import React from 'react';

//////////////////////
// creating a class
//////////////////////

// best practice for caps
// or written class NameHere extends Component
class StorePicker extends React.Component {
// every class needs at least one method: render
	render() {
		// need space between return and ()
		// from render method, can only return one element including comments (no siblings) without react.fragment tag (or import react, {fragment} to use fragment w out the react.)
		return (
			<React.Fragment>
				{/* comment */}
				<form className="store-selector">
					<h2>please enter a store</h2>
					<input type="text" required placeholder="Store Name"/>
					<button type="submit">Visit Store >></button>
				</form>
			</React.Fragment>
		);
	}
}

// export what you need
export default StorePicker;