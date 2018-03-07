import React, { Component } from 'react';
	const meanGirl = {
		id: 1,
		name: "Mean Girl",
		attack: 25,
		defense: 15,
		health: 10,
		defeated: false
	};
	const acne = {
		id: 2,
		name: "Acne",
		attack: 50,
		defense: 2,
		health: 5,
		defeated: false
	}
	const midTerms = {
		id: 3,
		name: "MidTerms",
		attack: 10,
		defense: 10,
		health: 10,
		defeated: false
	};
	const sportsTryOuts = {
		id: 4,
		name: "Sports Team Try Outs",
		attack: 5,
		defense: 30,
		health: 15,
		defeated: false
	};
	const rumors = {
		id: 5,
		name: "Rumors",
		attack: 50,
		defense: 50,
		health: 25,
		defeated: false
	}
	const CreatureReducer = (state = {}) => {
		const creatures = [meanGirl, acne, midTerms, sportsTryOuts, rumors];
		return creatures;
	}
export default CreatureReducer;