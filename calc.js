//bttons is the form name
//screen is the text field the numbers show up in
//value is the number
//button 1
function one() {
  document.buttons.screen.value+='1'; //number = number plus another one
}
//button 2
function two() {
  document.buttons.screen.value+='2';
}
//button 3
function three() {
  document.buttons.screen.value+='3';
}
//button 4
function four() {
  document.buttons.screen.value+='4';
}
//button 5
function five() {
  document.buttons.screen.value+='5';
}
//button 6
function six() {
  document.buttons.screen.value+='6';
}
//button 7
function seven() {
  document.buttons.screen.value+='7';
}
//button 8
function eight() {
  document.buttons.screen.value+='8';
}
//button 9
function nine() {
  document.buttons.screen.value+='9';
}
//button 0
function zero() {
  document.buttons.screen.value+='0';
}
//adding function
function add() {
  document.buttons.screen.value+='+';
}
//subtracting function
function subtract() {
  document.buttons.screen.value+='-';
}
//multiplying function
function multi() {
  document.buttons.screen.value+='*';
}
//dividing function
function divide() {
  document.buttons.screen.value+='/';
}
//equalling function
function equal() {
  document.buttons.screen.value=eval(document.buttons.screen.value);
}

//read key stroke number
function showKey(e) {
	if ((e.which == 65) && (e.ctrlKey)) {   //a key for adding
		document.getElementById("adding").click();
	} else if ((e.which == 83) && (e.ctrlKey)) { //s key for subtracting
		document.getElementById("subtracting").click();
	} else if ((e.which == 68) && (e.ctrlKey)) {//d key for dividing
		document.getElementById("dividing").click();
	} else if ((e.which == 77) && (e.ctrlKey)) {//m key for multiplying
    document.getElementById("multiplying").click();
  } else if ((e.which == 66) && (e.ctrlkey)) {//b key for equals but **not working**
    document.getElementById("equals").click();
  }
}

//function for finding key stroke number
//function showKey(e) {
//alert(e.which)
//}

//delete button function
function deleteChar() {
  var star = document.getElementById("numberScreen").value;
  document.getElementById("numberScreen").value=star.substring(0, star.length-1)
  //the value in the textfield not = that value minus the last character
  //reads substring and minus one from it every time it's called
}
