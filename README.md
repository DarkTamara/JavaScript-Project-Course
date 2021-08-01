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
