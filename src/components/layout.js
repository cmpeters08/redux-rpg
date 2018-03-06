import React from 'react';
import CreatureList from '../containers/creature-list.js';
import Player from '../containers/player-list.js';
import UpdatePlayer from '../containers/update-player-form.js';
require('../App.css');

const Layout = () =>(
	<div>
		<h2>Player Stats</h2>
		<Player />
		<UpdatePlayer />
		<h2>Creatures</h2>
		<CreatureList />
	</div>
);

export default Layout;