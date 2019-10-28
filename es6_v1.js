



var animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

animalListing(animals, true);


function animalListing( animalArray, listFoods=true){
	var outputArray = [];
	animalArray.map((animalArray)=>{
		let { type, height, weight, name, top3Foods } = animalArray;
		let sentance = `Animal: ${type} is a ${type} and is ${height} meters at ${weight*2.2} lbs`;
		if (listFoods) sentance += ` and it likes to eat ${top3Foods[0]} ,${top3Foods[1]}, and ${top3Foods[2]}`
		console.log(sentance);
	});
	return outputArray;
}
