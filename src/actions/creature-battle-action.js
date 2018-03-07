export const creatureBattle = (health) =>{
	console.log(health);
	return{
		type: "CREATURE_BATTLE",
		payload: health
	}
}