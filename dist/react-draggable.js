(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react-dom"), require("react"));
	else
		root["ReactDraggable"] = factory(root["ReactDOM"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.styleHacks = styleHacks;

var _shims = __webpack_require__(8);

var _getPrefix = __webpack_require__(17);

var matchesSelectorFunc = '';
function matchesSelector(el, selector) {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      return (0, _shims.isFunction)(el[method]);
    });
  }

  return el[matchesSelectorFunc].call(el, selector);
}

// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el, selector, baseNode) {
  var node = el;
  do {
    if (matchesSelector(node, selector)) {
      return true;
    }
    if (node === baseNode) {
      return false;
    }
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el, event, handler) {
  if (!el) {
    return;
  }
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    el['on' + event] = handler;
  }
}

function removeEvent(el, event, handler) {
  if (!el) {
    return;
  }
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    el['on' + event] = null;
  }
}

function outerHeight(node) {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node) {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}
function innerHeight(node) {
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node) {
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
}

// Get from offsetParent
function offsetXYFromParent(evt, offsetParent) {
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

  return { x: x, y: y };
}

function createCSSTransform(_ref) {
  var x = _ref.x,
      y = _ref.y;

  // Replace unitless items with px
  return { left: x, top: y };
}

function createSVGTransform(_ref2) {
  var x = _ref2.x,
      y = _ref2.y;

  return 'translate(' + x + ',' + y + ')';
}

function getTouch(e, identifier) {
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e) {
  if (e.targetTouches && e.targetTouches[0]) {
    return e.targetTouches[0].identifier;
  }
  if (e.changedTouches && e.changedTouches[0]) {
    return e.changedTouches[0].identifier;
  }
}

// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
var userSelectPrefix = (0, _getPrefix.getPrefix)('user-select');
var userSelect = (0, _getPrefix.browserPrefixToStyle)('user-select', userSelectPrefix);
var userSelectStyle = ';' + userSelect + ': none;';
var userSelectReplaceRegExp = new RegExp(';?' + userSelect + ': none;'); // leading ; not present on IE

// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(body) {
  var style = body.getAttribute('style') || '';
  if (userSelectReplaceRegExp.test(style)) {
    return;
  } // don't add twice
  body.setAttribute('style', style + userSelectStyle);
}

function removeUserSelectStyles(body) {
  var style = body.getAttribute('style') || '';
  body.setAttribute('style', style.replace(userSelectReplaceRegExp, ''));
}

function styleHacks() {
  var childStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Workaround IE pointer events; see #51
  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
  return _extends({
    touchAction: 'none'
  }, childStyle);
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(13)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(15)();
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(0);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array, callback) {
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) {
      return array[i];
    }
  }
}

function isFunction(func) {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num) {
  return typeof num === 'number' && !isNaN(num);
}

function int(a) {
  return parseInt(a, 10);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDraggableDataOnDrop = exports.createDraggableData = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;

var _shims = __webpack_require__(8);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBoundPosition(draggable, x, y) {
    // If no bounds, short-circuit and move on
    if (!draggable.props.bounds) {
        return [x, y];
    }

    // Clone new bounds
    var bounds = draggable.props.bounds;

    bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
    var node = _reactDom2.default.findDOMNode(draggable);

    if (typeof bounds === 'string') {
        var ownerDocument = node.ownerDocument;

        var ownerWindow = ownerDocument.defaultView;
        var boundNode = void 0;
        if (bounds === 'parent') {
            boundNode = node.parentNode;
        } else {
            boundNode = ownerDocument.querySelector(bounds);
            if (!boundNode) {
                throw new Error('Bounds selector "' + bounds + '" could not find an element.');
            }
        }
        var nodeStyle = ownerWindow.getComputedStyle(node);
        var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
        // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
        bounds = {
            left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
            top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
            right: (0, _dom.innerWidth)(boundNode) - (0, _dom.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
            bottom: (0, _dom.innerHeight)(boundNode) - (0, _dom.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
        };
    }

    // Keep x and y below right and bottom limits...
    if ((0, _shims.isNum)(bounds.right)) {
        x = Math.min(x, bounds.right);
    }
    if ((0, _shims.isNum)(bounds.bottom)) {
        y = Math.min(y, bounds.bottom);
    }

    // But above left and top limits.
    if ((0, _shims.isNum)(bounds.left)) {
        x = Math.max(x, bounds.left);
    }
    if ((0, _shims.isNum)(bounds.top)) {
        y = Math.max(y, bounds.top);
    }

    return { x: x, y: y };
}

function snapToGrid(grid, pendingX, pendingY) {
    var x = Math.round(pendingX / grid[0]) * grid[0];
    var y = Math.round(pendingY / grid[1]) * grid[1];
    return { x: x, y: y };
}

function canDragX(draggable) {
    return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable) {
    return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}

// Get {x, y} positions from event.
// Get {x, y} positions from event.
function getControlPosition(e, touchIdentifier, draggableCore) {
    var touchObj = typeof touchIdentifier === 'number' ? (0, _dom.getTouch)(e, touchIdentifier) : null;
    if (typeof touchIdentifier === 'number' && !touchObj) {
        return null;
    } // not the right touch
    var node = _reactDom2.default.findDOMNode(draggableCore);
    // User can provide an offsetParent if desired.
    var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
    return (0, _dom.offsetXYFromParent)(touchObj || e, offsetParent);
}

// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable, x, y) {
    var state = draggable.state;
    var isStart = !(0, _shims.isNum)(state.lastX);

    if (isStart) {
        // If this is our first move, use the x and y as last coords.
        return {
            node: _reactDom2.default.findDOMNode(draggable),
            deltaX: 0, deltaY: 0,
            lastX: x, lastY: y,
            x: x,
            y: y
        };
    } else {
        // Otherwise calculate proper values.
        return {
            node: _reactDom2.default.findDOMNode(draggable),
            deltaX: x - state.lastX, deltaY: y - state.lastY,
            lastX: state.lastX, lastY: state.lastY,
            x: x,
            y: y
        };
    }
}

var createDraggableData = exports.createDraggableData = function createDraggableData(draggable, coreData) {
    var parent = coreData.node.parentElement;
    return _extends({
        node: coreData.node
    }, getPositionInTheSameParent(draggable.state, coreData, parent), {
        deltaX: coreData.deltaX,
        deltaY: coreData.deltaY,
        lastX: draggable.state.x,
        lastY: draggable.state.y
    });
};

var createDraggableDataOnDrop = exports.createDraggableDataOnDrop = function createDraggableDataOnDrop(draggable, coreData, event, offset) {
    var parent = coreData.node.parentElement;
    var isDropMadeToTheSameWidget = parent === event.target;
    var position = isDropMadeToTheSameWidget ? getPositionInTheSameParent(draggable.state, coreData, parent) : getPositionRelativeToNewParent(event, draggable.state, offset);

    return _extends({
        node: coreData.node,
        parentNode: isDropMadeToTheSameWidget ? coreData.node.parentElement : event.target
    }, position);
};

var getPositionInTheSameParent = function getPositionInTheSameParent(_ref, _ref2, parent) {
    var x = _ref.x,
        y = _ref.y;
    var deltaX = _ref2.deltaX,
        deltaY = _ref2.deltaY;
    return {
        x: getPosition(x, deltaX, parent.clientWidth),
        y: getPosition(y, deltaY, parent.clientHeight)
    };
};

var getPositionRelativeToNewParent = function getPositionRelativeToNewParent(event, _ref3, _ref4) {
    var x = _ref3.x,
        y = _ref3.y;
    var offsetX = _ref4.offsetX,
        offsetY = _ref4.offsetY;

    var newParent = event.target;
    var rect = newParent.getBoundingClientRect();
    var mouseX = event.clientX - offsetX - rect.left;
    var mouseY = event.clientY - offsetY - rect.top;

    return {
        x: getPositionFromMouse(x, newParent.clientWidth, mouseX),
        y: getPositionFromMouse(y, newParent.clientHeight, mouseY)
    };
};

var getPositionFromMouse = function getPositionFromMouse(position, parentSize, mousePosition) {
    if (isNumeric(position)) {
        return mousePosition;
    }

    var _parseValue = parseValue(position),
        value = _parseValue.value;

    if (value === 'px') {
        return mousePosition + value;
    }

    return getPercentageValue(mousePosition, parentSize) + value;
};

var getPosition = function getPosition(position, delta, parentSize) {
    if (isNumeric(position)) {
        return position;
    }

    var _parseValue2 = parseValue(position),
        text = _parseValue2.text,
        value = _parseValue2.value;

    if (value === 'px') {
        return text + delta + value;
    }

    return text + getPercentageValue(delta, parentSize) + value;
};

var getPercentageValue = function getPercentageValue(value, parentValue) {
    return parseFloat((value / parentValue * 100).toFixed(2));
};

var isNumeric = function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var parseValue = function parseValue(input) {
    var text = input.replace(/[^-\d.]/g, '');
    var value = input.substring(text.length);
    return { text: parseFloat(text), value: value };
};

// A lot faster than stringify/parse
function cloneBounds(bounds) {
    return {
        left: bounds.left,
        top: bounds.top,
        right: bounds.right,
        bottom: bounds.bottom
    };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dom = __webpack_require__(4);

var _position = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Simple abstraction for dragging events names.
var eventsFor = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend'
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup'
    }

    // Default to mouse events.
};var dragEventFor = eventsFor.mouse;

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//

var DraggableCore = function (_React$Component) {
    _inherits(DraggableCore, _React$Component);

    function DraggableCore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DraggableCore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dragging: false,
            // Used while dragging to determine deltas.
            lastX: NaN, lastY: NaN,
            touchIdentifier: null
        }, _this.handleDragStart = function (e) {
            // Make it possible to attach event handlers on top of this one.
            _this.props.onMouseDown(e);

            // Only accept left-clicks.
            if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) {
                return false;
            }

            // Get nodes. Be sure to grab relative document (could be iframed)
            var domNode = _reactDom2.default.findDOMNode(_this);
            var ownerDocument = domNode.ownerDocument;

            // Short circuit if handle or cancel prop was provided and selector doesn't match.

            if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _dom.matchesSelectorAndParentsTo)(e.target, _this.props.handle, domNode) || _this.props.cancel && (0, _dom.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, domNode)) {
                return;
            }

            // Set touch identifier in component state if this is a touch event. This allows us to
            // distinguish between individual touches on multitouch screens by identifying which
            // touchpoint was set to this element.
            var touchIdentifier = (0, _dom.getTouchIdentifier)(e);
            _this.setState({ touchIdentifier: touchIdentifier });

            // Get the current drag point from the event. This is used as the offset.
            var position = (0, _position.getControlPosition)(e, touchIdentifier, _this);
            var x = position.x,
                y = position.y;

            // Create an event object with all the data parents need to make a decision here.

            var coreEvent = (0, _position.createCoreData)(_this, x, y);

            // Call event handler. If it returns explicit false, cancel.
            var shouldUpdate = _this.props.onStart(e, coreEvent);
            if (shouldUpdate === false) {
                return;
            }

            // Add a style to the body to disable user-select. This prevents text from
            // being selected all over the page.
            if (_this.props.enableUserSelectHack) {
                (0, _dom.addUserSelectStyles)(ownerDocument.body);
            }

            // Initiate dragging. Set the current x and y as offsets
            // so we know how much we've moved during the drag. This allows us
            // to drag elements around even if they have been moved, without issue.
            _this.setState({
                dragging: true,

                lastX: x,
                lastY: y
            });

            // Add events to the document directly so we catch when the user's mouse/touch moves outside of
            // this element. We use different events depending on whether or not we have detected that this
            // is a touch-capable device.
            (0, _dom.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
            (0, _dom.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
        }, _this.handleDrag = function (e) {

            // Prevent scrolling on mobile devices, like ipad/iphone.
            if (e.type === 'touchmove') {
                e.preventDefault();
            }

            // Get the current drag point from the event. This is used as the offset.
            var position = (0, _position.getControlPosition)(e, _this.state.touchIdentifier, _this);
            if (!position) {
                return;
            }
            var x = position.x,
                y = position.y;

            // Snap to grid if prop has been provided

            if (Array.isArray(_this.props.grid)) {
                var deltaX = x - _this.state.lastX,
                    deltaY = y - _this.state.lastY;

                var _snapToGrid = (0, _position.snapToGrid)(_this.props.grid, deltaX, deltaY),
                    newDeltaX = _snapToGrid.newDeltaX,
                    newDeltaY = _snapToGrid.newDeltaY;

                deltaX = newDeltaX;
                deltaY = newDeltaY;

                if (!deltaX && !deltaY) {
                    return;
                } // skip useless drag
                x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
            }

            var coreEvent = (0, _position.createCoreData)(_this, x, y);

            // Call event handler. If it returns explicit false, trigger end.
            var shouldUpdate = _this.props.onDrag(e, coreEvent);
            if (shouldUpdate === false) {
                try {
                    _this.handleDragStop(new MouseEvent('mouseup'));
                } catch (err) {
                    // Old browsers
                    var event = document.createEvent('MouseEvents');
                    // I see why this insanity was deprecated
                    event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    _this.handleDragStop(event);
                }
                return;
            }

            _this.setState({
                lastX: x,
                lastY: y
            });
        }, _this.handleDragStop = function (e) {
            _this.props.onMouseUp(e);

            if (!_this.state.dragging) {
                return;
            }

            var position = (0, _position.getControlPosition)(e, _this.state.touchIdentifier, _this);
            if (!position) {
                return;
            }
            var x = position.x,
                y = position.y;

            var coreEvent = (0, _position.createCoreData)(_this, x, y);

            var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this),
                ownerDocument = _ReactDOM$findDOMNode.ownerDocument;

            // Remove user-select hack


            if (_this.props.enableUserSelectHack) {
                (0, _dom.removeUserSelectStyles)(ownerDocument.body);
            }

            // Reset the el.
            _this.setState({
                dragging: false,
                lastX: NaN,
                lastY: NaN
            });

            // Call event handler
            _this.props.onStop(e, coreEvent);

            // Remove event handlers
            (0, _dom.removeEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
            (0, _dom.removeEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
        }, _this.onMouseDown = function (e) {
            dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
            return _this.handleDragStart(e);
        }, _this.onMouseUp = function (e) {
            dragEventFor = eventsFor.mouse;
            return _this.handleDragStop(e);
        }, _this.onTouchStart = function (e) {
            // We're on a touch device now, so change the event handlers
            dragEventFor = eventsFor.touch;

            return _this.handleDragStart(e);
        }, _this.onTouchEnd = function (e) {
            // We're on a touch device now, so change the event handlers
            dragEventFor = eventsFor.touch;

            return _this.handleDragStop(e);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DraggableCore, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Remove any leftover event handlers. Remove both touch and mouse handlers in case
            // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
            var _ReactDOM$findDOMNode2 = _reactDom2.default.findDOMNode(this),
                ownerDocument = _ReactDOM$findDOMNode2.ownerDocument;

            (0, _dom.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
            (0, _dom.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
            (0, _dom.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
            (0, _dom.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
            if (this.props.enableUserSelectHack) {
                (0, _dom.removeUserSelectStyles)(ownerDocument.body);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // Reuse the child provided
            // This makes it flexible to use whatever element is wanted (div, ul, etc)
            // eslint-disable-next-line react/prop-types
            return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
                // eslint-disable-next-line react/prop-types
                style: (0, _dom.styleHacks)(this.props.children.props.style),

                // Note: mouseMove handler is attached to document so it will still function
                // when the user drags quickly and leaves the bounds of the element.
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                onMouseUp: this.onMouseUp,
                onTouchEnd: this.onTouchEnd
            });
        }

        // Same as onMouseDown (start drag), but now consider this a touch device.

    }]);

    return DraggableCore;
}(_react2.default.Component);

DraggableCore.propTypes = {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: _propTypes2.default.bool,

    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: _propTypes2.default.bool,

    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: _propTypes2.default.bool,

    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    // eslint-disable-next-line react/no-unused-prop-types
    offsetParent: function offsetParent(props, propName) {
        if (process.browser && props[propName] && props[propName].nodeType !== 1) {
            throw new Error('Draggable\'s offsetParent must be a DOM Node.');
        }
    },

    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: _propTypes2.default.arrayOf(_propTypes2.default.number),

    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
    *       render: function () {
    *         return (
    *            <Draggable handle=".handle">
    *              <div>
    *                  <div className="handle">Click me to drag</div>
    *                  <div>This is some other content</div>
    *              </div>
    *           </Draggable>
    *         )
    *       }
    *   })
     * ```
     */
    handle: _propTypes2.default.string,

    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
    *       render: function () {
    *           return(
    *               <Draggable cancel=".cancel">
    *                   <div>
    *                     <div className="cancel">You can't drag from here</div>
    *                     <div>Dragging here works fine</div>
    *                   </div>
    *               </Draggable>
    *           )
    *       }
    *   })
     * ```
     */
    cancel: _propTypes2.default.string,

    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: _propTypes2.default.func,

    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: _propTypes2.default.func,

    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: _propTypes2.default.func,

    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func
};
DraggableCore.defaultProps = {
    allowAnyClick: false, // by default only accept left click
    cancel: null,
    disabled: false,
    enableUserSelectHack: true,
    offsetParent: null,
    handle: null,
    grid: null,
    transform: null,
    onStart: function onStart() {},
    onDrag: function onDrag() {},
    onStop: function onStop() {},
    onMouseDown: function onMouseDown() {},
    onMouseUp: function onMouseUp() {}
};
exports.default = DraggableCore;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(12).default;
module.exports.DraggableCore = __webpack_require__(10).default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(16);

var _classnames2 = _interopRequireDefault(_classnames);

var _dom = __webpack_require__(4);

var _position = __webpack_require__(9);

var _DraggableCore = __webpack_require__(10);

var _DraggableCore2 = _interopRequireDefault(_DraggableCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Draggable = function (_React$Component) {
    _inherits(Draggable, _React$Component);

    function Draggable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Draggable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            // Whether or not we are currently dragging.
            dragging: false,
            // Whether or not we have been dragged before.
            dragged: false,
            // Current transform x and y.
            x: _this.props.position ? _this.props.position.x : _this.props.defaultPosition.x,
            y: _this.props.position ? _this.props.position.y : _this.props.defaultPosition.y,
            // Used for compensating for out-of-bounds drags
            slackX: 0,
            slackY: 0,
            // Can only determine if SVG after mounting
            isElementSVG: false,
            childStyle: { zIndex: 'none', overflow: 'none' },
            parentStyle: { zIndex: 'none', overflow: 'none' }
        }, _this.onDragStart = function (event, coreData) {
            _this.saveMouseOffset(event);
            _this.putElementOnTop(coreData.node, 'childStyle');
            _this.putElementOnTop(coreData.node.parentElement, 'parentStyle');

            // Short-circuit if user's callback killed it.
            var shouldStart = _this.props.onStart(event, (0, _position.createDraggableData)(_this, coreData));
            // Kills start event on core as well, so move handlers are never bound.
            if (shouldStart === false) {
                return false;
            }

            _this.setState({ dragging: true, dragged: true });
        }, _this.onDrag = function (event, coreData) {
            if (!_this.state.dragging) {
                return false;
            }

            var uiData = (0, _position.createDraggableData)(_this, coreData);
            var newState = {
                x: uiData.x,
                y: uiData.y

                // Keep within bounds.
            };if (_this.props.bounds) {
                // Save original x and y.

                // Add slack to the values used to calculate bound position. This will ensure that if
                // we start removing slack, the element won't react to it right away until it's been
                // completely removed.

                // Get bound position. This will ceil/floor the x and y within the boundaries.
                var _getBoundPosition = (0, _position.getBoundPosition)(_this, newState.x, newState.y),
                    x = _getBoundPosition.x,
                    y = _getBoundPosition.y;

                newState.x = x;
                newState.y = y;

                // Recalculate slack by noting how much was shaved by the boundPosition handler.
                newState.slackX = _this.state.slackX + (x - newState.x);
                newState.slackY = _this.state.slackY + (y - newState.y);

                // Update the event we fire to reflect what really happened after bounds took effect.
                uiData.x = x;
                uiData.y = y;
                uiData.deltaX = newState.x - _this.state.x;
                uiData.deltaY = newState.y - _this.state.y;
            }

            // Short-circuit if user's callback killed it.
            var shouldUpdate = _this.props.onDrag(event, uiData);
            if (shouldUpdate === false) {
                return false;
            }

            _this.setState(newState);
        }, _this.onDragStop = function (event, coreData) {
            if (!_this.state.dragging) {
                return false;
            }

            _this.putElementBack(coreData.node, 'childStyle');
            _this.putElementBack(coreData.node.parentElement, 'parentStyle');

            // Short-circuit if user's callback killed it.
            var shouldStop = _this.props.onStop(event, (0, _position.createDraggableDataOnDrop)(_this, coreData, event, _this.state.offset));
            if (shouldStop === false) {
                return false;
            }

            var newState = {
                dragging: false,
                slackX: 0,
                slackY: 0

                // If this is a controlled component, the result of this operation will be to
                // revert back to the old position. We expect a handler on `onDragStop`, at the least.
            };var controlled = Boolean(_this.props.position);
            if (controlled) {
                var _this$props$position = _this.props.position,
                    x = _this$props$position.x,
                    y = _this$props$position.y;

                newState.x = x;
                newState.y = y;
            }

            _this.setState(newState);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Draggable, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
                console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust ' + 'the `position` of this element.');
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Check to see if the element passed is an instanceof SVGElement
            if (typeof SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof SVGElement) {
                // eslint-disable-next-line react/no-did-mount-set-state
                this.setState({ isElementSVG: true });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // Set x/y if position has changed
            if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
                this.setState({ x: nextProps.position.x, y: nextProps.position.y });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var style = {},
                svgTransform = null;

            // If this is controlled, we don't want to move it - unless it's dragging.
            var controlled = Boolean(this.props.position);
            var draggable = !controlled || this.state.dragging;

            var position = this.props.position || this.props.defaultPosition;
            var transformOpts = {
                // Set left if horizontal drag is enabled
                x: (0, _position.canDragX)(this) && draggable ? this.state.x : position.x,

                // Set top if vertical drag is enabled
                y: (0, _position.canDragY)(this) && draggable ? this.state.y : position.y

                // If this element was SVG, we use the `transform` attribute.
            };if (this.state.isElementSVG) {
                svgTransform = (0, _dom.createSVGTransform)(transformOpts);
            } else {
                // Add a CSS transform to move the element around. This allows us to move the element around
                // without worrying about whether or not it is relatively or absolutely positioned.
                // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
                // has a clean slate.
                style = (0, _dom.createCSSTransform)(transformOpts);
            }

            var _props = this.props,
                defaultClassName = _props.defaultClassName,
                defaultClassNameDragging = _props.defaultClassNameDragging,
                defaultClassNameDragged = _props.defaultClassNameDragged;

            // Mark with class while dragging

            var className = (0, _classnames2.default)(this.props.children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

            // Reuse the child provided
            // This makes it flexible to use whatever element is wanted (div, ul, etc)
            return _react2.default.createElement(
                _DraggableCore2.default,
                _extends({}, this.props, {
                    onStart: this.onDragStart,
                    onDrag: this.onDrag,
                    onStop: this.onDragStop }),
                _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
                    className: className,
                    style: _extends({}, this.props.children.props.style, style),
                    transform: svgTransform
                })
            );
        }
    }, {
        key: 'saveMouseOffset',
        value: function saveMouseOffset(event) {
            var rect = event.target.getBoundingClientRect();
            this.setState({ offset: { offsetX: event.pageX - rect.left, offsetY: event.pageY - rect.top } });
        }
    }, {
        key: 'putElementOnTop',
        value: function putElementOnTop(element, styleId) {
            this.setState(_defineProperty({}, styleId, { zIndex: element.style.zIndex, overflow: element.style.overflow }));
            element.style.zIndex = 10000;
            if (styleId === 'parentStyle') {
                element.style.overflow = 'visible';
            }
        }
    }, {
        key: 'putElementBack',
        value: function putElementBack(element, styleId) {
            element.style.zIndex = this.state[styleId].zIndex;
            element.style.overflow = this.state[styleId].overflow;
        }
    }]);

    return Draggable;
}(_react2.default.Component);

Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {

    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: _propTypes2.default.oneOf(['both', 'x', 'y', 'none']),

    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
    *       render: function () {
    *         return (
    *            <Draggable bounds={{right: 300, bottom: 300}}>
    *              <div>Content</div>
    *           </Draggable>
    *         )
    *       }
    *   })
     * ```
     */
    bounds: _propTypes2.default.oneOfType([_propTypes2.default.shape({
        left: _propTypes2.default.number,
        right: _propTypes2.default.number,
        top: _propTypes2.default.number,
        bottom: _propTypes2.default.number
    }), _propTypes2.default.string, _propTypes2.default.oneOf([false])]),

    defaultClassName: _propTypes2.default.string,
    defaultClassNameDragging: _propTypes2.default.string,
    defaultClassNameDragged: _propTypes2.default.string,

    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
    *          render: function () {
    *              return (
    *                  <Draggable defaultPosition={{x: 25, y: 25}}>
    *                      <div>I start with transformX: 25px and transformY: 25px</div>
    *                  </Draggable>
    *              )
    *          }
    *      })
     * ```
     */
    defaultPosition: _propTypes2.default.shape({
        x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }),

    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
    *          render: function () {
    *              return (
    *                  <Draggable position={{x: 25, y: 25}}>
    *                      <div>I start with transformX: 25px and transformY: 25px</div>
    *                  </Draggable>
    *              )
    *          }
    *      })
     * ```
     */
    position: _propTypes2.default.shape({
        x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    })
});
Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
    axis: 'both',
    bounds: false,
    defaultClassName: 'react-draggable',
    defaultClassNameDragging: 'react-draggable-dragging',
    defaultClassNameDragged: 'react-draggable-dragged',
    defaultPosition: { x: 0, y: 0 },
    position: null
});
exports.default = Draggable;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(7);

var ReactPropTypesSecret = __webpack_require__(2);
var checkPropTypes = __webpack_require__(14);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(2);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(2);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() {
  var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') {
    return '';
  }

  var style = window.document.documentElement.style;

  if (prop in style) {
    return '';
  }

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) {
      return prefixes[i];
    }
  }

  return '';
}

function browserPrefixToKey(prop, prefix) {
  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
}

function browserPrefixToStyle(prop, prefix) {
  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
}

function kebabToTitleCase(str) {
  var out = '';
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
exports.default = getPrefix();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-draggable.js.map