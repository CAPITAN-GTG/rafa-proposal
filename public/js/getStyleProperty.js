/**
 * getStyleProperty - Get CSS property with vendor prefix support
 */
(function(window) {
  'use strict';

  function getStyleProperty(propName) {
    var prefixes = ['', 'Webkit', 'Moz', 'O', 'ms'];
    var style = document.documentElement.style;
    
    for (var i = 0; i < prefixes.length; i++) {
      var prefixedProp = prefixes[i] ? prefixes[i] + propName.charAt(0).toUpperCase() + propName.slice(1) : propName;
      if (style[prefixedProp] !== undefined) {
        return prefixedProp;
      }
    }
    return null;
  }

  window.getStyleProperty = getStyleProperty;
})(window);

