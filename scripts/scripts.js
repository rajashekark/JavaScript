console.log("welcome to JS")
//document.write("Welcome to JavaScript");

/*var txt = "Welcome \'Raj'\ ";
document.write(txt);
txt.length;

var x = "John"
var y = new String("Raj")

document.write(x + " " +y)

var car = {name:'swift' , model:'2013', engineCc:'1200'};
document.write(car.name + " bought in year" + car.model + "with:" + car.engineCc + "cc")
*/

//var x,y;
function add(){
    //console.log("i am here")
    var firstNum = parseInt(document.getElementById('text1').value);
    var secondNum = parseInt(document.getElementById('text2').value);
    var z = firstNum + secondNum;
  document.getElementById('text3').value = z;
 
}
function subtract(){
    //console.log("i am here")
    var firstNum = parseInt(document.getElementById('text1').value);
    var secondNum = parseInt(document.getElementById('text2').value);
    var z = firstNum-secondNum;
  document.getElementById('text3').value = z;
}

function multiply(){
    //console.log("i am here")
    var firstNum = parseInt(document.getElementById('text1').value);
    var secondNum = parseInt(document.getElementById('text2').value);
    var z = firstNum*secondNum;
  document.getElementById('text3').value = z;
}

function division(){
    //console.log("i am here")
    var firstNum = parseInt(document.getElementById('text1').value);
    var secondNum = parseInt(document.getElementById('text2').value);
    var z = firstNum/secondNum;
  document.getElementById('text3').value = z;
}