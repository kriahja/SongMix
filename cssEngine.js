function cssEngine(rule) {
  var css = document.createElement('style'); // Creates <style></style>
  css.type = 'text/css'; // Specifies the type
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css); // Specifies where to place the css
}

// CSS rules for html objects created in mix.js



// Load the rules and execute
window.onload = function() {cssEngine()};

/*
In the real world, you'll want to load
cssEngine after the DOM loads like this:

window.onload = function() {cssEngine(rule)};

rule  = '.red {background-color: green}';
rule += '.blue {background-color: blue}';

*/
