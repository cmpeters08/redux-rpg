import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CreatureList extends Component{

	createListItems(){
		return this.props.creatures.map((creature) =>{
			return (
				<div key={creature.id}>
					<div>Creature Name: {creature.name}</div>
					<div>Attack: {creature.attack}</div>
					<div>Defence: {creature.defence}</div>
					<div>Health: {creature.health}</div>
					<hr></hr>
				</div>
			);
		
		})
	}

	render(){
		return(
			<ul>
				{this.createListItems()}
			</ul>
		);
	}
}

function mapStateToProps(state){
	return{
		creatures: state.creatures
	}
}


export default connect(mapStateToProps)(CreatureList);