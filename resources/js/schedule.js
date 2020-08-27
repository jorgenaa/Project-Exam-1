import {apiInstance} from './api.js';
import {utilitiesFunctions} from './common.js';


document.getElementById("openSlideMenu").addEventListener("click", (event) => {
    utilitiesFunctions.openSlideMenu();
    event.stopPropagation();
});

document.getElementById("closeSlideMenu").addEventListener("click", (event) => {
    utilitiesFunctions.closeSlideMenu();
    event.stopPropagation();
});

//scroll to top button
document.getElementById("scrollBtn").addEventListener("click", (event) => {
    utilitiesFunctions.topFunction();
    event.stopPropagation();
});

window.onscroll = function() {utilitiesFunctions.scrollFunction()};



apiInstance().rocketLaunch();
apiInstance().rocketLaunchMobile();

