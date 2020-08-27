
export const utilitiesFunctions = function()
{


//private functions
    function openSlideMenu() {
      document.getElementById("side-menu").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
}


    function closeSlideMenu() {
      document.getElementById("side-menu").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0px";
    }


    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
      } else {
        document.getElementById("scrollBtn").style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    //private functions ends here
    //public interface
    return{
      openSlideMenu:openSlideMenu,
      closeSlideMenu:closeSlideMenu,
      scrollFunction:scrollFunction,
      topFunction:topFunction
    }
  }();
  