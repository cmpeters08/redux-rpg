import { updatePlayer } from "../actions/update-player";

const player = (state = [], action) => {

	if(action.type === "UPDATE_PLAYER"){
		return[
			{
				id: 1,
				name: action.name,
				attack: action.attack,
				defense: action.defense,
				health: action.health,
				xPoints: 0,
				level: 1

			}]
		}

	else{
		return[
			{
				id: 1,
				name: "Kayla",
				attack: 30,
				defence: 30,
				health: 40,
				xPoints: 0,
				level: 1,
			}
		]
	}

}
export default player;