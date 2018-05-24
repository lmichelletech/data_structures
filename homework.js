//1) Can you restate the conditional more simply?
if ( (isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills) )
  winGoldMedals();

  
  answer:
  if !(isMichaelPhelps && isMerman) || !(isMichaelPhelps && hasGills)


//2) Can you restate the conditional to use only
//one negation?
if (!rich && !happy)
    killSelf()
else
    liveOn();

    //!('rich' || 'happy')
    answer: !(rich || happy)


//3) Can you restate the condition to use two negations
//and be more legible?
if (!(urgent && important))
    usePostOfice();
else
    useFedex();

    Answer:  
    (urgent || important)

//4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5)
    doSomething();

    Answer:
    When x is greater than 5 and when x is less than or equal to -5
    In this case x can never be both greater than 5 and less than or equal to -5

//4b) Under which circumstances will doSomething run?
if (x > 5 || x <= -5)
    doSomething();

    Answer:
    When x is greater than 5 or when x is less than or equal to -5.
    In this example x can be 6 or can be -5

//5) Can you restate the conditional to use no negations?
if ( !(x > 10 && y < 15))
    alert("You got it!");
else
    prompt("What you need?");

Answer:
(x <= 10 || y >= 15)

//6) Can you restate the conditional to use only one negation?
if ( !(x < 10) || y <= 10 || z <= 25 || !dead ) {
    console.log("You know your DeMorgan's Laws");
}
Answer:
(x >= 10) && !(y > 10 && z > 25 && dead) 


//7) Can you distribute the negation across the expression in parens?
if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
    alert("game goes on");
}

Answer: ((alive && !distance <= 1000 && !trapped && !enemies >= 0))

//8) Can you distribute the negation across the expression in parens?
if (!(dead && level < 99 && world == "Earth")) {
    alert ("Life goes on");
}

Answer: (dead || level >= 99 || !(world == "Earth"))

//9) Generate a random number between 0 and 1 in Javascript

Answer:
Math.random() * 1


//10) Generate a random number between 0 and 10 in Javascript

Answer:
Math.random() * 10


//11) Generate a random integer between 0 and 10 (inclusive)

Answer:
Math.floor(Math.random() * 11)


//12) Generate a random number between 5 and 10 //can have decimals

Answer:
(Math.random() * 5) + 5


//12b) Generate a random integer between 5 and 10 //no decimals

Answer:
Math.ceil(Math.random() * 5) + 4


//13) Generate a random integer between -10 and 30

Answer:
Math.ceil(Math.random() * 21) -10

//14) Write a coin flip function. It should return the string "heads" half
//the time and the string "butts" the other half

function coinFlip(){
    var x = Math.floor(Math.random() * 2) === 0
    if(x)
    {
        console.log("heads")
    }
    else{
        console.log("butts")
    }
}

Answer: 

// 15) Write a card picking function that outputs
// cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts',
// '10 of Diamonds', '8 of Spades'
// There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen

// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it
function pickCard(){
    var suit = Math.round(Math.random()*3);
    if (suit === 0) suit = "Hearts";
    else if (suit === 1) suit = "Diamonds";
    else if (suit === 2) suit = "Clubs";
    else suit = "Spades";

    //your code here
    let num = Math.ceil(Math.random() * 13)
    suit += " " + num
    return suit;

}

//16) In programming, what is the opposite of black?

Answer:
!black

//17) In programming, what is the opposite of x > y ?

Answer:
x <= y

//18) Given an array of numbers, add up all the elements
var arr = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];

arr.reduce(function(a, e){
    return a + e;
},0);


//19) Write a function has1337s which takes an array and
//returns true if the array contains the number 1337
var arr = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45, 1337];
function has1337s(arr){
  for (var i =0; i <arr.length; i++){
    if (arr[i] == 1337) return true;
  }
  return false;
}

/*20) Write a function that receives an array and another parameter.
It will return true if one of the elements of the array is
equal to the other param. It should return false otherwise */
let nums = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];

function containsThing(arr,theThing){
	
    arr.reduce(function(a, e){
        // console.log("test " + a + " " + theThing + '\n');
        if(a === theThing){
            console.log("true");
        }
        else{console.log("false");}
        a = e;

        return a;
    },0); 
}

containsThing(nums, 7)


/* 21) Write a function that receives an array and another parameter.
It will return true if NONE of the elements of the array is
equal to the other param. It should return false otherwise */
let nums = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];
let status = true;

function doesntContain(arr, anotherNum){
    
    arr.reduce(function(a, e){
        
        if(e === anotherNum){
            // console.log("a " + a + " e " + e + " " + anotherNum + " status " + status );
            status = false;
        }
        
        a = e;
        return a;
    },0); 

    return console.log("status = " + status);
}

doesntContain(nums, 99)

/* 22) Write a function that receives an array of numbers and returns
the average of those numbers*/
let arr = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];
let avg = 0
function getAvg(arr){

    arr.reduce(function(a, e){

    avg += e;

    return a = e;

    }, 0);

    avg = Math.round(avg/arr.length);
    console.log(avg);
}

getAvg(arr);

// 23) Write a function which draws a star triangle based
//on an input number
// starz(2) =
// **
// *
//starz(4) =
// ****
// ***
// **
// *

function starz(num){
        
    var string = "";

    for(n = 0; n < num; n++)
    {
        string += "*"
    }
    console.log(string)

    if(num != 0)
    {
        num--;
        starz(num)
    }
    
}

starz(4);

/* 24) Write a function which receives a parameter n and returns the
sum of its half plus half of that, plus half of that, until You
reach a number lower than 2.
n = 100, result = 50+25+12.5+6.25+3.125+1.5625
n = 64, result = 32+16+8+4+2+1
*/

var sumMe = [];

function sumHalves(num){
    // console.log("sumMe " + sumMe + " num " + num);

    if(num > 1){
        num = (num / 2);
        sumMe += num + " ";
        sumHalves(num);
    }
    
    return sumMe;

}

console.log(sumHalves(100));