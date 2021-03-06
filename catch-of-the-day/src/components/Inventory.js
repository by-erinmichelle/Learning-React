import React from "react";
import PropTypes from 'prop-types';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";


class Inventory extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	};
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
					deleteFish={this.props.deleteFish}
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