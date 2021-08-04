# JavaScript Notes


## Introduction
Library = set of functions (JQuery) <br>
Framework = comes with a ceratin way of coding(React) <Br>
You can use ELECTRON for making the js code a program. 

<br>
External file:

    <script src="scripts/yourScriptHere.js"></script>
Internal JS:

    <script>
        alert("Hello!"); 
        // makes a popup
    </script> 

## Variables

    var name = "Andreea";

_thisKindOFVars are called camelCased and These_are_snake_cased._
## Concatenation
Merging. 

    into = 30 + " years";
    sums = 30 + 30;
    var sentence = " I am" + age + " Years old.";

## Console log
Prompting something in the console, also nice for debug.

    console.log("Name", name);
Other types of logs:

    console.warn("Warning here!Panik");
    console.log("Something to display here");
    console.error("Errors can be shown like this");

## Selecting HTML Elements
The ex. is presuming a element with the id = test exists in the HTML. 

    test = document.getElementById("test")

        easy common way:
    function $(id){
            test = document.getElementById(id)
    }
        use as:
    var test = $("ID")

Grabbing the element node (the whole HTML element is called a node). <br>
In console you can enter the name of the var and it will select the element.
If you hit . you can see many things you can do with the var holding the element. Here are stores many methods.
<br>

To modify things in the element:

    test.innerHTML = "<u> Test test test<u>";
To store old text from a element:

    test.oldText = test.innerHTML;

## String Manipulation
Take a variable and change it. 

    var text = document.getElementById('IdHere').innerHTML;
    var upperTextAll = text.toUpperCase();
    var lowerTextAll = text.toLowerCase();
Cuts first 10 char:

    var after10Char = text.substr(10);
 
First 10 characters:

    var first10Char = text.substr(0, 10);
Split = creates a array out of a string splitting it by a parameter I set. 

    var words = text.split(" ")
Join  = join back the string, can specify how to join

    var sentence = words.join("x");

Slice = cut a part of a string

    var cuts = text.slice(0, 3);

## User Input
This example creates a prompt, saves the value and use it to rewrite a inner HTML text:

    var name = prompt("What is your name ?", optionalPlaceholderHere);
    var nodeText = document.getElementById.innerHTML;
    nodeText = name;

## Comparison Operators
<code>
  - !=      dose not qual<br>
  - ==      equals<br>
  - ===     strictly equal<br>
  - > greater than<br>
  - < lesser than<br>
  - >= greater than or equal to<br>
  - <= lesser than or equal to<br>
</code> <br>
Example of input checker and inner HTML modification:
    
    if ( name.toLowerCase() == "andreea") {
        nodeText = "Welcome Andreea";
    }
    //You can put a single var between the (), it will be true for any number

## Switch
Like nested ifs and elses:

    switch(varToChangeName) {
        case "mango":
            console.log("hello Mango!")
            break;
        case "coconut":
            console.log("stuff here")
            break;
        default:
            console.log("If not in a case it will go here.")
            break;
    }

## Arithmetic Order Rule
BEDMAS = Brackets, Exponents, Division/Multiplication, Addition/Substraction

## Boolean Logic
<br>
AND: <br>
True + True = True <br>
True + False = False <br>
False + False = False <br>
<br>
OR: <br>
True + True = True <br>
True + False = True <br>
False + False = False <br>

## Array manipulation
Defining an array:

    num = ["stuff", ints, float, booleansToo];
    num = Array(1, 2 ,7);
    //create an array

    num[2];
    //select item nr 3

    num.lenght
    //tells you the total nr of items, or charcaters or properties

    num.push("Parrot");
    //add items

    num.slice(start, end);
    //cuts the array

    names.pop();
    //takes last item out

## Type of variable

    typeof(VAriableName);

## Typecasting
Take a variable and force it ot be another type.

    age = Number(age);
    //strings become numbers if numbers, else it becomes a Nan

    age = String(age);
    age = Array(age);
    age = Boolean(age);

## Functions
Sets of rules os i don't repeat myself.

    function nameMeSenpai ( parameter/varName ) {
        what to do here

        return //what the function retuns here only
    }

    function cToF (cNum) {
        var fahrenheight = cNum * 1.8 + 32;
        return fahrenheight;
    }