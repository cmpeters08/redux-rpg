import { updatePlayer } from "../actions/update-player-action";

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
				name: "Player 1",
				attack: 0,
				defence:0,
				health: 0,
				xPoints: 0,
				level: 1,
			}
		]
	}

}
export default player;