/* Buttons: Loads more text */

/*  Summmary Section */
function loadmore1(){
  
    var button = document.getElementById("button1");
    var loadmoreText = document.getElementById("loadmoreText1");
    var loadlessText = document.getElementById("loadlessText1");
    
     if (loadlessText.style.display === "none") {
       loadlessText.style.display = "inline";
       button.innerHTML = "Load More Text";
       loadmoreText.style.display = "none";
     }
       
    else{
      loadlessText.style.display = "none";
      button.innerHTML = "Load Less Text";
      loadmoreText.style.display = "inline";
    }
    
  }
  
  /*  Interests Section */
  function loadmore2(){
  
    var button = document.getElementById("button2");
    var loadmoreText = document.getElementById("loadmoreText2");
    var loadlessText = document.getElementById("loadlessText2");
  
     if (loadlessText.style.display === "none") {
       loadlessText.style.display = "inline";
       button.innerHTML = "Load More Text";
       loadmoreText.style.display = "none";
     }
  
    else{
      loadlessText.style.display = "none";
      button.innerHTML = "Load Less Text";
      loadmoreText.style.display = "inline";
    }
  
  }
  