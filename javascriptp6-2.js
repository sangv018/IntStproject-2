function wheel() {
    var text =  document.getElementById('textbox');
    console.log(text);
    var increment = +200;
    var basevalue = parseInt(text.style.top);
    console.log("base = " + basevalue);
    var newvalue = (increment + basevalue) + "px";
    if(basevalue<=-12100)     
        {newvalue = 0};
    document.getElementById('textbox').style.setProperty("top", newvalue);
    document.getElementById('textbox').style.transition = "top 1.5s ease";
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
    document.getElementById('textbox').style.setProperty("top", newvalue);
    document.getElementById('textbox').style.transition = "top 2.5s ease";
}