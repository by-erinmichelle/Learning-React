import React from "react";
// only need to import component where its needed
import Header from "./Header";

class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
				{/*bringing in another component*/}
					<Header />
				</div>
{/*				<Inventory />
				<Order />*/}

			</div>
		)
	}
}

export default App;