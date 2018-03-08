export const updatePlayer = (name, attack, defense, health) =>{
	console.log(name);
	return {
		type: "UPDATE_PLAYER",
		name, 
		attack, 
		defense,
		health,
	}
};

export const updatePlayerStatsDuringBattle = ( name, attack, defense, health ) =>{
	return{
		type: "UPDATE_PLAYER_STATS_DURING_BATTLE",
		name, 
		attack, 
		defense,
		health,
	}
}
