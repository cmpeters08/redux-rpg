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

