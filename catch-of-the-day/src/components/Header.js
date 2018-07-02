import React from "react";
import PropTypes from "prop-types";

// stateless functional component
// const Header = (props) => (
// 	// implicit return
// 			<header className="top">
// 				<h1>Catch
// 				<span className="ofThe">
// 				<span className="of">Of</span>
// 				<span className="the">The</span>
// 				</span>
// 				Day
// 				</h1>
// 				<h3 className="tagline">
// 					{/*this is a component instance*/}
// 					<span>{props.tagline}</span>
// 				</h3>
// 			</header>
// 		);


class Header extends React.Component {
	render() {
		return (
			<header className="top">
				<h1>Look
				<span className="ofThe">
				<span className="of">at</span>
				<span className="the">the</span>
				</span>
				Dogs!
				</h1>
				<h3 className="tagline">
					{/*this is a component instance*/}
					<span>{this.props.tagline}</span>
				</h3>
			</header>
		)
	}
}

Header.propTypes = {
	tagline: PropTypes.string.isRequired
}

export default Header;