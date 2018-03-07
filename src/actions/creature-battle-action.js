export const creatureHealth = (creature, health) =>{
	console.log(health);
	return{
		type: "CREATURE_HEALTH",
		payload:creature, 
		health
	}
}

export const playerCreaatureBattle = (player, creature) =>{
	return{
		type: "PLAYER_CREATURE_BATTLE",
		payload: {
			playerAttack: player.attack,
			creatureAttack: creature.attack,
			playerDefense: player.defense,
			creatureDefense: creature.defense,
			playerHealth: player.health,
			creatureHealth: creature.health,
			playerDefeatedStatus: player.defeated,
			creatureDefeatedStatus: player.defeated,
		}


	}

}

export const getRandomCreature = (allCreatures) =>{
		return{	
		type:'GET_RANDOM_CREATURE',
		creature: randomGen()
		}
	function randomGen(allCreatures){
		return Math.floor(Math.random() * allCreatures.length) + 1;
	}
}



