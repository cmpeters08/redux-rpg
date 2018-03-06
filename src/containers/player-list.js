import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updatePlayer} from '../actions/update-player.js';

class Player extends Component{

	playerStats(){
	return this.props.player.map((player) =>{
		return(
			<div key={player.id}>
			
			<div>{player.name}</div>
			<div>Attack: {player.attack}</div>
			<div>Defense: {player.defense}</div>
			<div>Health: {player.health}</div>
			<div>Experience: {player.xPoints}</div>
			</div>
		)
	})
	}


	render(){
		return(
			<div>{this.playerStats()}</div>
		)
	}
}

function mapStateToProps(state){
	return{
		player: state.player
	}
}



export default connect(mapStateToProps)(Player);