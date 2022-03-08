// history.scrollRestoration = "manual";
// window.onbeforeunload = function () {
//     window.scrollTo(0,0);
// };

// window.onload = function() {
//     console.log(window.scrollTop);
// }

function wheel() {
    var text =  document.getElementById('textbox');
    console.log(text);
    var increment = -200;
    var basevalue = parseInt(text.style.top);
    console.log("base = " + basevalue);
    var newvalue = (increment + basevalue) + "px";
    if(basevalue<=-12100)     
        {newvalue = 0};
    text.style.setProperty("top", newvalue);
    text.style.transition = "top 0.5s ease";
}

function randomPick() {
    var min = 1;//picking random number//
    var max = 15;
    var pick = Math.floor((Math.random() * (max - min + 1) + min));
    // console.log(pick);
    // return pick; 
    var elementhref = "#" + pick + "-text";
    console.log(elementhref);
    var circle = document.getElementById("circle");
    circle.href = elementhref;
}

function wheel2() {
    var text =  document.getElementById('textbox');
    console.log(text.style.top);
    var increment = -400;
    var basevalue = parseInt(text.style.top);
    console.log("base = " + basevalue);
    var newvalue = (increment + basevalue) + "px";
    if(basevalue<=-8700)     
        {newvalue = 0};
    text.style.setProperty("top", newvalue);
    text.style.transition = "top 1.5s ease";
}



// //Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("textbox").style.top = "0px";
}
