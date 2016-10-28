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

function displayNums(numbers){
  console.log(numbers);
  $("#result").text(numbers);
};

function getNumbers(index) {
  var numbers = [];

  for(i = 0; i < index; i++){
    numbers.push(i+1);
  }
  return numbers;
};

function ping(numbers){
  numbers.forEach(function(number, i) {
    if(number % 3 === 0){
      numbers[i] = "ping";
    }
  });
  return numbers;
};

function pong(numbers){
  numbers.forEach(function(number, i) {
    if(number % 5 === 0){
      numbers[i] = "pong";
    }
  });
  return numbers;
};

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
