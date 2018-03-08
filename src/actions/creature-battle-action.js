export const creatureHealth = (creature, health) =>{
	console.log(health);
	return{
		type: "CREATURE_HEALTH",
		payload:creature, 
		health
	}
}

export const playerCreatureBattle = (player, creature) =>{
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





