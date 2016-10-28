$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#countTo").val();
    var index = parseInt(userInput);
    var countedNumbers = [];
    countedNumbers = getNumbers(index);
    console.log(countedNumbers);
    countedNumbers = ping(countedNumbers);
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
