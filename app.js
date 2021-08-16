const container = document.querySelector('.container');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const high = document.querySelector('.high');
const fcity = document.querySelector('#fcity');
const searchBtn = document.querySelector('#submit');

clearSearchBar();

searchBtn.addEventListener('click', (e) => {
	const citySearch = fcity.value;
	submitCityName(citySearch);
});

function submitCityName(citySearch) {
	getWeaterData(citySearch);
	clearSearchBar();
}

function clearSearchBar() {
	fcity.value = '';
}

async function getWeaterData(cityName) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a6abd222c8dadafe0d9b7eb920c96328`,
		{ mode: 'cors' }
	);
	const data = await response.json();
	city.textContent = data.name;
	temperature.textContent = data.main.temp;
	high.textContent = data.main.temp_max;
}

// function windows onload, will search for seoul immediately.

// Function for when enter on fcity, search immediately
