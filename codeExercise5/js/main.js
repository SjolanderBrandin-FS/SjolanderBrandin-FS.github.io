/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------
*/

console.log('------------ DOCUMENT OBJECT MODEL -------------------');

/*

	==================================================================
	document.getElementsByTagName(string);
	------------------------------------------------------------------
	- Finds all html elements on the page with a matching html tag
	- RETURNS an array (collection) of DOM objects.
*/

console.log('------------ getElementsByTagName -------------------');

var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

/*
==================================================================
document.getElementById(string);
------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
- RETURNS a single DOM object.
- Requires a string.
- If there are more than 1 id, it returns the first.

------------------------------------------------------------------
	BEST PRACTICE:

	- Save the html element to a variable for later reference.
- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');

var heading = document.getElementById('heading');
console.log(heading);


/*
	==================================================================
	document.querySelector(string);
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');

var tagBox = document.querySelector('#tagbox');
console.log(tagBox);


/*
 	==================================================================
 	Inner HTML and Style changes
 	------------------------------------------------------------------
 	- innerHTML will change the content of the selected HTML element. It is a good idea to
 	use a class or id assigned to the element, or else you will change EVERY instance of the element.
 	example: variableName.innerHTML = "This will change the content of this element";

	 - You can change style attributes by using style.attribute = "new attribute";
	 It is suggested to only use this for minor changes like color at this stage.
	 variableName.style.choice = "I am changing a CSS style of this object!";
 */

var heading1 = document.querySelector("h1");


	heading1.innerHTML = "I changed the heading";
	heading1.style.color = "blue";


/*
 	==================================================================
 	Events and Event Handlers
 		------------------------------------------------------------------
 	- A Script can be executed when an event occurs, like when a user clicks on an HTML element.

 	- Examples of HTML events:

 		When a user clicks the mouse
 		When a web page has loaded
 		When an image has been loaded
		When the mouse moves over an element
		When an input field is changed
		When an HTML form is submitted
		When a user strokes a key

 */
//This example uses a button to display the current time and date.
var myBtn = document.getElementById("myButton").onclick = displayDate;

function displayDate() {
	document.getElementById("result").innerHTML = Date();
}

//This example uses 2 input fields with a button to add two numbers together.
//creates a click event that calls/triggers the function "application"
var myBtn2 = document.getElementById("myButton2").onclick = application;

//function to get input field values and add them together.

function application(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    var total = 0;
    //add the values together and cast them as numbers instead of strings.
    total = Number(x) + Number(y);

    document.getElementById("result2").innerHTML = total;
    console.log(total);

}





/*******************  STUDENT ACTIVITY ***************************

1. Change 2 HTML elements of the provided page using querySelector.

 var heading2 = document.querySelector("h2");
 heading2.innerHTML = "Now I changed it this";

 var heading3 =document.querySelector("h3");
 heading3.innerHTML = "Another thing is changed!";

2. Change 2 HTML element of the provided page using getElementById.

 var heading2 = document.getElementById("h2");
 heading2.style.color = "Purple";

 var heading3 =document.querySelector("h3");
 heading3.style.color = "Green";

3. Change 1 HTML element of the provided page using getElementsByTagName.

 var paragraphs = document.getElementsByTagName('p');
 paragraphs.style.color = "Grey";

4. Change the style of 1 HTML element.

 paragraphs.style.fontStyle = "Grey";

5. Change the content of 1 HTML element using innerHTML.

 var heading4 = document.querySelector("h4");
 heading4.innerHTML = "Your age is:";

6. Create one click event using the element "myButton" along with at least one input field.

 var paragraphs = document.getElementsByTagName('p');
 paragraphs.innerHTML = "Enter your age below";

 var myBtn = document.getElementById("myButton").onclick = application;
 function application(){
    var x = document.getElementById("input1").value;

    document.getElementById("result2").innerHTML = x;
    console.log(x);

}

**********************************************************************/

