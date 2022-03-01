function wheel() {
    var text =  document.getElementById('textbox');
    console.log(text);
    var increment = -400;
    var basevalue = parseInt(text.style.top);
    console.log("base = " + basevalue);
    var newvalue = (increment + basevalue) + "px";
    document.getElementById('textbox').style.setProperty("top", newvalue);
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

function wheel() {
    var text =  document.getElementById('textbox');
    console.log(text);
    var increment = -100;
    var basevalue = parseInt(text.style.top);
    console.log("base = " + basevalue);
    var newvalue = (increment + basevalue) + "px";
    document.getElementById('textbox').style.setProperty("top", newvalue);
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

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
