var sum = Number(prompt( "What is the total ammount?" ));
var people =  Number( prompt( "How many people?", "Just numbers here."  ));
var tipPercent =  Number( prompt( "How much are you willing to tip?", "Just numbers here, no %." ));


if ( people = 1){
    var word = " person";
} else {
    var word = " people"
};

document.getElementById("nrPeople").innerHTML = people + word;
document.getElementById("tip").innerHTML = tipPercent;


function tipCalculator ( sum , tipPercent, people ) {
    var totalTip = ((tipPercent/100) * sum ) / people;
    return totalTip;
};

var total = tipCalculator(sum, people, tipPercent);

if ( people = 1  ) {
    document.getElementById("total").innerHTML = "The sum is " +total ;
    
} else {
    document.getElementById("total").innerHTML = "The sum is" + total + "each.";
}

