function cssEngine(rule) {
  var css = document.createElement('style'); // Creates <style></style>
  css.type = 'text/css'; // Specifies the type
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css); // Specifies where to place the css
}

// CSS rules for html objects created in mix.js
var
    rule = '.banner-top {text-align: center}';
    rule += '#btn-border {border: 10px solid #cecece}';


    rule += '.button_song--remove {background-color: #d9534f}';
    rule += '.button_song--remove:hover {background-color: #c12e2a}';

    rule += '.button_song--remove {border: none}';
    rule += '.button_song--remove {font-weight: bold}';
    rule += '.button_song--remove {border-radius: 4px}';
    rule += '.button_song--remove {padding: 14px}';



// Load the rules and execute
window.onload = function() {cssEngine(rule)};

/*
In the real world, you'll want to load
cssEngine after the DOM loads like this:

window.onload = function() {cssEngine(rule)};

rule  = '.red {background-color: green}';
rule += '.blue {background-color: blue}';

*/
