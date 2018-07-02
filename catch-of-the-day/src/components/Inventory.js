import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";



class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<h2>Good Boys</h2>
				{Object.keys(this.props.fishes).map(key => (
					<EditFishForm 
					key={key} 
					index={key} 
					fish={this.props.fishes[key]}
					updateFish={this.props.updateFish}
					/>
				))}
				{/*anything that gets passed into a component is available on props*/}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSampleFishes}>Bring on the puppies!</button>

			</div>
		);
	}
}

export default Inventory;