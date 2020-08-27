import {apiInstance} from './api.js';

import {utilitiesFunctions} from './common.js';

// Open side menu
document.getElementById("openSlideMenu").addEventListener("click", (event) => {
    utilitiesFunctions.openSlideMenu();
    event.stopPropagation();
});

// Close side menu
document.getElementById("closeSlideMenu").addEventListener("click", (event) => {
    utilitiesFunctions.closeSlideMenu();
    event.stopPropagation();
});

//scroll to top button
document.getElementById("scrollBtn").addEventListener("click", (event) => {
    utilitiesFunctions.topFunction();
    event.stopPropagation();
});

// Scroll Function
window.onscroll = function() {utilitiesFunctions.scrollFunction()};

// Mini Schedule 
apiInstance().miniSchedule();



