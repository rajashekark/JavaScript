function add(){
    console.log("i am here")
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