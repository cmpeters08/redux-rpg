import React from 'react';
import CreatureList from '../containers/creature-list.js';
import Player from '../containers/player-list.js';
import UpdatePlayer from '../containers/update-player-form.js';
import BattleField from '../containers/battle-field.js';
require('../App.css');

const Layout = () =>(
	<div>
	<h2>Define your Character</h2>
		<UpdatePlayer />
		<br />
		<h2>Player Stats</h2>
		<Player />
		<br />
		<BattleField />
	</div>
);

export default Layout;