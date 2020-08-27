export let apiInstance = function() {
	//SINGLETON pattern
	//async api

	//private functions
	async function CallApi(Input) {
		let response = await fetch(Input);
		let data = await response.json();
		return data;
	}

	function scheduleInfo(data) {
		return `
			<li>
			Flight number: <span> ${data.flight_number} </span>
			<p>
			Rocket Name: <span> ${data.rocket.rocket_name} </span>
			</p>
			<p>
			Local Launch Date: <span>${new Date(data.launch_date_local).toDateString('MM/DD')}</span>
			</p>
			</li>`;
	}


	function rocketLaunch() {
		let elements = 40;
		CallApi('https://api.spacexdata.com/v3/launches/upcoming').then((data) => {
			let elementLeft = document.getElementById('data-left');
			let elementRight = document.getElementById('data-right');
			let maxElements = data.length < elements ? data.length : elements;
			let bool = false;

			for (let i = 0; i < maxElements; i++) {
				let childElement = scheduleInfo(data[i]);

				if (!bool) {
					elementLeft.innerHTML += childElement;
				} else {
					elementRight.innerHTML += childElement;
				}
				bool = !bool;
			}
		});
	}

	function rocketLaunchMobile() {
		CallApi('https://api.spacexdata.com/v3/launches/upcoming').then((data) => {
			let element = document.getElementById('data-mobile-style');
			for (let i = 0; i < 19; i++) {
				let item = scheduleInfo(data[i]);
				element.innerHTML += item;

			}
		});

	}

	function miniSchedule() {
		CallApi('https://api.spacexdata.com/v3/launches/upcoming').then((data) => {
			let element = document.getElementById('mini-schedule');
			for (let i = 0; i < 7; i++) {
				let item = scheduleInfo(data[i]);
				element.innerHTML += item;
			}
		});
	}

	function issPosition() {
		CallApi('http://api.open-notify.org/iss-now.json').then((data) => {
			let pos = data.iss_position;
			document.getElementById('ISS-Longitude').innerHTML += `<p>Longitude: <span>	${pos.longitude} </span></p>`;
			document.getElementById('ISS-Latitude').innerHTML += `<p>Latitude: <span> ${pos.latitude} </span></p>`;
		});
	}

	function issImage() {
		CallApi('https://images-assets.nasa.gov/image/9802667/collection.json').then((data) => {
			document.getElementById('ISS-img').innerHTML += '<img src="' + data[0] + '">';
		});
	}

	function astronomyPic() {
		CallApi('https://api.nasa.gov/planetary/apod?api_key=QEpfjgAGtTouZhmAxpVPLkhT4cBaMHZue5KD8e8I').then((data) => {
			document.getElementById('title').innerHTML += '<h4>Title: ' + data.title + '</h4>';
			document.getElementById('astronomy').innerHTML += "<img src='" + data.url + "'>";
			document.getElementById('date').innerHTML += '<p>Date ' + data.date + '</p>';
			document.getElementById('explanation').innerHTML += '<p>' + data.explanation + '</p>';
		});
	}

	function thePaceLaunchSystemPart1() {
		CallApi(
			'https://images-assets.nasa.gov/audio/Ep%2041%20The%20Space%20Launch%20System%20Part.1/collection.json'
		).then((data) => {
			document.getElementById('podcastOne').innerHTML += "<source src='" + data[0] + "'>";
		});
	}

	function thePaceLaunchSystemPart2() {
		CallApi(
			'https://images-assets.nasa.gov/audio/Ep42%20The%20Space%20Launch%20System%20Part.2(2)/collection.json'
		).then((data) => {
			document.getElementById('podcastTwo').innerHTML += "<source src='" + data[0] + "'>";
		});
	}
	//private functions ends here


	//public interface
	return {
		issPosition: function() {
			issPosition();
		},
		issImage: function() {
			issImage();
		},
		rocketLaunch: function() {
			rocketLaunch();
		},
		rocketLaunchMobile: function() {
			rocketLaunchMobile();
		},
		miniSchedule: function() {
			miniSchedule();
		},
		astronomyPicture: function() {
			astronomyPic();
		},
		thePaceLaunchSystemPart1: function() {
			thePaceLaunchSystemPart1();
		},
		thePaceLaunchSystemPart2: function() {
			thePaceLaunchSystemPart2();
		}
	};
};