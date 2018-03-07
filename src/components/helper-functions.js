import React, { Component } from 'react';



export const handleBattles = (creature, player) => {
	console.log(creature);
	console.log(player);
	console.log(player.health);

		if(creature.defense <= player.attack){
			const hit = player.attack - creature.defense;
			creature.health -= hit;
			if(creature.health <= 0){
				creature.defeated = true;
				console.log("Player wins");
			}
		}
		if(player.defense <= creature.attack){
			const hit = creature.attack - player.defense;
			player.health -= hit;
			if(player.health <= 0){
				player.defeated = true;
				console.log("Player Losses");
			}
		}
		if (player.defense === creature.attack){
			const hit = player.defense / 2;
			player.health -= hit;
			creature.health -= hit;
			if(player.health <= 0 || creature.health <= 0){
				player.defeated = true;
				console.log("You both lose");
			}
			if(player.health <= 0){
				player.defeated = true;
				console.log("Player Losses");
			}
			if(creature.health <= 0){
				creature.defeated = true;
				console.log("Player Wins");
			}
		if(player.attack === creature.defense){
			const hit = player.attack / 2;
			player.health -= hit;
			creature.health -= hit;
			if(player.health <= 0 || creature.health <= 0){
				player.defeated = true;
				console.log("You both lose");
			}
			if(player.health <= 0){
				player.defeated = true;
				console.log("Player Losses");
			}
			if(creature.health <= 0){
				creature.defeated = true;
				console.log("Player Wins");
			}

		}
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

