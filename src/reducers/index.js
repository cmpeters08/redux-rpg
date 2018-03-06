import { combineReducers } from 'redux';
import  CreatureReducer from './reducer-creatures';
import Player from './reducer-update-player';


const allReducers = combineReducers({
	creatures: CreatureReducer,
	player: Player,
});

export default allReducers;