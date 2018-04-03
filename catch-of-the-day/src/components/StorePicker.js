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
		// use className not class
		// emmet wesbos react
		// toggling comments in jsx?
		// need space between return and ()
		// use the () for formatting
		 // from render method, can only return one element including comments (no siblings) without react.fragment tag (or import react, {fragment} to use fragment w out the react.)
		return (
			<React.Fragment>
				<p>fish</p>
				{/* comment */}
				<form className="store-selector">
					<h2>enter a store</h2>
					<input  type="submit" required placeholder="test"/>
				</form>
			</React.Fragment>
		)
	}
}

// export what you need
export default StorePicker;