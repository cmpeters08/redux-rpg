import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CreatureReducer } from '../reducers/reducer-creatures';
import { getRandomCreature } from '../components/helper-functions';


class BattleField extends Component{
constructor(){
super();
this.state={
	oppenent: {},
}
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
				<div>{this.state.oppenent.name}</div>
				<div>Attack: {this.state.oppenent.attack}</div>
				<div>Defense: {this.state.oppenent.defense}</div>
				<div>Health: {this.state.oppenent.health}</div>
				<button onClick={() => this.displayRandomCreature()}>Get Random Opponent</button>
			</div>
		)
	}

};
// () => getRandomCreature(this.props.creatures)

function mapStateToProps(state){
	return{
		creatures: state.creatures
	}
}

export default connect(mapStateToProps)(BattleField);
