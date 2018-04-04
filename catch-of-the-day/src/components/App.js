import React from "react";
// only need to import component where its needed
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";


class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
				{/*bringing in another component*/}
					<Header tagline="fresh seafood" age={500} cool="true"/>
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
}

export default App;