import React from "react";
import AddFishForm from "./AddFishForm";


class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<h2>Good Boys</h2>
				{/*anything that gets passed into a component is available on props*/}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSampleFishes}>Bring on the puppies!</button>

			</div>
		);
	}
}

export default Inventory;