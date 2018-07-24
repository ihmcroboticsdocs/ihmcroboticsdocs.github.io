//NB: for this to work, i had to npm install isomorphic-fetch, jsdom, and jquery
/*
 * Remember all the changes you made: cahnges codesnippet.js in scs repo, changed the md files (MOBILE-ROBOT-DESCRIPTION) to include div top and bottom w id, and put id in script
 */

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
fetch = require('isomorphic-fetch');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

var urls = ["https://ihmcroboticsdocs.github.io/ihmc-open-robotics-software/docs/03-new-class-eclipse.html",
"https://ihmcroboticsdocs.github.io/ihmc-open-robotics-software/docs/03-new-class-intellij.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/02-simple-pendulum-simulation.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/03-simple-pendulum-robot.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/01-adding-control-to-a-simulation.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/01-creating-links.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/02-mobile-simulation.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/03-mobile-robot.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/04-mobile-robot-description.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/02-falling-brick-setup.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/05-description.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/02-flyball-governor-simulation.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/03-flyball-governor-robot.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/04-flyball-controller.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/05-flyball-governor-common-control-parameters.html",
"https://ihmcroboticsdocs.github.io/simulation-construction-set/docs/06-description-and-analysis.html"];

var container = document.createElement('div');
container.setAttribute("id","placeholder");
container.setAttribute("class", "extracted");
document.body.appendChild(container);
var rawHTML, parsedElements; ///raw html without snippet script executed

//Idea: for each webpage you have an errors elemetn that is hidden, if there are errors, the original code snippet script will write to that element. If not, it should be empty

$.get(urls[8])
	.done(function(data){rawHTML = $($.parseHTML(data, true)).find('#mainPortion');})
	.then(function() {
		//var last = rawHTML[rawHTML.length -1];
		//parsedElements = $.parseHTML(last.innerHTML, document, true)[0];
		//var parsed = $.parseHTML(parsedElements.innerHTML, document, true)[1];
		//var finalParsed = $.parseHTML(parsed.innerHTML, document, true);
		console.log(rawHTML[0].outerHTML);
		
		//parsedElements = $.parseHTML(rawHTML[rawHTML.length-1].innerHTML, document, true); //gets the div element and footer
		//console.log(parsedElements[1].outerHTML);
		
		});


/*
$.ajax({
	url: urls[8],
	   success: function(data, textStatus, jqXHR) {
	       $("#placeholder").html(jqXHR.responseText);
	       var reponse = jQuery(jqXHR.responseText);
	       var reponseScript = reponse.filter("script");
	       jQuery.each(reponseScript, function(idx, val) { eval(val.text); } );
	   }
	});

*/



	/*
	, function(response, status, xhr) {
		$("#placeholder").html(xhr.responseText);
		console.log(xhr.responseText);
	});
*/

/*
window.onload = console.log(document.getElementById("success"));

var failure = document.createElement('div');
failure.setAttribute("id","error");


$("#success").load(urls[8], function(response,status,xhr){
	if(status == "error") {
		var msg = "There is an error";
		("#error").html(msg + xhr.status + " " + xhr.statusText);
		console.log(failure.innerHTML);
	} //else {
		//("#success").html(response);
		//console.log(response);
	//}
});
*/




/*
//method 1: use fetch to load all the urls, this one has async at top
fetch(urls[1]).then(function(response) {
	return response.text();
}).then(text => console.log(text));
*/
	
/*
 * 

var response = $().load(urls[8]);
*/


//console.log($.ajax({url:urls[8], dataType: "html"}));

/*
var request = new XMLHttpRequest();
request.open('GET', urls[8], true);

request.onloadend = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
    console.log(resp);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
*/
