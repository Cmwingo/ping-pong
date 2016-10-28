//UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#countTo").val();
    var index = parseInt(userInput);
    var countedNumbers = [];
    countedNumbers = getNumbers(index);
    console.log(countedNumbers);
    pingPong(countedNumbers);
    displayNums(countedNumbers);
  });
});

//Business Logic

//Displays the array
function displayNums(numbers){
  var numberStrings = [""];

  $("#result").text("");
  numbers.forEach(function(number, i) {
    numberStrings[i] = numbers[i].toString();
    if (numberStrings[i] === "ping"){
      $("#result").append('<span class="ping">Ping!, </span>');
    } else if (numberStrings[i] === "pong"){
        $("#result").append('<span class="pong">Pong!, </span>');
    } else if (numberStrings[i] === "ping-pong"){
        $("#result").append('<span class="ping-pong">Ping-Pong!, </span>');
    } else {
      $("#result").append(numberStrings[i] + ", ");
    }
  });
  console.log(numberStrings);

};

//Populates the array
function getNumbers(index) {
  var numbers = [];

  for(i = 0; i < index; i++){
    numbers.push(i+1);
  }
  return numbers;
};

//Replaces multiples of 3
function ping(numbers){
  numbers.forEach(function(number, i) {
    if(number % 3 === 0){
      numbers[i] = "ping";
    }
  });
  return numbers;
};

//Replaces multiples of 5
function pong(numbers){
  numbers.forEach(function(number, i) {
    if(number % 5 === 0){
      numbers[i] = "pong";
    }
  });
  return numbers;
};

//Replaces multiples of 15 and then calls ping and pong
function pingPong(numbers){
  numbers.forEach(function(number, i) {
    if(number % 3 === 0 && number % 5 === 0){
      numbers[i] = "ping-pong";
    }
  });
  numbers = ping(numbers);
  numbers = pong(numbers);
  return numbers;
};
