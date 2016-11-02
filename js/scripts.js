//UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    
    var userInput = $("#countTo").val();
    var index = parseInt(userInput);
    var countedNumbers = [];
    var numberStrings = [];

    countedNumbers = getNumbers(index);
    if(checkInput(userInput)) {
      $("#result").text("");
      $("#results img").remove();
      countedNumbers = pingPong(countedNumbers);
      countedNumbers.forEach(function(number, i) {
        numberStrings[i] = countedNumbers[i].toString();
        if(countedNumbers[i+1] === undefined){
          if (numberStrings[i] === "ping"){
            $("#result").append('<span class="ping">Ping!</span>');
          } else if (numberStrings[i] === "pong"){
              $("#result").append('<span class="pong">Pong!</span>');
          } else if (numberStrings[i] === "ping-pong"){
              $("#result").append('<span class="ping-pong">Ping-Pong!</span>');
          } else {
            $("#result").append(numberStrings[i]);
          }
          }else {
            if (numberStrings[i] === "ping"){
              $("#result").append('<span class="ping">Ping!, </span>');
            } else if (numberStrings[i] === "pong"){
                $("#result").append('<span class="pong">Pong!, </span>');
            } else if (numberStrings[i] === "ping-pong"){
                $("#result").append('<span class="ping-pong">Ping-Pong!, </span>');
            } else if (countedNumbers[i+1] === undefined){
              $("#result").append(countedNumbers[i]);
            } else {
              $("#result").append(numberStrings[i] + ", ");
            }
          }
        });
      $("#results").append('<img src="img/end-round.png">');
    }
  });
});

//Business Logic


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

//Makes sure the user enters a reasonable non-negative number
function checkInput(input) {
  input = parseInt(input);
  if(typeof(input) != "number" || isNaN(input)) {
    alert("This game only works if you put in numbers");
    return false;
  } else if(input < 0 || input > 4000) {
    alert("You obviously need limits. Keep the range between 0 and 4000");
    return false;
  } else {
    return true;
  }
};
