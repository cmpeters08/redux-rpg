import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CreatureReducer } from '../reducers/reducer-creatures';
import { getRandomCreature } from '../components/helper-functions';
import { handleBattles } from '../components/helper-functions';
import { updatePlayerStatsDuringBattle } from '../actions/update-player-action';


class BattleField extends Component{
constructor(){
	super();
	this.state={
		oppenent: {},
		player: {},
	}
}

	fightTime = () =>{
		let aBattle = handleBattles(this.state.oppenent, this.props.player);
		this.setState({
			player: aBattle,
		})
		this.props.dispatch(updatePlayerStatsDuringBattle(
			this.props.player.name,
			this.props.player.attack,
			this.props.player.defense,
			this.props.player.health,
			this.props.player.xPoints,
		));
	}

	displayRandomCreature = () => {
		let joe = getRandomCreature(this.props.creatures)
		this.setState({
			oppenent: joe,
		})
	}


	render(){
		return(
			<div>
				<h1>BattleField</h1>
				<h4>Random Opponent</h4>
				<div>{this.state.oppenent.name}</div>
				<div>Attack: {this.state.oppenent.attack}</div>
				<div>Defense: {this.state.oppenent.defense}</div>
				<div>Health: {this.state.oppenent.health}</div>
				<button onClick={() => this.displayRandomCreature()}>Get Random Opponent</button>
				<button onClick={() => this.fightTime()}>Fight This Oppenet</button>
			</div>
		)
	}

};
// () => getRandomCreature(this.props.creatures)

function mapStateToProps(state){
	return{
		creatures: state.creatures,
		player: state.player[0],
	}
}

export default connect(mapStateToProps)(BattleField);
