//UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#countTo").val();
    var index = parseInt(userInput);
    var countedNumbers = [];
    countedNumbers = getNumbers(index);
    console.log(countedNumbers);
    if(checkInput(userInput)) {
      pingPong(countedNumbers);
      displayNums(countedNumbers);
    }
  });
});

//Business Logic

//Displays the array
function displayNums(numbers){
  var numberStrings = [""];

  $("#result").text("");
  $(".imgWrapper").remove();

  numbers.forEach(function(number, i) {
    numberStrings[i] = numbers[i].toString();
    console.log(numbers[i+1]);
    if(numbers[i+1] === undefined){
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
        } else if (numbers[i+1] === undefined){
          $("#result").append(numbers[i]);
        } else {
          $("#result").append(numberStrings[i] + ", ");
        }
      }
    });
  console.log(numberStrings);
  $("#results").after().append('<div class="imgWrapper"></div>');
  $(".imgWrapper").css({"background-image":"url(img/end-round.png)", "background-color":"green"});
  // $("#results").css("background-color","black");
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

//Makes sure the user enters a reasonable non-negative number
function checkInput(input) {
  if (typeof(parseInt(input)) === "number") {
    if (input >= 1 && input <= 3999){
      return true;
    } else {
        alert("You obviously need limits. Keep the range between 0 and 4000")
        return false;
      }
  } else {
    alert("This game only works if you put in numbers")
    return false;
    }
};
