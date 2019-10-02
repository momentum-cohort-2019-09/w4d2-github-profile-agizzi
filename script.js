const nameList = document.querySelector('h2');
const heightList = document.querySelector('.height');
const hairColorList = document.querySelector('.hairColor');
const skinColorList = document.querySelector('.skinColor');
const genderList = document.querySelector('.gender');
// const homeList = document.querySelector('.home');

fetch('https://swapi.co/api/people/20/')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		const name = data.name;
		const height = data.height;
		const hairColor = data.hair_color;
		const skinColor = data.skin_color;
		const gender = data.gender;

		nameList.innerText = `${name}, 900`;
		heightList.innerText = `Height: ${height} cm`;
		hairColorList.innerText = `Hair color: ${hairColor}`;
		skinColorList.innerText = `Skin color: ${skinColor}`;
		genderList.innerText = `Gender: ${gender}`;
		fetch(data.homeworld).then((response) => response.json()).then((data) => {
			// const planet = data.name;
			console.log(data.name);
			// homeList.innerText = `Home Planet: ${data.name}`;
		});
	});
