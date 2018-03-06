import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../actions/update-player.js';

class UpdatePlayer extends Component{
constructor(props){
	super(props)
	this.state = {
		playerName: "",
		attack: "",
		defense: "",
		health: "",
	}
}

handleUpdatePlayer = input => event => {
	this.setState({
		[input]: event.target.value,
	});
}
	
	render(){

	return(
		<div>
			<form onSubmit={event => {
					event.preventDefault()
					this.props.dispatch(
						updatePlayer(
						this.state.name,
						this.state.attack,
						this.state.defense,
						this.state.health,
					))
					}}>
				Name: <input 
						type="text" onChange={this.handleUpdatePlayer('name')}></input> <br />
				Attack: <input type="text" onChange={this.handleUpdatePlayer('attack')}></input> <br />
				Defense: <input type="text" onChange={this.handleUpdatePlayer('defense')}></input> <br />
				Health: <input type="text" onChange={this.handleUpdatePlayer('health')}></input> <br /> 
				
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

}


UpdatePlayer = connect()(UpdatePlayer)

export default UpdatePlayer;