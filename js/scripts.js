$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#countTo").val();
    var index = parseInt(userInput);
    getNumbers(index);
  });
});

function displayNums(numbers){

};

function getNumbers(index) {
  var numbers = [];

  for(i = 0; i < index; i++){
    numbers.push(i+1);
  }
  console.log(numbers);
}
