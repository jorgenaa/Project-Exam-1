import { validateInput } from './validateInput.js';

import { utilitiesFunctions } from './common.js';






document.getElementById('openSlideMenu').addEventListener('click', (event) => {
	utilitiesFunctions.openSlideMenu();
	event.stopPropagation();
});

document.getElementById('closeSlideMenu').addEventListener('click', (event) => {
	utilitiesFunctions.closeSlideMenu();
	event.stopPropagation();
});

//scroll to top button
document.getElementById('scrollBtn').addEventListener('click', (event) => {
	utilitiesFunctions.topFunction();
	event.stopPropagation();
});
window.onscroll = function() {
	utilitiesFunctions.scrollFunction();
};

let regexPatterns = [
	{
		regex: /^[a-zA-Z]+$/,
		input: {
			element: 'firstName',
			attribute: 'id',
		},
		error: 
		{
			element: 'firstNameError',
			attribute: 'id',
		}
	},
	{
		regex: /^[a-zA-Z]+$/,
		input: {
			element: 'lastName',
			attribute: 'id'
		},

		error: {
			element: 'lastNameError',
			attribute: 'id'
		}
	},
	{
		regex: /^\d{8}$/,
		input: {
			element: 'phone',
			attribute: 'id'
		},
		error: {
			element: 'phoneError',
			attribute: 'id'
		}
	},
	{
		regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		input: {
			element: 'email',
			attribute: 'id'
		},
		error: {
			element: 'emailError',
			attribute: 'id'
		}
	}
];


document.getElementById('submitContact').addEventListener('click', (event) => {
	validateInput(regexPatterns);
	event.stopPropagation();
});


