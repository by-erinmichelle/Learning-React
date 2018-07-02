import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {

nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

static propTypes = {
	addFish: PropTypes.func
};

	createFish = (event) => {
		// 1. stop the form from submitting
		event.preventDefault();
		const fish = {
			name: this.nameRef.value.value,
			price: this.priceRef.value.value,
			status: parseFloat(this.statusRef.value.value),
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		}
		this.props.addFish(fish);
		// refresh form
		event.currentTarget.reset();
	}
	render() {
		return (
			<div className="AddFishForm">
				<form className="fish-edit" onSubmit={this.createFish}>
					<input name="name" ref={this.nameRef} type="text" placeholder="name" />
					<input name="price" ref={this.priceRef} type="text" placeholder="price" />
					<select name="status" ref={this.statusRef} placeholder="status"> 
						<option value="available">Heckin Good!</option>
						<option value="unavailable">Heckin out!</option>
					</select>
					<textarea name="desc" ref={this.descRef} placeholder="desc" />
					<input name="image" ref={this.imageRef} type="text" placeholder="image" />
					<button type="submit">+ Add Good Boy</button>
				</form>
			</div>
		);
	}
}

export default AddFishForm;