function wheel() {
    var text =  document.getElementById('textbox');
    console.log(text);
    var increment = -200;
    var basevalue = parseInt(text.style.top);
    console.log("base = " + basevalue);
    var newvalue = (increment + basevalue) + "px";
    document.getElementById('textbox').style.setProperty("top", newvalue);
}