import React, { Component } from 'react';



export const handleBattles = (creature, player) => {
	console.log(creature);
	console.log(player);

		if(creature.defense <= player.attack){
			const hit = player.attack - creature.defense;
			creature.health -= hit;
			console.log(creature.health)
			console.log(hit);
		}
		if(creature.health <= 0){
			creature.defeated = true;
			//show win screen
		}
		if(player.defense <= creature.attack){
			const hit = creature.attack - player.defense;
			this.player.health -= hit;
		}
		if(player.health <= 0){
			player.defeated = true;
			//show lose screen
		}
}


export const getRandomCreature = ( creatures ) => {
	let allCreatures = creatures;
	let randomInt = Math.floor(Math.random() * allCreatures.length);
	const randomCreature = allCreatures[randomInt];
	console.log(randomCreature);
	return (
		randomCreature
	);
}

