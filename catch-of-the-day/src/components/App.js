import React from "react";
// only need to import component where its needed
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
// /////// jsx doesnt have looping or if statements, you have to use regular js

// any custom function that needs to update state, needs to live in the same component that the state lives
class App extends React.Component {
	state = {
		// empty objects
		fishes: {},
		order: {}
	};
	addFish = fish => {
		// 1. take a copy of existing state
		const fishes = {...this.state.fishes};
		// 2. add new fish to fishes var (gives it a unique number of every millisecond)
		fishes[`fish${Date.now()}`] = fish;
		// 3. set the new fishes object to state
		this.setState({
			// the object you want to change, then the variable
			// fishes: fishes
			// if youre property and value are the same you can write:
			fishes
		});
	};
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes});
	};
	addToOrder = (key) => {
		// 1. take a copy of state
		const order = {...this.state.order};
		// 2. either add to order or update number in the order
		// (if it exists in order just add 1)
		order[key] = order[key] + 1 || 1;
		// 3. call setstate to update state object
		this.setState({ order });
	};
	render() {
		return (
			// pass info via props!
			<div className="catch-of-the-day">
				<div className="menu">
				{/*bringing in another component*/}
					<Header tagline="fresh cuteness" age={500} cool="true"/>
					<ul className="fishes">
						{/*loop through the fishes in regular js*/}
						{Object.keys(this.state.fishes).map(key => (
							<Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={ this.addToOrder } />
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory addFish={this.addFish}
				loadSampleFishes={this.loadSampleFishes} />
			</div>
		)
	}
}

export default App;