import React, { Component } from 'react';


/*
export const handleBattles = (state = {}, action) => {
	const creatures = [meanGirl, acne, midTerms, sportsTryOuts, rumors];
	const player = player;

	if(action.type==="PLAYER_CREATURE_BATTLE"){
		if(this.creature.defence <= this.player.attack){
			const hit = this.player.attack - this.creature.defense;
			this.creature.health -= hit;
		}
		if(this.creature.health <= 0){
			this.creature.defeated = true;
			//show win screen
		}
		if(this.player.defence <= this.creature.attack){
			const hit = this.creature.attack - this.player.defense;
			this.player.health -= hit;
		}
		if(this.player.health <= 0){
			this.player.defeated = true;
			//show lose screen
		}
	}
}
*/

export const getRandomCreature = ( creatures ) => {
	let allCreatures = creatures;
	let randomInt = Math.floor(Math.random() * allCreatures.length);
	const randomCreature = allCreatures[randomInt];
	console.log(randomCreature);
	return (
		randomCreature
	);
}

	// <div>
	// 	<div>Creature Name: {randomCreature.name}</div>
	// 	<div>Attack: {randomCreature.attack}</div>
	// 	<div>Defence: {randomCreature.defence}</div>
	// 	<div>Health: {randomCreature.health}</div>
	// </div>

export default getRandomCreature;
// function mapStateToProps(state){
// 	return{
// 		creatures: state.creatures
// 	}
// }

// export default connect(mapStateToProps)(getRandomCreature);