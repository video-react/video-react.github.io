(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("video-react", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["video-react"] = factory(require("react"), require("react-dom"));
	else
		root["video-react"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	module.exports = __webpack_require__(50);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.formatTime = formatTime;
	exports.isVideoChild = isVideoChild;
	exports.mergeAndSortChildren = mergeAndSortChildren;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @file format-time.js
	 *
	 * Format seconds as a time string, H:MM:SS or M:SS
	 * Supplying a guide (in seconds) will force a number of leading zeros
	 * to cover the length of the guide
	 *
	 * @param  {Number} seconds Number of seconds to be turned into a string
	 * @param  {Number} guide   Number (in seconds) to model the string after
	 * @return {String}         Time formatted as H:MM:SS or M:SS
	 * @private
	 * @function formatTime
	 */
	function formatTime() {
	  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;
	
	  var s = Math.floor(seconds % 60);
	  var m = Math.floor(seconds / 60 % 60);
	  var h = Math.floor(seconds / 3600);
	  var gm = Math.floor(guide / 60 % 60);
	  var gh = Math.floor(guide / 3600);
	
	  // handle invalid times
	  if (isNaN(seconds) || seconds === Infinity) {
	    // '-' is false for all relational operators (e.g. <, >=) so this setting
	    // will add the minimum number of fields specified by the guide
	    h = m = s = '-';
	  }
	
	  // Check if we need to show hours
	  h = h > 0 || gh > 0 ? h + ':' : '';
	
	  // If hours are showing, we may need to add a leading zero.
	  // Always show at least one digit of minutes.
	  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';
	
	  // Check if leading zero is need for seconds
	  s = s < 10 ? '0' + s : s;
	
	  return h + m + s;
	}
	
	// Check if the element belongs to a video element
	// only accept <source />, <track />,
	// <MyComponent isVideoChild />
	// elements
	function isVideoChild(c) {
	  if (c.props && c.props.isVideoChild) {
	    return true;
	  }
	  return c.type === 'source' || c.type === 'track';
	}
	
	// merge default children
	// sort them by `order` property
	// filter them by `disabled` property
	function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
	  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	
	  var children = _react2.default.Children.toArray(_children);
	  var parentProps = _extends({}, _parentProps);
	  return children.filter(function (e) {
	    return !e.props.disabled;
	  }).concat(defaultChildren.filter(function (c) {
	    return !children.find(function (component) {
	      return component.type === c.type;
	    });
	  })).map(function (element) {
	    var defaultComponent = defaultChildren.find(function (c) {
	      return c.type === element.type;
	    });
	    delete parentProps.order;
	    var defaultProps = defaultComponent ? defaultComponent.props : {};
	    var props = _extends({}, parentProps, defaultProps, element.props);
	    var e = _react2.default.cloneElement(element, props, element.props.children);
	    return e;
	  }).sort(function (a, b) {
	    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
	  });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.USER_ACTIVATE = exports.PLAYER_ACTIVATE = exports.FULLSCREEN_CHANGE = exports.OPERATE = undefined;
	exports.handleFullscreenChange = handleFullscreenChange;
	exports.activate = activate;
	exports.userActivate = userActivate;
	exports.play = play;
	exports.pause = pause;
	exports.togglePlay = togglePlay;
	exports.seek = seek;
	exports.forward = forward;
	exports.replay = replay;
	exports.changeRate = changeRate;
	exports.changeVolume = changeVolume;
	exports.mute = mute;
	exports.toggleFullscreen = toggleFullscreen;
	
	var _fullscreen = __webpack_require__(33);
	
	var _fullscreen2 = _interopRequireDefault(_fullscreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OPERATE = exports.OPERATE = 'video-react/OPERATE';
	var FULLSCREEN_CHANGE = exports.FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
	var PLAYER_ACTIVATE = exports.PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
	var USER_ACTIVATE = exports.USER_ACTIVATE = 'video-react/USER_ACTIVATE';
	
	function handleFullscreenChange(isFullscreen) {
	  return {
	    type: FULLSCREEN_CHANGE,
	    isFullscreen: isFullscreen
	  };
	}
	
	function activate(activity) {
	  return {
	    type: PLAYER_ACTIVATE,
	    activity: activity
	  };
	}
	
	function userActivate(activity) {
	  return {
	    type: USER_ACTIVATE,
	    activity: activity
	  };
	}
	
	function play() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'play',
	    source: ''
	  };
	
	  this.video.play();
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function pause() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'pause',
	    source: ''
	  };
	
	  this.video.pause();
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function togglePlay() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'toggle-play',
	    source: ''
	  };
	
	  this.video.togglePlay();
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	// seek video by time
	function seek(time) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'seek',
	    source: ''
	  };
	
	  this.video.seek(time);
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	// jump forward x seconds
	function forward(seconds) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'forward-' + seconds,
	    source: ''
	  };
	
	  this.video.forward(seconds);
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	// jump back x seconds
	function replay(seconds) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'replay-' + seconds,
	    source: ''
	  };
	
	  this.video.replay(seconds);
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function changeRate(rate) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'change-rate',
	    source: ''
	  };
	
	  this.video.playbackRate = rate;
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function changeVolume(volume) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'change-volume',
	    source: ''
	  };
	
	  var v = volume;
	  if (volume < 0) {
	    v = 0;
	  }
	  if (volume > 1) {
	    v = 1;
	  }
	  this.video.volume = v;
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function mute(muted) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: muted ? 'muted' : 'unmuted',
	    source: ''
	  };
	
	  this.video.muted = muted;
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function toggleFullscreen(player) {
	  if (_fullscreen2.default.enabled) {
	    if (_fullscreen2.default.isFullscreen) {
	      _fullscreen2.default.exit();
	    } else {
	      _fullscreen2.default.request(this.rootElement);
	    }
	    return {
	      type: OPERATE,
	      operation: {
	        action: 'toggle-fullscreen',
	        source: ''
	      }
	    };
	  }
	
	  return {
	    type: FULLSCREEN_CHANGE,
	    isFullscreen: !player.isFullscreen
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(6);
	
	var Dom = _interopRequireWildcard(_dom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  className: _react.PropTypes.string,
	  onMouseDown: _react.PropTypes.func,
	  onMouseMove: _react.PropTypes.func,
	  stepForward: _react.PropTypes.func,
	  stepBack: _react.PropTypes.func,
	  sliderActive: _react.PropTypes.func,
	  sliderInactive: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  getPercent: _react.PropTypes.func,
	  vertical: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  player: _react.PropTypes.object,
	  label: _react.PropTypes.string,
	  valuenow: _react.PropTypes.string,
	  valuetext: _react.PropTypes.string
	};
	
	var Slider = function (_Component) {
	  _inherits(Slider, _Component);
	
	  function Slider(props, context) {
	    _classCallCheck(this, Slider);
	
	    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.calculateDistance = _this.calculateDistance.bind(_this);
	    _this.getProgress = _this.getProgress.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	
	    _this.state = {
	      active: false
	    };
	    return _this;
	  }
	
	  _createClass(Slider, [{
	    key: 'getProgress',
	    value: function getProgress() {
	      var getPercent = this.props.getPercent;
	
	      if (!getPercent) {
	        return 0;
	      }
	      var progress = getPercent();
	
	      // Protect against no duration and other division issues
	      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
	        progress = 0;
	      }
	      return progress;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(event) {
	      var onMouseDown = this.props.onMouseDown;
	
	      event.preventDefault();
	      event.stopPropagation();
	
	      document.addEventListener('mousemove', this.handleMouseMove, true);
	      document.addEventListener('mouseup', this.handleMouseUp, true);
	      document.addEventListener('touchmove', this.handleMouseMove, true);
	      document.addEventListener('touchend', this.handleMouseUp, true);
	
	      this.setState({
	        active: true,
	        distance: 0
	      });
	
	      if (this.props.sliderActive) {
	        this.props.sliderActive(event);
	      }
	
	      this.handleMouseMove(event);
	
	      if (onMouseDown) {
	        onMouseDown(event);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var onMouseMove = this.props.onMouseMove;
	
	
	      if (onMouseMove) {
	        onMouseMove(event);
	      }
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var onMouseUp = this.props.onMouseUp;
	
	
	      document.removeEventListener('mousemove', this.handleMouseMove, true);
	      document.removeEventListener('mouseup', this.handleMouseUp, true);
	      document.removeEventListener('touchmove', this.handleMouseMove, true);
	      document.removeEventListener('touchend', this.handleMouseUp, true);
	
	      this.setState({
	        active: false
	      });
	
	      if (this.props.sliderInactive) {
	        this.props.sliderInactive(event);
	      }
	
	      if (onMouseUp) {
	        onMouseUp(event);
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      document.addEventListener('keydown', this.handleKeyPress, true);
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      document.removeEventListener('keydown', this.handleKeyPress, true);
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(event) {
	      if (event.which === 37 || event.which === 40) {
	        // Left and Down Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepBack();
	      } else if (event.which === 38 || event.which === 39) {
	        // Up and Right Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepForward();
	      }
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      if (this.props.stepForward) {
	        this.props.stepForward();
	      }
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      if (this.props.stepBack) {
	        this.props.stepBack();
	      }
	    }
	  }, {
	    key: 'calculateDistance',
	    value: function calculateDistance(event) {
	      var node = (0, _reactDom.findDOMNode)(this);
	      var position = Dom.getPointerPosition(node, event);
	      if (this.props.vertical) {
	        return position.y;
	      }
	      return position.x;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var progress = this.getProgress();
	      var percentage = (progress * 100).toFixed(2) + '%';
	      return _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, { progress: progress, percentage: percentage });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          vertical = _props.vertical,
	          label = _props.label,
	          valuenow = _props.valuenow,
	          valuetext = _props.valuetext;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)(this.props.className, {
	            'video-react-slider-vertical': vertical,
	            'video-react-slider-horizontal': !vertical,
	            'video-react-sliding': this.state.active
	          }, 'video-react-slider'),
	          tabIndex: '0',
	          onMouseDown: this.handleMouseDown,
	          onTouchStart: this.handleMouseDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          'aria-label': label || '',
	          'aria-valuenow': valuenow || '',
	          'aria-valuetext': valuetext || '',
	          'aria-valuemin': 0,
	          'aria-valuemax': 100
	        },
	        this.renderChildren()
	      );
	    }
	  }]);
	
	  return Slider;
	}(_react.Component);
	
	exports.default = Slider;
	
	
	Slider.propTypes = propTypes;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findElPosition = findElPosition;
	exports.getPointerPosition = getPointerPosition;
	exports.blurNode = blurNode;
	exports.hasClass = hasClass;
	
	var _reactDom = __webpack_require__(7);
	
	/**
	 * Offset Left
	 * getBoundingClientRect technique from
	 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
	 *
	 * @function findElPosition
	 * @param {Element} el Element from which to get offset
	 * @return {Object}
	 */
	function findElPosition(el) {
	  var box = void 0;
	
	  if (el.getBoundingClientRect && el.parentNode) {
	    box = el.getBoundingClientRect();
	  }
	
	  if (!box) {
	    return {
	      left: 0,
	      top: 0
	    };
	  }
	
	  var docEl = document.documentElement;
	  var body = document.body;
	
	  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
	  var scrollLeft = window.pageXOffset || body.scrollLeft;
	  var left = box.left + scrollLeft - clientLeft;
	
	  var clientTop = docEl.clientTop || body.clientTop || 0;
	  var scrollTop = window.pageYOffset || body.scrollTop;
	  var top = box.top + scrollTop - clientTop;
	
	  // Android sometimes returns slightly off decimal values, so need to round
	  return {
	    left: Math.round(left),
	    top: Math.round(top)
	  };
	}
	
	/**
	 * Get pointer position in element
	 * Returns an object with x and y coordinates.
	 * The base on the coordinates are the bottom left of the element.
	 *
	 * @function getPointerPosition
	 * @param {Element} el Element on which to get the pointer position on
	 * @param {Event} event Event object
	 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
	 */
	function getPointerPosition(el, event) {
	  var position = {};
	  var box = findElPosition(el);
	  var boxW = el.offsetWidth;
	  var boxH = el.offsetHeight;
	
	  var boxY = box.top;
	  var boxX = box.left;
	  var pageY = event.pageY;
	  var pageX = event.pageX;
	
	  if (event.changedTouches) {
	    pageX = event.changedTouches[0].pageX;
	    pageY = event.changedTouches[0].pageY;
	  }
	
	  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
	  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
	
	  return position;
	}
	
	// blur an element
	function blurNode(reactNode) {
	  var domNode = (0, _reactDom.findDOMNode)(reactNode);
	  if (domNode && domNode.blur) {
	    domNode.blur();
	  }
	}
	
	// check if an element has a class name
	function hasClass(elm, cls) {
	  var classes = elm.className.split(' ');
	  for (var i = 0; i < classes.length; i++) {
	    if (classes[i].toLowerCase() === cls.toLowerCase()) {
	      return true;
	    }
	  }
	  return false;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleMute = handleMute;
	exports.handleLoadStart = handleLoadStart;
	exports.handleCanPlay = handleCanPlay;
	exports.handleWaiting = handleWaiting;
	exports.handleCanPlayThrough = handleCanPlayThrough;
	exports.handlePlaying = handlePlaying;
	exports.handlePlay = handlePlay;
	exports.handlePause = handlePause;
	exports.handleEnd = handleEnd;
	exports.handleSeeking = handleSeeking;
	exports.handleSeeked = handleSeeked;
	exports.handleSeekingTime = handleSeekingTime;
	exports.handleEndSeeking = handleEndSeeking;
	exports.handleDurationChange = handleDurationChange;
	exports.handleTimeUpdate = handleTimeUpdate;
	exports.handleVolumeChange = handleVolumeChange;
	exports.handleProgressChange = handleProgressChange;
	exports.handleRateChange = handleRateChange;
	var VOLUME_MUTE = exports.VOLUME_MUTE = 'video-react/VOLUME_MUTE';
	var LOAD_START = exports.LOAD_START = 'video-react/LOAD_START';
	var CAN_PLAY = exports.CAN_PLAY = 'video-react/CAN_PLAY';
	var WAITING = exports.WAITING = 'video-react/WAITING';
	var CAN_PLAY_THROUGH = exports.CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
	var PLAYING = exports.PLAYING = 'video-react/PLAYING';
	var PLAY = exports.PLAY = 'video-react/PLAY';
	var PAUSE = exports.PAUSE = 'video-react/PAUSE';
	var END = exports.END = 'video-react/END';
	var SEEKING = exports.SEEKING = 'video-react/SEEKING';
	var SEEKED = exports.SEEKED = 'video-react/SEEKED';
	var SEEKING_TIME = exports.SEEKING_TIME = 'video-react/SEEKING_TIME';
	var END_SEEKING = exports.END_SEEKING = 'video-react/END_SEEKING';
	var DURATION_CHANGE = exports.DURATION_CHANGE = 'video-react/DURATION_CHANGE';
	var TIME_UPDATE = exports.TIME_UPDATE = 'video-react/TIME_UPDATE';
	var VOLUME_CHANGE = exports.VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
	var PROGRESS_CHANGE = exports.PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
	var RATE_CHANGE = exports.RATE_CHANGE = 'video-react/RATE_CHANGE';
	
	function handleMute(muted) {
	  return {
	    type: VOLUME_MUTE,
	    muted: muted
	  };
	}
	
	function handleLoadStart(buffered) {
	  return {
	    type: LOAD_START,
	    buffered: buffered
	  };
	}
	
	function handleCanPlay(_ref) {
	  var videoWidth = _ref.videoWidth,
	      videoHeight = _ref.videoHeight,
	      duration = _ref.duration,
	      currentSrc = _ref.currentSrc;
	
	  return {
	    type: CAN_PLAY,
	    videoWidth: videoWidth,
	    videoHeight: videoHeight,
	    duration: duration,
	    currentSrc: currentSrc
	  };
	}
	
	function handleWaiting() {
	  return {
	    type: WAITING
	  };
	}
	
	function handleCanPlayThrough() {
	  return {
	    type: CAN_PLAY_THROUGH
	  };
	}
	
	function handlePlaying() {
	  return {
	    type: PLAYING
	  };
	}
	
	function handlePlay(_ref2) {
	  var duration = _ref2.duration,
	      currentSrc = _ref2.currentSrc;
	
	  return {
	    type: PLAY,
	    duration: duration,
	    currentSrc: currentSrc
	  };
	}
	
	function handlePause() {
	  return {
	    type: PAUSE
	  };
	}
	
	function handleEnd() {
	  return {
	    type: END
	  };
	}
	
	function handleSeeking() {
	  return {
	    type: SEEKING
	  };
	}
	
	function handleSeeked() {
	  return {
	    type: SEEKED
	  };
	}
	
	function handleSeekingTime(time) {
	  return {
	    type: SEEKING_TIME,
	    time: time
	  };
	}
	
	function handleEndSeeking(time) {
	  return {
	    type: END_SEEKING,
	    time: time
	  };
	}
	
	function handleDurationChange(duration) {
	  return {
	    type: DURATION_CHANGE,
	    duration: duration
	  };
	}
	
	function handleTimeUpdate(time) {
	  return {
	    type: TIME_UPDATE,
	    time: time
	  };
	}
	
	function handleVolumeChange(volume, muted) {
	  return {
	    type: VOLUME_CHANGE,
	    volume: volume,
	    muted: muted
	  };
	}
	
	function handleProgressChange(buffered) {
	  return {
	    type: PROGRESS_CHANGE,
	    buffered: buffered
	  };
	}
	
	function handleRateChange(rate) {
	  return {
	    type: RATE_CHANGE,
	    rate: rate
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  manager: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  actions: _react.PropTypes.object
	};
	
	var Bezel = function (_Component) {
	  _inherits(Bezel, _Component);
	
	  function Bezel(props, context) {
	    _classCallCheck(this, Bezel);
	
	    var _this = _possibleConstructorReturn(this, (Bezel.__proto__ || Object.getPrototypeOf(Bezel)).call(this, props, context));
	
	    _this.timer = null;
	    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind(_this));
	
	    _this.state = {
	      hidden: true,
	      operation: {}
	    };
	    return _this;
	  }
	
	  _createClass(Bezel, [{
	    key: 'handleStateChange',
	    value: function handleStateChange(state, prevState) {
	      var _this2 = this;
	
	      var actions = this.props.actions;
	
	      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
	        if (this.timer) {
	          // previous animation is not finished
	          clearTimeout(this.timer); // cancel it
	          this.timer = null;
	        }
	
	        // show it
	        // update operation
	        this.setState({
	          hidden: false,
	          count: state.count,
	          operation: state.operation
	        });
	
	        // hide it after 0.5s
	        this.timer = setTimeout(function () {
	          _this2.setState({
	            hidden: true
	          });
	          _this2.timer = null;
	        }, 500);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // only displays for shortcut so far
	      if (this.state.operation.source !== 'shortcut') {
	        return null;
	      }
	      var style = this.state.hidden ? {
	        display: 'none'
	      } : null;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-bezel': true,
	            'video-react-bezel-animation': this.state.count % 2 === 0,
	            'video-react-bezel-animation-alt': this.state.count % 2 === 1
	          }),
	          style: style,
	          role: 'status',
	          'aria-label': this.state.operation.action
	        },
	        _react2.default.createElement('div', {
	          className: (0, _classnames2.default)('video-react-bezel-icon', 'video-react-bezel-icon-' + this.state.operation.action)
	        })
	      );
	    }
	  }]);
	
	  return Bezel;
	}(_react.Component);
	
	exports.default = Bezel;
	
	
	Bezel.propTypes = propTypes;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  position: _react.PropTypes.string
	};
	
	var defaultProps = {
	  position: 'left'
	};
	
	var BigPlayButton = function (_Component) {
	  _inherits(BigPlayButton, _Component);
	
	  function BigPlayButton(props, context) {
	    _classCallCheck(this, BigPlayButton);
	
	    var _this = _possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(BigPlayButton, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var actions = this.props.actions;
	
	      actions.play();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          player = _props.player,
	          position = _props.position;
	
	      if (player.hasStarted) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)('video-react-big-play-button', 'video-react-big-play-button-' + position),
	          type: 'button',
	          'aria-live': 'polite',
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Play Video'
	        )
	      );
	    }
	  }]);
	
	  return BigPlayButton;
	}(_react.Component);
	
	exports.default = BigPlayButton;
	
	
	BigPlayButton.propTypes = propTypes;
	BigPlayButton.defaultProps = defaultProps;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  tagName: _react.PropTypes.string.isRequired,
	  onClick: _react.PropTypes.func.isRequired,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  className: _react.PropTypes.string
	};
	
	var defaultProps = {
	  tagName: 'div'
	};
	
	var ClickableComponent = function (_Component) {
	  _inherits(ClickableComponent, _Component);
	
	  function ClickableComponent(props, context) {
	    _classCallCheck(this, ClickableComponent);
	
	    var _this = _possibleConstructorReturn(this, (ClickableComponent.__proto__ || Object.getPrototypeOf(ClickableComponent)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }
	
	  _createClass(ClickableComponent, [{
	    key: 'handleKeypress',
	    value: function handleKeypress(event) {
	      // Support Space (32) or Enter (13) key operation to fire a click event
	      if (event.which === 32 || event.which === 13) {
	        event.preventDefault();
	        this.handleClick(event);
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var onClick = this.props.onClick;
	
	      onClick(event);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      document.addEventListener('keydown', this.handleKeypress);
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      document.removeEventListener('keydown', this.handleKeypress);
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var Tag = this.props.tagName;
	      var props = _extends({}, this.props);
	      delete props.tagName;
	      delete props.className;
	      return _react2.default.createElement(Tag, _extends({
	        className: (0, _classnames2.default)(this.props.className),
	        role: 'button',
	        tabIndex: '0',
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur
	      }, props));
	    }
	  }]);
	
	  return ClickableComponent;
	}(_react.Component);
	
	exports.default = ClickableComponent;
	
	
	ClickableComponent.propTypes = propTypes;
	ClickableComponent.defaultProps = defaultProps;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	var LoadingSpinner = function (_Component) {
	  _inherits(LoadingSpinner, _Component);
	
	  function LoadingSpinner(props, context) {
	    _classCallCheck(this, LoadingSpinner);
	
	    return _possibleConstructorReturn(this, (LoadingSpinner.__proto__ || Object.getPrototypeOf(LoadingSpinner)).call(this, props, context));
	  }
	
	  _createClass(LoadingSpinner, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "render",
	    value: function render() {
	      var player = this.props.player;
	
	      if (!player.seeking && !player.waiting) {
	        return null;
	      }
	      return _react2.default.createElement("div", { className: "video-react-loading-spinner" });
	    }
	  }]);
	
	  return LoadingSpinner;
	}(_react.Component);
	
	exports.default = LoadingSpinner;
	
	
	LoadingSpinner.propTypes = propTypes;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  poster: _react.PropTypes.string,
	  player: _react.PropTypes.object,
	  actions: _react.PropTypes.object
	};
	
	function PosterImage(_ref) {
	  var poster = _ref.poster,
	      player = _ref.player,
	      actions = _ref.actions;
	
	  if (!poster || player.hasStarted) {
	    return null;
	  }
	
	  return _react2.default.createElement("div", {
	    className: "video-react-poster",
	    tabIndex: "-1",
	    style: {
	      backgroundImage: "url(\"" + poster + "\")"
	    },
	    onClick: function onClick() {
	      if (player.paused) {
	        actions.play();
	      }
	    }
	  });
	}
	
	PosterImage.propTypes = propTypes;
	
	exports.default = PosterImage;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _dom = __webpack_require__(6);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  manager: _react.PropTypes.object,
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  shortcuts: _react.PropTypes.array
	};
	
	var Shortcut = function (_Component) {
	  _inherits(Shortcut, _Component);
	
	  function Shortcut(props, context) {
	    _classCallCheck(this, Shortcut);
	
	    var _this = _possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));
	
	    _this.defaultShortcuts = [{
	      keyCode: 32, // spacebar
	      handle: _this.togglePlay
	    }, {
	      keyCode: 75, // k
	      handle: _this.togglePlay
	    }, {
	      keyCode: 70, // f
	      handle: _this.toggleFullscreen
	    }, {
	      keyCode: 37, // Left arrow
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.replay(5, {
	          action: 'replay-5',
	          source: 'shortcut'
	        }); // Go back 5 seconds
	      }
	    }, {
	      keyCode: 74, // j
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.replay(10, {
	          action: 'replay-10',
	          source: 'shortcut'
	        }); // Go back 10 seconds
	      }
	    }, {
	      keyCode: 39, // Right arrow
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.forward(5, {
	          action: 'forward-5',
	          source: 'shortcut'
	        }); // Go forward 5 seconds
	      }
	    }, {
	      keyCode: 76, // l
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.forward(10, {
	          action: 'forward-10',
	          source: 'shortcut'
	        }); // Go forward 10 seconds
	      }
	    }, {
	      keyCode: 36, // Home
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.seek(0); // Go to beginning of video
	      }
	    }, {
	      keyCode: 35, // End
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        // Go to end of video
	        actions.seek(player.duration);
	      }
	    }, {
	      keyCode: 38, // Up arrow
	      handle: function handle(player, actions) {
	        // Increase volume 5%
	        var v = player.volume + 0.05;
	        if (v > 1) {
	          v = 1;
	        }
	        actions.changeVolume(v, {
	          action: 'volume-up',
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 40, // Down arrow
	      handle: function handle(player, actions) {
	        // Decrease volume 5%
	        var v = player.volume - 0.05;
	        if (v < 0) {
	          v = 0;
	        }
	        var action = v > 0 ? 'volume-down' : 'volume-off';
	        actions.changeVolume(v, {
	          action: action,
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 190, // Shift + >
	      shift: true,
	      handle: function handle(player, actions) {
	        // Increase speed
	        var playbackRate = player.playbackRate;
	        if (playbackRate >= 1.5) {
	          playbackRate = 2;
	        } else if (playbackRate >= 1.25) {
	          playbackRate = 1.5;
	        } else if (playbackRate >= 1.0) {
	          playbackRate = 1.25;
	        } else if (playbackRate >= 0.5) {
	          playbackRate = 1.0;
	        } else if (playbackRate >= 0.25) {
	          playbackRate = 0.5;
	        } else if (playbackRate >= 0) {
	          playbackRate = 0.25;
	        }
	        actions.changeRate(playbackRate, {
	          action: 'fast-forward',
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 188, // Shift + <
	      shift: true,
	      handle: function handle(player, actions) {
	        // Decrease speed
	        var playbackRate = player.playbackRate;
	        if (playbackRate <= 0.5) {
	          playbackRate = 0.25;
	        } else if (playbackRate <= 1.0) {
	          playbackRate = 0.5;
	        } else if (playbackRate <= 1.25) {
	          playbackRate = 1.0;
	        } else if (playbackRate <= 1.5) {
	          playbackRate = 1.25;
	        } else if (playbackRate <= 2) {
	          playbackRate = 1.5;
	        }
	        actions.changeRate(playbackRate, {
	          action: 'fast-rewind',
	          source: 'shortcut'
	        });
	      }
	    }];
	
	    _this.shortcuts = [].concat(_toConsumableArray(_this.defaultShortcuts));
	
	    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Shortcut, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.mergeShortcuts();
	      document.addEventListener('keydown', this.handleKeypress);
	      document.addEventListener('click', this.handleClick);
	      document.addEventListener('dblclick', this.handleDoubleClick);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.shortcuts !== this.props.shortcuts) {
	        this.mergeShortcuts();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('keydown', this.handleKeypress);
	    }
	
	    // merge the shortcuts from props
	
	  }, {
	    key: 'mergeShortcuts',
	    value: function mergeShortcuts() {
	      var gradeShortcut = function gradeShortcut(s) {
	        var score = 0;
	        var ps = ['ctrl', 'shift', 'alt'];
	        ps.forEach(function (key) {
	          if (s[key]) {
	            score++;
	          }
	        });
	        return score;
	      };
	
	      var shortcuts = (this.props.shortcuts || []).filter(function (s) {
	        return s.keyCode && s.handle && typeof s.handle === 'function';
	      });
	
	      this.shortcuts = [].concat(_toConsumableArray(shortcuts), _toConsumableArray(this.defaultShortcuts)).sort(function (a, b) {
	        return gradeShortcut(b) - gradeShortcut(a);
	      });
	    }
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay(player, actions) {
	      if (player.paused) {
	        actions.play({
	          action: 'play',
	          source: 'shortcut'
	        });
	      } else {
	        actions.pause({
	          action: 'pause',
	          source: 'shortcut'
	        });
	      }
	    }
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen(player, actions) {
	      actions.toggleFullscreen(player);
	    }
	  }, {
	    key: 'handleKeypress',
	    value: function handleKeypress(e) {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      if (!player.isActive) {
	        return;
	      }
	
	      if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, 'video-react-control') || (0, _dom.hasClass)(document.activeElement, 'video-react-slider') || (0, _dom.hasClass)(document.activeElement, 'video-react-big-play-button'))) {
	        return;
	      }
	
	      var keyCode = e.keyCode || e.which;
	      var ctrl = e.ctrlKey || e.metaKey;
	      var shift = e.shiftKey;
	      var alt = e.altKey;
	
	      var shortcut = this.shortcuts.find(function (s) {
	        if (s.keyCode != keyCode) {
	          return false;
	        }
	        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
	          return false;
	        }
	        return true;
	      });
	
	      if (shortcut) {
	        shortcut.handle(player, actions);
	        e.preventDefault();
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      if (!player.isActive || e.target.nodeName !== 'VIDEO') {
	        return;
	      }
	      this.togglePlay(player, actions);
	      e.preventDefault();
	    }
	  }, {
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick(e) {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;
	
	      if (!player.isActive || e.target.nodeName !== 'VIDEO') {
	        return;
	      }
	      this.toggleFullscreen(player, actions);
	      e.preventDefault();
	    }
	
	    // this component dose not render anything
	    // it's just for the key down event
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Shortcut;
	}(_react.Component);
	
	exports.default = Shortcut;
	
	
	Shortcut.propTypes = propTypes;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(34);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  children: _react.PropTypes.any,
	  startTime: _react.PropTypes.number,
	  loop: _react.PropTypes.bool,
	  autoPlay: _react.PropTypes.bool,
	  playsInline: _react.PropTypes.bool,
	  src: _react.PropTypes.string,
	  poster: _react.PropTypes.string,
	  preload: _react2.default.PropTypes.oneOf(['auto', 'metadata', 'none']),
	
	  onLoadStart: _react.PropTypes.func,
	  onWaiting: _react.PropTypes.func,
	  onCanPlay: _react.PropTypes.func,
	  onCanPlayThrough: _react.PropTypes.func,
	  onPlaying: _react.PropTypes.func,
	  onEnded: _react.PropTypes.func,
	  onSeeking: _react.PropTypes.func,
	  onSeeked: _react.PropTypes.func,
	  onPlay: _react.PropTypes.func,
	  onPause: _react.PropTypes.func,
	  onProgress: _react.PropTypes.func,
	  onDurationChange: _react.PropTypes.func,
	  onError: _react.PropTypes.func,
	  onSuspend: _react.PropTypes.func,
	  onAbort: _react.PropTypes.func,
	  onEmptied: _react.PropTypes.func,
	  onStalled: _react.PropTypes.func,
	  onLoadedMetadata: _react.PropTypes.func,
	  onLoadedData: _react.PropTypes.func,
	  onTimeUpdate: _react.PropTypes.func,
	  onRateChange: _react.PropTypes.func,
	  onVolumeChange: _react.PropTypes.func
	};
	
	var defaultProps = {
	  preload: 'auto'
	};
	
	var Video = function (_Component) {
	  _inherits(Video, _Component);
	
	  function Video(props) {
	    _classCallCheck(this, Video);
	
	    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
	
	    _this.video = null; // the html5 video
	    _this.play = _this.play.bind(_this);
	    _this.pause = _this.pause.bind(_this);
	    _this.seek = _this.seek.bind(_this);
	    _this.forward = _this.forward.bind(_this);
	    _this.replay = _this.replay.bind(_this);
	    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
	    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
	    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
	    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
	    _this.handlePlay = _this.handlePlay.bind(_this);
	    _this.handlePlaying = _this.handlePlaying.bind(_this);
	    _this.handlePause = _this.handlePause.bind(_this);
	    _this.handleEnded = _this.handleEnded.bind(_this);
	    _this.handleWaiting = _this.handleWaiting.bind(_this);
	    _this.handleSeeking = _this.handleSeeking.bind(_this);
	    _this.handleSeeked = _this.handleSeeked.bind(_this);
	    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
	    _this.handleError = _this.handleError.bind(_this);
	    _this.handleSuspend = _this.handleSuspend.bind(_this);
	    _this.handleAbort = _this.handleAbort.bind(_this);
	    _this.handleEmptied = _this.handleEmptied.bind(_this);
	    _this.handleStalled = _this.handleStalled.bind(_this);
	    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
	    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
	    _this.handleTimeUpdate = (0, _lodash2.default)(_this.handleTimeUpdate.bind(_this), 250);
	    _this.handleRateChange = _this.handleRateChange.bind(_this);
	    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
	    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
	    _this.handleProgress = (0, _lodash2.default)(_this.handleProgress.bind(_this), 1000);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }
	
	  // get playback rate
	
	
	  _createClass(Video, [{
	    key: 'play',
	
	
	    // play the video
	    value: function play() {
	      this.video.play();
	    }
	
	    // pause the video
	
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.video.pause();
	    }
	
	    // Change the video source and re-load the video:
	
	  }, {
	    key: 'load',
	    value: function load() {
	      this.video.load();
	    }
	
	    // Add a new text track to the video
	
	  }, {
	    key: 'addTextTrack',
	    value: function addTextTrack() {
	      var _video;
	
	      (_video = this.video).addTextTrack.apply(_video, arguments);
	    }
	
	    // Check if your browser can play different types of video:
	
	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var _video2;
	
	      (_video2 = this.video).canPlayType.apply(_video2, arguments);
	    }
	
	    // toggle play
	
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay() {
	      if (this.video.paused) {
	        this.play();
	      } else {
	        this.pause();
	      }
	    }
	
	    // seek video by time
	
	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      try {
	        this.video.currentTime = time;
	      } catch (e) {
	        // console.log(e, 'Video is not ready.')
	      }
	    }
	
	    // jump forward x seconds
	
	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.seek(this.video.currentTime + seconds);
	    }
	
	    // jump back x seconds
	
	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.forward(-seconds);
	    }
	
	    // enter or exist full screen
	
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.toggleFullscreen(player);
	    }
	
	    // Fired when the user agent
	    // begins looking for media data
	
	  }, {
	    key: 'handleLoadStart',
	    value: function handleLoadStart() {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions,
	          onLoadStart = _props2.onLoadStart;
	
	      if (player.paused && player.hasStarted) {
	        actions.handleLoadStart(this.video.buffered);
	      }
	      if (onLoadStart) {
	        onLoadStart.apply(undefined, arguments);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlay',
	    value: function handleCanPlay() {
	      var _props3 = this.props,
	          actions = _props3.actions,
	          onCanPlay = _props3.onCanPlay;
	
	
	      actions.handleCanPlay({
	        videoWidth: this.videoWidth,
	        videoHeight: this.videoHeight,
	        duration: this.video.duration,
	        currentSrc: this.video.currentSrc
	      });
	
	      if (onCanPlay) {
	        onCanPlay.apply(undefined, arguments);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlayThrough',
	    value: function handleCanPlayThrough() {
	      var _props4 = this.props,
	          player = _props4.player,
	          actions = _props4.actions,
	          onCanPlayThrough = _props4.onCanPlayThrough;
	
	      if (player.waiting) {
	        actions.handleCanPlayThrough();
	      }
	
	      if (onCanPlayThrough) {
	        onCanPlayThrough.apply(undefined, arguments);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handlePlaying',
	    value: function handlePlaying() {
	      var _props5 = this.props,
	          player = _props5.player,
	          actions = _props5.actions,
	          onPlaying = _props5.onPlaying;
	
	      if (player.waiting) {
	        actions.handlePlaying();
	      }
	
	      if (onPlaying) {
	        onPlaying.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the media has been started
	
	  }, {
	    key: 'handlePlay',
	    value: function handlePlay() {
	      var _props6 = this.props,
	          player = _props6.player,
	          actions = _props6.actions,
	          onPlay = _props6.onPlay;
	
	      if (player.paused) {
	        actions.handlePlay({
	          currentSrc: this.video.currentSrc,
	          duration: this.video.duration
	        });
	      }
	
	      if (onPlay) {
	        onPlay.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the media has been paused
	
	  }, {
	    key: 'handlePause',
	    value: function handlePause() {
	      var _props7 = this.props,
	          player = _props7.player,
	          actions = _props7.actions,
	          onPause = _props7.onPause;
	
	      if (!player.paused) {
	        actions.handlePause();
	      }
	
	      if (onPause) {
	        onPause.apply(undefined, arguments);
	      }
	    }
	
	    // Fired when the duration of
	    // the media resource is first known or changed
	
	  }, {
	    key: 'handleDurationChange',
	    value: function handleDurationChange() {
	      var _props8 = this.props,
	          player = _props8.player,
	          actions = _props8.actions,
	          onDurationChange = _props8.onDurationChange;
	
	      if (player.duration !== this.video.duration) {
	        actions.handleDurationChange(this.video.duration);
	      }
	
	      if (onDurationChange) {
	        onDurationChange.apply(undefined, arguments);
	      }
	    }
	
	    // Fired while the user agent
	    // is downloading media data
	
	  }, {
	    key: 'handleProgress',
	    value: function handleProgress() {
	      var _props9 = this.props,
	          actions = _props9.actions,
	          onProgress = _props9.onProgress;
	
	      if (this.video) {
	        actions.handleProgressChange(this.video.buffered);
	      }
	
	      if (onProgress) {
	        onProgress.apply(undefined, arguments);
	      }
	    }
	
	    // Fired when the end of the media resource
	    // is reached (currentTime == duration)
	
	  }, {
	    key: 'handleEnded',
	    value: function handleEnded() {
	      var _props10 = this.props,
	          loop = _props10.loop,
	          player = _props10.player,
	          actions = _props10.actions,
	          onEnded = _props10.onEnded;
	
	      if (loop) {
	        this.seek(0);
	        this.play();
	      } else if (!player.paused) {
	        this.pause();
	      }
	      if (!player.ended) {
	        actions.handleEnd();
	      }
	
	      if (onEnded) {
	        onEnded.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the media begins waiting
	
	  }, {
	    key: 'handleWaiting',
	    value: function handleWaiting() {
	      var _props11 = this.props,
	          player = _props11.player,
	          actions = _props11.actions,
	          onWaiting = _props11.onWaiting;
	
	      if (!player.waiting) {
	        actions.handleWaiting();
	      }
	
	      if (onWaiting) {
	        onWaiting.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the player
	    // is jumping to a new time
	
	  }, {
	    key: 'handleSeeking',
	    value: function handleSeeking() {
	      var _props12 = this.props,
	          player = _props12.player,
	          actions = _props12.actions,
	          onSeeking = _props12.onSeeking;
	
	      if (!player.seeking) {
	        actions.handleSeeking();
	      }
	
	      if (onSeeking) {
	        onSeeking.apply(undefined, arguments);
	      }
	    }
	
	    // Fired when the player has
	    // finished jumping to a new time
	
	  }, {
	    key: 'handleSeeked',
	    value: function handleSeeked() {
	      var _props13 = this.props,
	          player = _props13.player,
	          actions = _props13.actions,
	          onSeeked = _props13.onSeeked;
	
	      if (player.seeking) {
	        actions.handleSeeked();
	      }
	
	      if (onSeeked) {
	        onSeeked.apply(undefined, arguments);
	      }
	    }
	
	    // Handle Fullscreen Change
	
	  }, {
	    key: 'handleFullscreenChange',
	    value: function handleFullscreenChange() {}
	
	    // Fires when the browser is
	    // intentionally not getting media data
	
	  }, {
	    key: 'handleSuspend',
	    value: function handleSuspend() {
	      var onSuspend = this.props.onSuspend;
	
	      if (onSuspend) {
	        onSuspend.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the loading of an audio/video is aborted
	
	  }, {
	    key: 'handleAbort',
	    value: function handleAbort() {
	      var onAbort = this.props.onAbort;
	
	      if (onAbort) {
	        onAbort.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the current playlist is empty
	
	  }, {
	    key: 'handleEmptied',
	    value: function handleEmptied() {
	      var onEmptied = this.props.onEmptied;
	
	      if (onEmptied) {
	        onEmptied.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the browser is trying to
	    // get media data, but data is not available
	
	  }, {
	    key: 'handleStalled',
	    value: function handleStalled() {
	      var onStalled = this.props.onStalled;
	
	      if (onStalled) {
	        onStalled.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the browser has loaded
	    // meta data for the audio/video
	
	  }, {
	    key: 'handleLoadedMetaData',
	    value: function handleLoadedMetaData() {
	      var _props14 = this.props,
	          onLoadedMetadata = _props14.onLoadedMetadata,
	          startTime = _props14.startTime;
	
	
	      if (startTime && startTime > 0) {
	        this.video.currentTime = startTime;
	      }
	
	      if (onLoadedMetadata) {
	        onLoadedMetadata.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the browser has loaded
	    // the current frame of the audio/video
	
	  }, {
	    key: 'handleLoadedData',
	    value: function handleLoadedData() {
	      var onLoadedData = this.props.onLoadedData;
	
	      if (onLoadedData) {
	        onLoadedData.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the current
	    // playback position has changed
	
	  }, {
	    key: 'handleTimeUpdate',
	    value: function handleTimeUpdate() {
	      var _props15 = this.props,
	          player = _props15.player,
	          actions = _props15.actions,
	          onTimeUpdate = _props15.onTimeUpdate;
	
	      if (player.currentTime !== this.video.currentTime) {
	        actions.handleTimeUpdate(this.video.currentTime);
	      }
	
	      if (onTimeUpdate) {
	        onTimeUpdate.apply(undefined, arguments);
	      }
	    }
	
	    /**
	     * Fires when the playing speed of the audio/video is changed
	     */
	
	  }, {
	    key: 'handleRateChange',
	    value: function handleRateChange() {
	      var _props16 = this.props,
	          player = _props16.player,
	          actions = _props16.actions,
	          onRateChange = _props16.onRateChange;
	
	      if (player.playbackRate !== this.video.playbackRate) {
	        actions.handleRateChange(this.video.playbackRate);
	      }
	
	      if (onRateChange) {
	        onRateChange.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the volume has been changed
	
	  }, {
	    key: 'handleVolumeChange',
	    value: function handleVolumeChange() {
	      var _props17 = this.props,
	          player = _props17.player,
	          actions = _props17.actions,
	          onVolumeChange = _props17.onVolumeChange;
	
	      if (player.volume !== this.video.volume || player.muted !== this.video.muted) {
	        actions.handleVolumeChange(this.video.volume, this.video.muted);
	      }
	
	      if (onVolumeChange) {
	        onVolumeChange.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when an error occurred
	    // during the loading of an audio/video
	
	  }, {
	    key: 'handleError',
	    value: function handleError() {
	      var onError = this.props.onError;
	
	      if (onError) {
	        onError.apply(undefined, arguments);
	      }
	    }
	  }, {
	    key: 'handleKeypress',
	    value: function handleKeypress() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props18 = this.props,
	          player = _props18.player,
	          loop = _props18.loop,
	          poster = _props18.poster,
	          preload = _props18.preload,
	          src = _props18.src,
	          autoPlay = _props18.autoPlay,
	          playsInline = _props18.playsInline;
	
	
	      var props = _extends({}, this.props, {
	        video: this.video
	      });
	
	      // only keep <source />, <track />, <MyComponent isVideoChild /> elements
	      var children = _react2.default.Children.toArray(this.props.children).filter(_utils.isVideoChild).map(function (c) {
	        if (typeof c.type === 'string') {
	          return c;
	        }
	        return _react2.default.cloneElement(c, props);
	      });
	
	      return _react2.default.createElement(
	        'video',
	        {
	          className: 'video-react-video',
	          ref: function ref(c) {
	            _this2.video = c;
	          },
	          muted: player.muted,
	          preload: preload,
	          loop: loop,
	          playsInline: playsInline,
	          autoPlay: autoPlay,
	          poster: poster,
	          src: src,
	          onLoadStart: this.handleLoadStart,
	          onWaiting: this.handleWaiting,
	          onCanPlay: this.handleCanPlay,
	          onCanPlayThrough: this.handleCanPlayThrough,
	          onPlaying: this.handlePlaying,
	          onEnded: this.handleEnded,
	          onSeeking: this.handleSeeking,
	          onSeeked: this.handleSeeked,
	          onPlay: this.handlePlay,
	          onPause: this.handlePause,
	          onProgress: this.handleProgress,
	          onDurationChange: this.handleDurationChange,
	          onError: this.handleError,
	          onSuspend: this.handleSuspend,
	          onAbort: this.handleAbort,
	          onEmptied: this.handleEmptied,
	          onStalled: this.handleStalled,
	          onLoadedMetadata: this.handleLoadedMetaData,
	          onLoadedData: this.handleLoadedData,
	          onTimeUpdate: this.handleTimeUpdate,
	          onRateChange: this.handleRateChange,
	          onVolumeChange: this.handleVolumeChange
	        },
	        children
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    get: function get() {
	      return this.video.playbackRate;
	    }
	
	    // set playback rate
	    // speed of video
	    ,
	    set: function set(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: 'muted',
	    get: function get() {
	      return this.video.muted;
	    },
	    set: function set(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    get: function get() {
	      return this.video.volume;
	    },
	    set: function set(val) {
	      if (val > 1) {
	        val = 1;
	      }
	      if (val < 0) {
	        val = 0;
	      }
	      this.video.volume = val;
	    }
	
	    // video width
	
	  }, {
	    key: 'videoWidth',
	    get: function get() {
	      return this.video.videoWidth;
	    }
	
	    // video height
	
	  }, {
	    key: 'videoHeight',
	    get: function get() {
	      return this.video.videoHeight;
	    }
	  }]);
	
	  return Video;
	}(_react.Component);
	
	exports.default = Video;
	
	
	Video.propTypes = propTypes;
	Video.defaultProps = defaultProps;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ProgressControl = __webpack_require__(25);
	
	var _ProgressControl2 = _interopRequireDefault(_ProgressControl);
	
	var _PlayToggle = __webpack_require__(23);
	
	var _PlayToggle2 = _interopRequireDefault(_PlayToggle);
	
	var _ForwardControl = __webpack_require__(17);
	
	var _ForwardControl2 = _interopRequireDefault(_ForwardControl);
	
	var _ReplayControl = __webpack_require__(26);
	
	var _ReplayControl2 = _interopRequireDefault(_ReplayControl);
	
	var _FullscreenToggle = __webpack_require__(19);
	
	var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);
	
	var _RemainingTimeDisplay = __webpack_require__(31);
	
	var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);
	
	var _CurrentTimeDisplay = __webpack_require__(29);
	
	var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);
	
	var _DurationDisplay = __webpack_require__(30);
	
	var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);
	
	var _TimeDivider = __webpack_require__(32);
	
	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);
	
	var _VolumeMenuButton = __webpack_require__(28);
	
	var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);
	
	var _PlaybackRate = __webpack_require__(24);
	
	var _PlaybackRate2 = _interopRequireDefault(_PlaybackRate);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  children: _react.PropTypes.any,
	  autoHide: _react.PropTypes.bool,
	  disableDefaultControls: _react.PropTypes.bool
	};
	
	var defaultProps = {
	  autoHide: true
	};
	
	var ControlBar = function (_Component) {
	  _inherits(ControlBar, _Component);
	
	  function ControlBar(props) {
	    _classCallCheck(this, ControlBar);
	
	    var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));
	
	    _this.getDefaultChildren = _this.getDefaultChildren.bind(_this);
	    _this.getFullChildren = _this.getFullChildren.bind(_this);
	    return _this;
	  }
	
	  _createClass(ControlBar, [{
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren() {
	      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
	        key: 'play-toggle',
	        order: 1
	      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
	        key: 'volume-menu-button',
	        order: 4
	      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
	        key: 'duration-display',
	        order: 5
	      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
	        key: 'progress-control',
	        order: 6
	      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
	        key: 'remaining-time-display',
	        order: 7
	      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
	        key: 'fullscreen-toggle',
	        order: 8
	      }))];
	    }
	  }, {
	    key: 'getFullChildren',
	    value: function getFullChildren() {
	      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
	        key: 'play-toggle',
	        order: 1
	      })), _react2.default.createElement(_ReplayControl2.default, _extends({}, this.props, {
	        key: 'replay-control',
	        order: 2
	      })), _react2.default.createElement(_ForwardControl2.default, _extends({}, this.props, {
	        key: 'forward-control',
	        order: 3
	      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
	        key: 'volume-menu-button',
	        order: 4
	      })), _react2.default.createElement(_CurrentTimeDisplay2.default, _extends({}, this.props, {
	        key: 'current-time-display',
	        order: 5
	      })), _react2.default.createElement(_TimeDivider2.default, _extends({}, this.props, {
	        key: 'time-divider',
	        order: 6
	      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
	        key: 'duration-display',
	        order: 7
	      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
	        key: 'progress-control',
	        order: 8
	      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
	        key: 'remaining-time-display',
	        order: 9
	      })), _react2.default.createElement(_PlaybackRate2.default, _extends({}, this.props, {
	        rates: [1, 1.25, 1.5, 2],
	        key: 'playback-rate',
	        order: 10
	      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
	        key: 'fullscreen-toggle',
	        order: 11
	      }))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren() {
	      var children = _react2.default.Children.toArray(this.props.children);
	      var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
	      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var autoHide = this.props.autoHide;
	
	      var children = this.getChildren();
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('video-react-control-bar', {
	            'video-react-control-bar-auto-hide': autoHide
	          }) },
	        children
	      );
	    }
	  }]);
	
	  return ControlBar;
	}(_react.Component);
	
	exports.default = ControlBar;
	
	
	ControlBar.propTypes = propTypes;
	ControlBar.defaultProps = defaultProps;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ForwardReplayControl = __webpack_require__(18);
	
	var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Pass mode into parent function
	exports.default = new _ForwardReplayControl2.default('forward');

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  seconds: _react2.default.PropTypes.oneOf([5, 10, 30])
	};
	
	var defaultProps = {
	  seconds: 10
	};
	
	exports.default = function (mode) {
	  var ForwardReplayControl = function (_Component) {
	    _inherits(ForwardReplayControl, _Component);
	
	    function ForwardReplayControl(props, context) {
	      _classCallCheck(this, ForwardReplayControl);
	
	      var _this = _possibleConstructorReturn(this, (ForwardReplayControl.__proto__ || Object.getPrototypeOf(ForwardReplayControl)).call(this, props, context));
	
	      _this.handleClick = _this.handleClick.bind(_this);
	      return _this;
	    }
	
	    _createClass(ForwardReplayControl, [{
	      key: 'handleClick',
	      value: function handleClick() {
	        var _props = this.props,
	            actions = _props.actions,
	            seconds = _props.seconds;
	        // Depends mode to implement different actions
	
	        if (mode === 'forward') {
	          actions.forward(seconds);
	        } else {
	          actions.replay(seconds);
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this2 = this,
	            _classNames;
	
	        var seconds = this.props.seconds;
	
	        return _react2.default.createElement(
	          'button',
	          {
	            ref: function ref(c) {
	              _this2.button = c;
	            },
	            className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'video-react-icon-' + mode + '-' + seconds, true), _defineProperty(_classNames, 'video-react-' + mode + '-control', true), _classNames), 'video-react-control video-react-button video-react-icon'),
	            onClick: this.handleClick
	          },
	          _react2.default.createElement(
	            'span',
	            { className: 'video-react-control-text' },
	            mode + ' ' + seconds + ' seconds'
	          )
	        );
	      }
	    }]);
	
	    return ForwardReplayControl;
	  }(_react.Component);
	
	  ForwardReplayControl.propTypes = propTypes;
	  ForwardReplayControl.defaultProps = defaultProps;
	  return ForwardReplayControl;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object
	};
	
	var FullscreenToggle = function (_Component) {
	  _inherits(FullscreenToggle, _Component);
	
	  function FullscreenToggle(props, context) {
	    _classCallCheck(this, FullscreenToggle);
	
	    var _this = _possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(FullscreenToggle, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.toggleFullscreen(player);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var player = this.props.player;
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-icon-fullscreen-exit': player.isFullscreen,
	            'video-react-icon-fullscreen': !player.isFullscreen
	          }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
	          ref: function ref(c) {
	            _this2.button = c;
	          },
	          type: 'button',
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Non-Fullscreen'
	        )
	      );
	    }
	  }]);
	
	  return FullscreenToggle;
	}(_react.Component);
	
	exports.default = FullscreenToggle;
	
	
	FullscreenToggle.propTypes = propTypes;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoadProgressBar;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  duration: _react.PropTypes.number,
	  buffered: _react.PropTypes.object
	};
	
	// Shows load progress
	function LoadProgressBar(_ref) {
	  var buffered = _ref.buffered,
	      duration = _ref.duration;
	
	  if (!buffered || !buffered.length) {
	    return null;
	  }
	  var bufferedEnd = buffered.end(buffered.length - 1);
	  var style = {};
	
	  if (bufferedEnd > duration) {
	    bufferedEnd = duration;
	  }
	
	  // get the percent width of a time compared to the total end
	  function percentify(time, end) {
	    var percent = time / end || 0; // no NaN
	    return (percent >= 1 ? 1 : percent) * 100 + "%";
	  }
	
	  // the width of the progress bar
	  style.width = percentify(bufferedEnd, duration);
	
	  var parts = [];
	
	  // add child elements to represent the individual buffered time ranges
	  for (var i = 0; i < buffered.length; i++) {
	    var start = buffered.start(i);
	    var end = buffered.end(i);
	    // set the percent based on the width of the progress bar (bufferedEnd)
	    var part = _react2.default.createElement("div", {
	      style: {
	        left: percentify(start, bufferedEnd),
	        width: percentify(end - start, bufferedEnd)
	      },
	      key: "part-" + i
	    });
	    parts.push(part);
	  }
	
	  if (parts.length === 0) {
	    parts = null;
	  }
	
	  return _react2.default.createElement(
	    "div",
	    {
	      style: style,
	      className: "video-react-load-progress"
	    },
	    _react2.default.createElement(
	      "span",
	      { className: "video-react-control-text" },
	      _react2.default.createElement(
	        "span",
	        null,
	        "Loaded"
	      ),
	      ": 0%"
	    ),
	    parts
	  );
	}
	
	LoadProgressBar.propTypes = propTypes;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MouseTimeDisplay(_ref) {
	  var duration = _ref.duration,
	      mouseTime = _ref.mouseTime;
	
	  if (!mouseTime.time) {
	    return null;
	  }
	
	  var time = (0, _utils.formatTime)(mouseTime.time, duration);
	
	  return _react2.default.createElement('div', {
	    className: 'video-react-mouse-display',
	    style: {
	      left: mouseTime.position + 'px'
	    },
	    'data-current-time': time
	  });
	}
	
	MouseTimeDisplay.propTypes = {
	  duration: _react.PropTypes.number,
	  mouseTime: _react.PropTypes.object
	};
	
	exports.default = MouseTimeDisplay;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PlayProgressBar;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  currentTime: _react.PropTypes.number,
	  duration: _react.PropTypes.number,
	  percentage: _react.PropTypes.string
	};
	
	// Shows play progress
	function PlayProgressBar(_ref) {
	  var currentTime = _ref.currentTime,
	      duration = _ref.duration,
	      percentage = _ref.percentage;
	
	  return _react2.default.createElement(
	    'div',
	    {
	      'data-current-time': (0, _utils.formatTime)(currentTime, duration),
	      className: 'video-react-play-progress video-react-slider-bar',
	      style: {
	        width: percentage
	      }
	    },
	    _react2.default.createElement(
	      'span',
	      { className: 'video-react-control-text' },
	      _react2.default.createElement(
	        'span',
	        null,
	        'Progress'
	      ),
	      ': ',
	      percentage
	    )
	  );
	}
	
	PlayProgressBar.propTypes = propTypes;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object
	};
	
	var PlayToggle = function (_Component) {
	  _inherits(PlayToggle, _Component);
	
	  function PlayToggle(props, context) {
	    _classCallCheck(this, PlayToggle);
	
	    var _this = _possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(PlayToggle, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          actions = _props.actions,
	          player = _props.player;
	
	      if (player.paused) {
	        actions.play();
	      } else {
	        actions.pause();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var player = this.props.player;
	
	      var controlText = player.paused ? 'Play' : 'Pause';
	
	      return _react2.default.createElement(
	        'button',
	        {
	          ref: function ref(c) {
	            _this2.button = c;
	          },
	          className: (0, _classnames2.default)({
	            'video-react-play-control': true,
	            'video-react-control': true,
	            'video-react-button': true,
	            'video-react-paused': player.paused,
	            'video-react-playing': !player.paused
	          }),
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          controlText
	        )
	      );
	    }
	  }]);
	
	  return PlayToggle;
	}(_react.Component);
	
	exports.default = PlayToggle;
	
	
	PlayToggle.propTypes = propTypes;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MenuButton = __webpack_require__(39);
	
	var _MenuButton2 = _interopRequireDefault(_MenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  actions: _react.PropTypes.object,
	  rates: _react.PropTypes.array
	};
	
	var defaultProps = {
	  rates: [0.25, 0.5, 1, 1.25, 1.5, 2]
	};
	
	var PlaybackRate = function (_Component) {
	  _inherits(PlaybackRate, _Component);
	
	  function PlaybackRate(props, context) {
	    _classCallCheck(this, PlaybackRate);
	
	    var _this = _possibleConstructorReturn(this, (PlaybackRate.__proto__ || Object.getPrototypeOf(PlaybackRate)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(PlaybackRate, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions,
	          rates = _props.rates;
	
	      // this will select first one if the last one currently selected
	
	      var newRate = rates[0];
	      for (var i = 0; i < rates.length; i++) {
	        if (rates[i] > player.playbackRate) {
	          newRate = rates[i];
	          break;
	        }
	      }
	      actions.changeRate(newRate);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          rates = _props2.rates,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      var items = rates.map(function (rate) {
	        return {
	          label: rate + 'x',
	          value: rate,
	          selected: rate === player.playbackRate,
	          onClick: function onClick() {
	            actions.changeRate(rate);
	          }
	        };
	      });
	
	      return _react2.default.createElement(
	        _MenuButton2.default,
	        {
	          className: (0, _classnames2.default)({
	            'video-react-playback-rate': true
	          }),
	          onClick: this.handleClick,
	          items: items
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Playback Rate'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'video-react-playback-rate-value' },
	          player.playbackRate.toFixed(2),
	          'x'
	        )
	      );
	    }
	  }]);
	
	  return PlaybackRate;
	}(_react.Component);
	
	PlaybackRate.propTypes = propTypes;
	PlaybackRate.defaultProps = defaultProps;
	exports.default = PlaybackRate;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _dom = __webpack_require__(6);
	
	var Dom = _interopRequireWildcard(_dom);
	
	var _SeekBar = __webpack_require__(27);
	
	var _SeekBar2 = _interopRequireDefault(_SeekBar);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	var ProgressControl = function (_Component) {
	  _inherits(ProgressControl, _Component);
	
	  function ProgressControl(props, context) {
	    _classCallCheck(this, ProgressControl);
	
	    var _this = _possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props, context));
	
	    _this.state = {
	      mouseTime: {
	        time: null,
	        position: 0
	      }
	    };
	
	    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind(_this);
	    return _this;
	  }
	
	  _createClass(ProgressControl, [{
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      if (!event.pageX) {
	        return;
	      }
	      var duration = this.props.player.duration;
	
	      var node = (0, _reactDom.findDOMNode)(this.seekBar);
	      var newTime = Dom.getPointerPosition(node, event).x * duration;
	      var position = event.pageX - Dom.findElPosition(node).left;
	
	      this.setState({
	        mouseTime: {
	          time: newTime,
	          position: position
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseMove: this.handleMouseMoveThrottle,
	          className: 'video-react-progress-control video-react-control'
	        },
	        _react2.default.createElement(_SeekBar2.default, _extends({
	          mouseTime: this.state.mouseTime,
	          ref: function ref(c) {
	            _this2.seekBar = c;
	          }
	        }, this.props))
	      );
	    }
	  }]);
	
	  return ProgressControl;
	}(_react.Component);
	
	exports.default = ProgressControl;
	
	
	ProgressControl.propTypes = propTypes;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ForwardReplayControl = __webpack_require__(18);
	
	var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Pass mode into parent function 
	exports.default = new _ForwardReplayControl2.default('replay');

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Slider = __webpack_require__(5);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _PlayProgressBar = __webpack_require__(22);
	
	var _PlayProgressBar2 = _interopRequireDefault(_PlayProgressBar);
	
	var _LoadProgressBar = __webpack_require__(20);
	
	var _LoadProgressBar2 = _interopRequireDefault(_LoadProgressBar);
	
	var _MouseTimeDisplay = __webpack_require__(21);
	
	var _MouseTimeDisplay2 = _interopRequireDefault(_MouseTimeDisplay);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  mouseTime: _react.PropTypes.object,
	  actions: _react.PropTypes.object
	};
	
	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);
	
	  function SeekBar(props, context) {
	    _classCallCheck(this, SeekBar);
	
	    var _this = _possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props, context));
	
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.getNewTime = _this.getNewTime.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    return _this;
	  }
	
	  _createClass(SeekBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	
	    /**
	     * Get percentage of video played
	     *
	     * @return {Number} Percentage played
	     * @method getPercent
	     */
	
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var _props$player = this.props.player,
	          currentTime = _props$player.currentTime,
	          seekingTime = _props$player.seekingTime,
	          duration = _props$player.duration;
	
	      var time = seekingTime || currentTime;
	      var percent = time / duration;
	      return percent >= 1 ? 1 : percent;
	    }
	  }, {
	    key: 'getNewTime',
	    value: function getNewTime(event) {
	      var duration = this.props.player.duration;
	
	      var distance = this.slider.calculateDistance(event);
	      var newTime = distance * duration;
	
	      // Don't let video end while scrubbing.
	      return newTime === duration ? newTime - 0.1 : newTime;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	      var _props = this.props,
	          actions = _props.actions,
	          player = _props.player;
	
	      this.videoWasPlaying = !player.paused;
	      actions.pause();
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var actions = this.props.actions;
	
	      var newTime = this.getNewTime(event);
	      // Set new time (tell video to seek to new time)
	      actions.seek(newTime);
	      if (this.videoWasPlaying) {
	        actions.play();
	      }
	      actions.handleEndSeeking(newTime);
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;
	
	      var newTime = this.getNewTime(event);
	      actions.handleSeekingTime(newTime);
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      var actions = this.props.actions;
	
	      actions.forward(5);
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      var actions = this.props.actions;
	
	      actions.replay(5);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          _props2$player = _props2.player,
	          currentTime = _props2$player.currentTime,
	          seekingTime = _props2$player.seekingTime,
	          duration = _props2$player.duration,
	          buffered = _props2$player.buffered,
	          mouseTime = _props2.mouseTime;
	
	      var time = seekingTime || currentTime;
	
	      return _react2.default.createElement(
	        _Slider2.default,
	        {
	          ref: function ref(input) {
	            _this2.slider = input;
	          },
	          label: 'video progress bar',
	          className: 'video-react-progress-holder',
	          valuenow: (this.getPercent() * 100).toFixed(2),
	          valuetext: (0, _utils.formatTime)(time, duration),
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove,
	          onMouseUp: this.handleMouseUp,
	          getPercent: this.getPercent,
	          stepForward: this.stepForward,
	          stepBack: this.stepBack
	        },
	        _react2.default.createElement(_LoadProgressBar2.default, {
	          buffered: buffered,
	          currentTime: time,
	          duration: duration
	        }),
	        _react2.default.createElement(_MouseTimeDisplay2.default, {
	          duration: duration,
	          mouseTime: mouseTime
	        }),
	        _react2.default.createElement(_PlayProgressBar2.default, {
	          currentTime: time,
	          duration: duration
	        })
	      );
	    }
	  }]);
	
	  return SeekBar;
	}(_react.Component);
	
	exports.default = SeekBar;
	
	
	SeekBar.propTypes = propTypes;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _PopupButton = __webpack_require__(42);
	
	var _PopupButton2 = _interopRequireDefault(_PopupButton);
	
	var _VolumeBar = __webpack_require__(43);
	
	var _VolumeBar2 = _interopRequireDefault(_VolumeBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  actions: _react.PropTypes.object,
	  vertical: _react.PropTypes.bool
	};
	
	var defaultProps = {
	  vertical: false
	};
	
	var VolumeMenuButton = function (_Component) {
	  _inherits(VolumeMenuButton, _Component);
	
	  function VolumeMenuButton(props, context) {
	    _classCallCheck(this, VolumeMenuButton);
	
	    var _this = _possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));
	
	    _this.state = {
	      active: false
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }
	
	  _createClass(VolumeMenuButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.mute(!player.muted);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.setState({
	        active: true
	      });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.setState({
	        active: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          vertical = _props2.vertical,
	          player = _props2.player;
	
	      var inline = !vertical;
	      var level = this.volumeLevel;
	      return _react2.default.createElement(
	        _PopupButton2.default,
	        {
	          className: (0, _classnames2.default)({
	            'video-react-volume-menu-button-vertical': vertical,
	            'video-react-volume-menu-button-horizontal': !vertical,
	            'video-react-vol-muted': player.muted,
	            'video-react-vol-0': level === 0 && !player.muted,
	            'video-react-vol-1': level === 1,
	            'video-react-vol-2': level === 2,
	            'video-react-vol-3': level === 3,
	            'video-react-slider-active': this.state.active,
	            'video-react-lock-showing': this.state.active
	          }, 'video-react-volume-menu-button'),
	          onClick: this.handleClick,
	          inline: inline
	        },
	        _react2.default.createElement(_VolumeBar2.default, _extends({
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur
	        }, this.props))
	      );
	    }
	  }, {
	    key: 'volumeLevel',
	    get: function get() {
	      var _props$player = this.props.player,
	          volume = _props$player.volume,
	          muted = _props$player.muted;
	
	      var level = 3;
	      if (volume === 0 || muted) {
	        level = 0;
	      } else if (volume < 0.33) {
	        level = 1;
	      } else if (volume < 0.67) {
	        level = 2;
	      }
	      return level;
	    }
	  }]);
	
	  return VolumeMenuButton;
	}(_react.Component);
	
	VolumeMenuButton.propTypes = propTypes;
	VolumeMenuButton.defaultProps = defaultProps;
	exports.default = VolumeMenuButton;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	function CurrentTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration;
	
	  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-current-time video-react-time-control video-react-control'
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-current-time-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Current Time '
	      ),
	      formattedTime
	    )
	  );
	}
	
	CurrentTimeDisplay.propTypes = propTypes;
	
	exports.default = CurrentTimeDisplay;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	function DurationDisplay(_ref) {
	  var duration = _ref.player.duration;
	
	  var formattedTime = (0, _utils.formatTime)(duration);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-duration video-react-time-control video-react-control'
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-duration-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Duration Time '
	      ),
	      formattedTime
	    )
	  );
	}
	
	DurationDisplay.propTypes = propTypes;
	
	exports.default = DurationDisplay;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	function RemainingTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration;
	
	  var remainingTime = duration - currentTime;
	  var formattedTime = (0, _utils.formatTime)(remainingTime);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-remaining-time video-react-time-control video-react-control'
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-remaining-time-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Remaining Time '
	      ),
	      '-',
	      formattedTime
	    )
	  );
	}
	
	RemainingTimeDisplay.propTypes = propTypes;
	
	exports.default = RemainingTimeDisplay;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TimeDivider;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  separator: _react.PropTypes.string
	};
	
	function TimeDivider(_ref) {
	  var separator = _ref.separator;
	
	  var separatorText = separator || '/';
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-time-control video-react-time-divider',
	      dir: 'ltr'
	    },
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        separatorText
	      )
	    )
	  );
	}
	
	TimeDivider.propTypes = propTypes;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Fullscreen = function () {
	  function Fullscreen() {
	    _classCallCheck(this, Fullscreen);
	  }
	
	  _createClass(Fullscreen, [{
	    key: 'request',
	    value: function request(elm) {
	      if (elm.requestFullscreen) {
	        elm.requestFullscreen();
	      } else if (elm.webkitRequestFullscreen) {
	        elm.webkitRequestFullscreen();
	      } else if (elm.mozRequestFullScreen) {
	        elm.mozRequestFullScreen();
	      } else if (elm.msRequestFullscreen) {
	        elm.msRequestFullscreen();
	      }
	    }
	  }, {
	    key: 'exit',
	    value: function exit() {
	      if (document.exitFullscreen) {
	        document.exitFullscreen();
	      } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	      } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	      } else if (document.msExitFullscreen) {
	        document.msExitFullscreen();
	      }
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(handler) {
	      document.addEventListener('fullscreenchange', handler);
	      document.addEventListener('webkitfullscreenchange', handler);
	      document.addEventListener('mozfullscreenchange', handler);
	      document.addEventListener('MSFullscreenChange', handler);
	    }
	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(handler) {
	      document.removeEventListener('fullscreenchange', handler);
	      document.removeEventListener('webkitfullscreenchange', handler);
	      document.removeEventListener('mozfullscreenchange', handler);
	      document.removeEventListener('MSFullscreenChange', handler);
	    }
	  }, {
	    key: 'isFullscreen',
	    get: function get() {
	      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
	    }
	  }, {
	    key: 'enabled',
	    get: function get() {
	      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
	    }
	  }]);
	
	  return Fullscreen;
	}();
	
	exports.default = new Fullscreen();

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(57);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createStore = __webpack_require__(60);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _reducers = __webpack_require__(46);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _player = __webpack_require__(4);
	
	var playerActions = _interopRequireWildcard(_player);
	
	var _video = __webpack_require__(8);
	
	var videoActions = _interopRequireWildcard(_video);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Manager = function () {
	  function Manager() {
	    _classCallCheck(this, Manager);
	
	    this.store = (0, _createStore2.default)(_reducers2.default);
	
	    this.video = null;
	    this.rootElement = null;
	  }
	
	  _createClass(Manager, [{
	    key: 'getActions',
	    value: function getActions() {
	      var manager = this;
	      var dispatch = this.store.dispatch;
	
	      var actions = _extends({}, playerActions, videoActions);
	
	      function bindActionCreator(actionCreator) {
	        return function () {
	          var action = actionCreator.apply(manager, arguments);
	          if (typeof action !== 'undefined') {
	            dispatch(action);
	          }
	        };
	      }
	
	      return Object.keys(actions).filter(function (key) {
	        return typeof actions[key] === 'function';
	      }).reduce(function (boundActions, key) {
	        boundActions[key] = bindActionCreator(actions[key]);
	        return boundActions;
	      }, {});
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.store.getState();
	    }
	
	    // subscribe state change
	
	  }, {
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener, getState) {
	      if (!getState) {
	        getState = this.getState.bind(this);
	      }
	
	      var prevState = getState();
	
	      var handleChange = function handleChange() {
	        var state = getState();
	        if (state === prevState) {
	          return;
	        }
	        var prevStateCopy = prevState;
	        prevState = state;
	        listener(state, prevStateCopy);
	      };
	
	      return this.store.subscribe(handleChange);
	    }
	
	    // subscribe to operation state change
	
	  }, {
	    key: 'subscribeToOperationStateChange',
	    value: function subscribeToOperationStateChange(listener) {
	      var _this = this;
	
	      return this.subscribeToStateChange(listener, function () {
	        return _this.getState().operation;
	      });
	    }
	
	    // subscribe to player state change
	
	  }, {
	    key: 'subscribeToPlayerStateChange',
	    value: function subscribeToPlayerStateChange(listener) {
	      var _this2 = this;
	
	      return this.subscribeToStateChange(listener, function () {
	        return _this2.getState().player;
	      });
	    }
	  }]);
	
	  return Manager;
	}();
	
	exports.default = Manager;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(34);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Manager = __webpack_require__(36);
	
	var _Manager2 = _interopRequireDefault(_Manager);
	
	var _BigPlayButton = __webpack_require__(10);
	
	var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);
	
	var _LoadingSpinner = __webpack_require__(12);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _PosterImage = __webpack_require__(13);
	
	var _PosterImage2 = _interopRequireDefault(_PosterImage);
	
	var _Video = __webpack_require__(15);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _Bezel = __webpack_require__(9);
	
	var _Bezel2 = _interopRequireDefault(_Bezel);
	
	var _Shortcut = __webpack_require__(14);
	
	var _Shortcut2 = _interopRequireDefault(_Shortcut);
	
	var _ControlBar = __webpack_require__(16);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _browser = __webpack_require__(49);
	
	var browser = _interopRequireWildcard(_browser);
	
	var _utils = __webpack_require__(3);
	
	var _fullscreen = __webpack_require__(33);
	
	var _fullscreen2 = _interopRequireDefault(_fullscreen);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _react.PropTypes.any,
	
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  fluid: _react.PropTypes.bool,
	  muted: _react.PropTypes.bool,
	  playsInline: _react.PropTypes.bool,
	  aspectRatio: _react.PropTypes.string,
	
	  startTime: _react.PropTypes.number,
	  loop: _react.PropTypes.bool,
	  autoPlay: _react.PropTypes.bool,
	  src: _react.PropTypes.string,
	  poster: _react.PropTypes.string,
	  preload: _react2.default.PropTypes.oneOf(['auto', 'metadata', 'none']),
	
	  onLoadStart: _react.PropTypes.func,
	  onWaiting: _react.PropTypes.func,
	  onCanPlay: _react.PropTypes.func,
	  onCanPlayThrough: _react.PropTypes.func,
	  onPlaying: _react.PropTypes.func,
	  onEnded: _react.PropTypes.func,
	  onSeeking: _react.PropTypes.func,
	  onSeeked: _react.PropTypes.func,
	  onPlay: _react.PropTypes.func,
	  onPause: _react.PropTypes.func,
	  onProgress: _react.PropTypes.func,
	  onDurationChange: _react.PropTypes.func,
	  onError: _react.PropTypes.func,
	  onSuspend: _react.PropTypes.func,
	  onAbort: _react.PropTypes.func,
	  onEmptied: _react.PropTypes.func,
	  onStalled: _react.PropTypes.func,
	  onLoadedMetadata: _react.PropTypes.func,
	  onLoadedData: _react.PropTypes.func,
	  onTimeUpdate: _react.PropTypes.func,
	  onRateChange: _react.PropTypes.func,
	  onVolumeChange: _react.PropTypes.func
	};
	
	var defaultProps = {
	  fluid: true,
	  aspectRatio: 'auto'
	};
	
	var Player = function (_Component) {
	  _inherits(Player, _Component);
	
	  function Player(props) {
	    _classCallCheck(this, Player);
	
	    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
	
	    _this.controlsHideTimer = null;
	
	    _this.video = null; // the Video component
	    _this.manager = new _Manager2.default();
	    _this.actions = _this.manager.getActions();
	    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));
	
	    _this.getStyle = _this.getStyle.bind(_this);
	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.getChildren = _this.getChildren.bind(_this);
	    _this.handleMouseMove = (0, _lodash2.default)(_this.handleMouseMove.bind(_this), 250);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.startControlsTimer = _this.startControlsTimer.bind(_this);
	    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }
	
	  _createClass(Player, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleResize();
	      window.addEventListener('resize', this.handleResize);
	
	      _fullscreen2.default.addEventListener(this.handleFullScreenChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove event listener
	      window.addEventListener('resize', this.handleResize);
	      _fullscreen2.default.removeEventListener(this.handleFullScreenChange);
	      if (this.controlsHideTimer) {
	        window.clearTimeout(this.controlsHideTimer);
	      }
	    }
	
	    // get playback rate
	
	  }, {
	    key: 'getState',
	
	
	    // get redux state
	    // { player, operation }
	    value: function getState() {
	      return this.manager.getState();
	    }
	
	    // play the video
	
	  }, {
	    key: 'play',
	    value: function play() {
	      this.video.play();
	    }
	
	    // pause the video
	
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.video.pause();
	    }
	
	    // Change the video source and re-load the video:
	
	  }, {
	    key: 'load',
	    value: function load() {
	      this.video.load();
	    }
	
	    // Add a new text track to the video
	
	  }, {
	    key: 'addTextTrack',
	    value: function addTextTrack() {
	      var _video;
	
	      (_video = this.video).addTextTrack.apply(_video, arguments);
	    }
	
	    // Check if your browser can play different types of video:
	
	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var _video2;
	
	      (_video2 = this.video).canPlayType.apply(_video2, arguments);
	    }
	
	    // seek video by time
	
	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      this.video.seek(time);
	    }
	
	    // jump forward x seconds
	
	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.video.forward(seconds);
	    }
	
	    // jump back x seconds
	
	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.video.replay(seconds);
	    }
	
	    // enter or exist full screen
	
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      this.video.toggleFullscreen();
	    }
	
	    // subscribe to player state change
	
	  }, {
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener) {
	      this.manager.subscribeToPlayerStateChange(listener);
	    }
	
	    // player resize
	
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleFullScreenChange',
	    value: function handleFullScreenChange() {
	      this.actions.handleFullscreenChange(_fullscreen2.default.isFullscreen);
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'startControlsTimer',
	    value: function startControlsTimer() {
	      var _this2 = this;
	
	      this.actions.userActivate(true);
	      clearTimeout(this.controlsHideTimer);
	      this.controlsHideTimer = setTimeout(function () {
	        _this2.actions.userActivate(false);
	      }, 3000);
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle() {
	      var fluid = this.props.fluid;
	
	      var _manager$getState = this.manager.getState(),
	          player = _manager$getState.player;
	
	      var style = {};
	      var width = void 0;
	      var height = void 0;
	      var aspectRatio = void 0;
	
	      // The aspect ratio is either used directly or to calculate width and height.
	      if (this.props.aspectRatio !== undefined && this.props.aspectRatio !== 'auto') {
	        // Use any aspectRatio that's been specifically set
	        aspectRatio = this.props.aspectRatio;
	      } else if (player.videoWidth) {
	        // Otherwise try to get the aspect ratio from the video metadata
	        aspectRatio = player.videoWidth + ':' + player.videoHeight;
	      } else {
	        // Or use a default. The video element's is 2:1, but 16:9 is more common.
	        aspectRatio = '16:9';
	      }
	
	      // Get the ratio as a decimal we can use to calculate dimensions
	      var ratioParts = aspectRatio.split(':');
	      var ratioMultiplier = ratioParts[1] / ratioParts[0];
	
	      if (this.props.width !== undefined) {
	        // Use any width that's been specifically set
	        width = this.props.width;
	      } else if (this.props.height !== undefined) {
	        // Or calulate the width from the aspect ratio if a height has been set
	        width = this.props.height / ratioMultiplier;
	      } else {
	        // Or use the video's metadata, or use the video el's default of 300
	        width = player.videoWidth || 400;
	      }
	
	      if (this.props.height !== undefined) {
	        // Use any height that's been specifically set
	        height = this.props.height;
	      } else {
	        // Otherwise calculate the height from the ratio and the width
	        height = width * ratioMultiplier;
	      }
	
	      if (fluid) {
	        style.paddingTop = ratioMultiplier * 100 + '%';
	      } else {
	        style.width = width + 'px';
	        style.height = height + 'px';
	      }
	
	      return style;
	    }
	  }, {
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren(props, fullProps) {
	      var _this3 = this;
	
	      return [_react2.default.createElement(_Video2.default, _extends({
	        ref: function ref(c) {
	          _this3.manager.video = _this3.video = c;
	        },
	        key: 'video',
	        order: 0.0
	      }, fullProps)), _react2.default.createElement(_PosterImage2.default, _extends({
	        key: 'poster-image',
	        order: 1.0
	      }, props)), _react2.default.createElement(_LoadingSpinner2.default, _extends({
	        key: 'loading-spinner',
	        order: 2.0
	      }, props)), _react2.default.createElement(_Bezel2.default, _extends({
	        key: 'bezel',
	        order: 3.0
	      }, props)), _react2.default.createElement(_BigPlayButton2.default, _extends({
	        key: 'big-play-button',
	        order: 4.0
	      }, props)), _react2.default.createElement(_ControlBar2.default, _extends({
	        key: 'control-bar',
	        order: 5.0
	      }, props)), _react2.default.createElement(_Shortcut2.default, _extends({
	        key: 'shortcut',
	        order: 99.0
	      }, props))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren(props) {
	      var propsWithoutChildren = _extends({}, props, {
	        children: null
	      });
	      var children = _react2.default.Children.toArray(this.props.children).filter(function (e) {
	        return !(0, _utils.isVideoChild)(e);
	      });
	      var defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
	      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, propsWithoutChildren);
	    }
	  }, {
	    key: 'handleStateChange',
	    value: function handleStateChange(state, prevState) {
	      if (state.isFullscreen !== prevState.isFullscreen) {
	        this.handleResize();
	      }
	      this.forceUpdate(); // re-render
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.actions.activate(true);
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.actions.activate(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var fluid = this.props.fluid;
	
	      var _manager$getState2 = this.manager.getState(),
	          player = _manager$getState2.player;
	
	      var paused = player.paused,
	          hasStarted = player.hasStarted,
	          waiting = player.waiting,
	          seeking = player.seeking,
	          isFullscreen = player.isFullscreen,
	          userActivity = player.userActivity;
	
	      var props = _extends({}, this.props, {
	        player: player,
	        actions: this.actions,
	        manager: this.manager,
	        store: this.manager.store,
	        video: this.video ? this.video.video : null
	      });
	      var children = this.getChildren(props);
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-controls-enabled': true,
	            'video-react-has-started': hasStarted,
	            'video-react-paused': paused,
	            'video-react-playing': !paused,
	            'video-react-waiting': waiting,
	            'video-react-seeking': seeking,
	            'video-react-fluid': fluid,
	            'video-react-fullscreen': isFullscreen,
	            'video-react-user-inactive': !userActivity,
	            'video-react-user-active': userActivity,
	            'video-react-workinghover': !browser.IS_IOS
	          }, 'video-react'),
	          style: this.getStyle(),
	          ref: function ref(c) {
	            _this4.manager.rootElement = c;
	          },
	          onTouchStart: this.handleMouseDown,
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove,
	          onKeyDown: this.handleKeyDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          tabIndex: '-1'
	        },
	        children
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    get: function get() {
	      return this.video.playbackRate;
	    }
	
	    // set playback rate
	    // speed of video
	    ,
	    set: function set(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: 'muted',
	    get: function get() {
	      return this.video.muted;
	    },
	    set: function set(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    get: function get() {
	      return this.video.volume;
	    },
	    set: function set(val) {
	      this.video.volume = val;
	    }
	
	    // video width
	
	  }, {
	    key: 'videoWidth',
	    get: function get() {
	      return this.video.videoWidth;
	    }
	
	    // video height
	
	  }, {
	    key: 'videoHeight',
	    get: function get() {
	      return this.video.videoHeight;
	    }
	  }]);
	
	  return Player;
	}(_react.Component);
	
	exports.default = Player;
	
	
	Player.propTypes = propTypes;
	Player.defaultProps = defaultProps;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _react.PropTypes.any
	};
	
	var Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu(props, context) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: "handleClick",
	    value: function handleClick(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        {
	          className: "video-react-menu",
	          role: "presentation",
	          tabIndex: "0",
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          "ul",
	          { className: "video-react-menu-content" },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Menu;
	}(_react.Component);
	
	exports.default = Menu;
	
	
	Menu.propTypes = propTypes;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Menu = __webpack_require__(38);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(40);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _ClickableComponent = __webpack_require__(11);
	
	var _ClickableComponent2 = _interopRequireDefault(_ClickableComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  inline: _react.PropTypes.bool,
	  items: _react.PropTypes.array,
	  className: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  children: _react.PropTypes.any
	};
	
	var MenuButton = function (_Component) {
	  _inherits(MenuButton, _Component);
	
	  function MenuButton(props, context) {
	    _classCallCheck(this, MenuButton);
	
	    var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.renderMenu = _this.renderMenu.bind(_this);
	    return _this;
	  }
	
	  _createClass(MenuButton, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      if (this.props.onClick) {
	        this.props.onClick(event);
	      }
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var items = this.props.items;
	
	      var i = 0;
	      return _react2.default.createElement(
	        _Menu2.default,
	        null,
	        items.reverse().map(function (item) {
	          return _react2.default.createElement(_MenuItem2.default, { item: item, key: 'item-' + i++ });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          inline = _props.inline,
	          className = _props.className;
	
	
	      return _react2.default.createElement(
	        _ClickableComponent2.default,
	        {
	          className: (0, _classnames2.default)(className, {
	            'video-react-menu-button-inline': !!inline,
	            'video-react-menu-button-popup': !inline
	          }, 'video-react-control video-react-button video-react-menu-button'),
	          role: 'presentation',
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        this.props.children,
	        this.renderMenu()
	      );
	    }
	  }]);
	
	  return MenuButton;
	}(_react.Component);
	
	exports.default = MenuButton;
	
	
	MenuButton.propTypes = propTypes;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  item: _react.PropTypes.object
	};
	
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem(props, context) {
	    _classCallCheck(this, MenuItem);
	
	    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(MenuItem, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var item = this.props.item;
	
	      if (item.onClick) {
	        item.onClick(item);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var item = this.props.item;
	
	      return _react2.default.createElement(
	        'li',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-menu-item': true,
	            'video-react-selected': item.selected
	          }),
	          onClick: this.handleClick
	        },
	        item.label,
	        _react2.default.createElement('span', { className: 'video-react-control-text' })
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react.Component);
	
	exports.default = MenuItem;
	
	
	MenuItem.propTypes = propTypes;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  children: _react.PropTypes.any
	};
	
	var Popup = function (_Component) {
	  _inherits(Popup, _Component);
	
	  function Popup(props, context) {
	    _classCallCheck(this, Popup);
	
	    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Popup, [{
	    key: "handleClick",
	    value: function handleClick(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var children = this.props.children;
	
	      return _react2.default.createElement(
	        "div",
	        {
	          className: "video-react-menu",
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          "div",
	          { className: "video-react-menu-content" },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Popup;
	}(_react.Component);
	
	exports.default = Popup;
	
	
	Popup.propTypes = propTypes;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ClickableComponent = __webpack_require__(11);
	
	var _ClickableComponent2 = _interopRequireDefault(_ClickableComponent);
	
	var _Popup = __webpack_require__(41);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  inline: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func.isRequired,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  className: _react.PropTypes.string
	};
	
	var defaultProps = {
	  inline: true
	};
	
	var PopupButton = function (_Component) {
	  _inherits(PopupButton, _Component);
	
	  function PopupButton(props, context) {
	    _classCallCheck(this, PopupButton);
	
	    return _possibleConstructorReturn(this, (PopupButton.__proto__ || Object.getPrototypeOf(PopupButton)).call(this, props, context));
	  }
	
	  _createClass(PopupButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          inline = _props.inline,
	          className = _props.className;
	
	      var props = _extends({}, this.props);
	      delete props.children;
	      delete props.inline;
	      delete props.className;
	      return _react2.default.createElement(
	        _ClickableComponent2.default,
	        _extends({
	          className: (0, _classnames2.default)(className, {
	            'video-react-menu-button-inline': !!inline,
	            'video-react-menu-button-popup': !inline
	          }, 'video-react-control video-react-button video-react-menu-button')
	        }, props),
	        _react2.default.createElement(_Popup2.default, this.props)
	      );
	    }
	  }]);
	
	  return PopupButton;
	}(_react.Component);
	
	exports.default = PopupButton;
	
	
	PopupButton.propTypes = propTypes;
	PopupButton.defaultProps = defaultProps;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Slider = __webpack_require__(5);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _VolumeLevel = __webpack_require__(44);
	
	var _VolumeLevel2 = _interopRequireDefault(_VolumeLevel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func
	};
	
	var VolumeBar = function (_Component) {
	  _inherits(VolumeBar, _Component);
	
	  function VolumeBar(props, context) {
	    _classCallCheck(this, VolumeBar);
	
	    var _this = _possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));
	
	    _this.state = {
	      percentage: '0%'
	    };
	
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
	    _this.checkMuted = _this.checkMuted.bind(_this);
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }
	
	  _createClass(VolumeBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var player = this.props.player;
	
	      if (player.muted) {
	        return 0;
	      }
	      return player.volume;
	    }
	  }, {
	    key: 'checkMuted',
	    value: function checkMuted() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      if (player.muted) {
	        actions.mute(false);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;
	
	      this.checkMuted();
	      var distance = this.slider.calculateDistance(event);
	      actions.changeVolume(distance);
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      this.checkMuted();
	      actions.changeVolume(player.volume + 0.1);
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;
	
	      this.checkMuted();
	      actions.changeVolume(player.volume - 0.1);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handlePercentageChange',
	    value: function handlePercentageChange(percentage) {
	      if (percentage !== this.state.percentage) {
	        this.setState({
	          percentage: percentage
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var player = this.props.player;
	
	
	      var volume = (player.volume * 100).toFixed(2);
	      return _react2.default.createElement(
	        _Slider2.default,
	        _extends({
	          ref: function ref(c) {
	            _this2.slider = c;
	          },
	          label: 'volume level',
	          valuenow: volume,
	          valuetext: volume + '%',
	          onMouseMove: this.handleMouseMove,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          sliderActive: this.handleFocus,
	          sliderInactive: this.handleBlur,
	          getPercent: this.getPercent,
	          onPercentageChange: this.handlePercentageChange,
	          stepForward: this.stepForward,
	          stepBack: this.stepBack,
	          className: 'video-react-volume-bar video-react-slider-bar'
	        }, this.props),
	        _react2.default.createElement(_VolumeLevel2.default, this.props)
	      );
	    }
	  }]);
	
	  return VolumeBar;
	}(_react.Component);
	
	VolumeBar.propTypes = propTypes;
	
	exports.default = VolumeBar;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  percentage: _react.PropTypes.string,
	  vertical: _react.PropTypes.bool
	};
	
	var defaultProps = {
	  percentage: '100%',
	  vertical: false
	};
	
	function VolumeLevel(_ref) {
	  var percentage = _ref.percentage,
	      vertical = _ref.vertical;
	
	  var style = {};
	  if (vertical) {
	    style.height = percentage;
	  } else {
	    style.width = percentage;
	  }
	
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-volume-level',
	      style: style
	    },
	    _react2.default.createElement('span', { className: 'video-react-control-text' })
	  );
	}
	
	VolumeLevel.propTypes = propTypes;
	VolumeLevel.defaultProps = defaultProps;
	exports.default = VolumeLevel;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaybackRate = exports.VolumeMenuButton = exports.TimeDivider = exports.DurationDisplay = exports.CurrentTimeDisplay = exports.RemainingTimeDisplay = exports.MouseTimeDisplay = exports.LoadProgressBar = exports.PlayProgressBar = exports.Slider = exports.SeekBar = exports.ProgressControl = exports.FullscreenToggle = exports.ReplayControl = exports.ForwardControl = exports.PlayToggle = exports.ControlBar = exports.Shortcut = exports.Bezel = exports.PosterImage = exports.LoadingSpinner = exports.BigPlayButton = exports.Video = exports.Player = undefined;
	
	var _Player = __webpack_require__(37);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Video = __webpack_require__(15);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _BigPlayButton = __webpack_require__(10);
	
	var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);
	
	var _LoadingSpinner = __webpack_require__(12);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _PosterImage = __webpack_require__(13);
	
	var _PosterImage2 = _interopRequireDefault(_PosterImage);
	
	var _Slider = __webpack_require__(5);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Bezel = __webpack_require__(9);
	
	var _Bezel2 = _interopRequireDefault(_Bezel);
	
	var _Shortcut = __webpack_require__(14);
	
	var _Shortcut2 = _interopRequireDefault(_Shortcut);
	
	var _ControlBar = __webpack_require__(16);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _PlayToggle = __webpack_require__(23);
	
	var _PlayToggle2 = _interopRequireDefault(_PlayToggle);
	
	var _ForwardControl = __webpack_require__(17);
	
	var _ForwardControl2 = _interopRequireDefault(_ForwardControl);
	
	var _ReplayControl = __webpack_require__(26);
	
	var _ReplayControl2 = _interopRequireDefault(_ReplayControl);
	
	var _FullscreenToggle = __webpack_require__(19);
	
	var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);
	
	var _ProgressControl = __webpack_require__(25);
	
	var _ProgressControl2 = _interopRequireDefault(_ProgressControl);
	
	var _SeekBar = __webpack_require__(27);
	
	var _SeekBar2 = _interopRequireDefault(_SeekBar);
	
	var _PlayProgressBar = __webpack_require__(22);
	
	var _PlayProgressBar2 = _interopRequireDefault(_PlayProgressBar);
	
	var _LoadProgressBar = __webpack_require__(20);
	
	var _LoadProgressBar2 = _interopRequireDefault(_LoadProgressBar);
	
	var _MouseTimeDisplay = __webpack_require__(21);
	
	var _MouseTimeDisplay2 = _interopRequireDefault(_MouseTimeDisplay);
	
	var _VolumeMenuButton = __webpack_require__(28);
	
	var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);
	
	var _PlaybackRate = __webpack_require__(24);
	
	var _PlaybackRate2 = _interopRequireDefault(_PlaybackRate);
	
	var _RemainingTimeDisplay = __webpack_require__(31);
	
	var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);
	
	var _CurrentTimeDisplay = __webpack_require__(29);
	
	var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);
	
	var _DurationDisplay = __webpack_require__(30);
	
	var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);
	
	var _TimeDivider = __webpack_require__(32);
	
	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Player = _Player2.default;
	exports.Video = _Video2.default;
	exports.BigPlayButton = _BigPlayButton2.default;
	exports.LoadingSpinner = _LoadingSpinner2.default;
	exports.PosterImage = _PosterImage2.default;
	exports.Bezel = _Bezel2.default;
	exports.Shortcut = _Shortcut2.default;
	exports.ControlBar = _ControlBar2.default;
	exports.PlayToggle = _PlayToggle2.default;
	exports.ForwardControl = _ForwardControl2.default;
	exports.ReplayControl = _ReplayControl2.default;
	exports.FullscreenToggle = _FullscreenToggle2.default;
	exports.ProgressControl = _ProgressControl2.default;
	exports.SeekBar = _SeekBar2.default;
	exports.Slider = _Slider2.default;
	exports.PlayProgressBar = _PlayProgressBar2.default;
	exports.LoadProgressBar = _LoadProgressBar2.default;
	exports.MouseTimeDisplay = _MouseTimeDisplay2.default;
	exports.RemainingTimeDisplay = _RemainingTimeDisplay2.default;
	exports.CurrentTimeDisplay = _CurrentTimeDisplay2.default;
	exports.DurationDisplay = _DurationDisplay2.default;
	exports.TimeDivider = _TimeDivider2.default;
	exports.VolumeMenuButton = _VolumeMenuButton2.default;
	exports.PlaybackRate = _PlaybackRate2.default;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  return {
	    player: (0, _player2.default)(state.player, action),
	    operation: (0, _operation2.default)(state.operation, action)
	  };
	};
	
	var _player = __webpack_require__(48);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _operation = __webpack_require__(47);
	
	var _operation2 = _interopRequireDefault(_operation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = operation;
	
	var _player = __webpack_require__(4);
	
	var initialState = {
	  count: 0,
	  operation: {
	    action: '',
	    source: ''
	  }
	};
	
	function operation() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _player.OPERATE:
	      return _extends({}, state, {
	        count: state.count + 1,
	        operation: _extends({}, state.operation, action.operation)
	      });
	    default:
	      return state;
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = video;
	
	var _video = __webpack_require__(8);
	
	var _player = __webpack_require__(4);
	
	var initialState = {
	  currentSrc: null,
	  duration: 0,
	  currentTime: 0,
	  seekingTime: 0,
	  buffered: null,
	  waiting: true,
	  seeking: false,
	  paused: true,
	  autoPaused: false,
	  ended: false,
	  playbackRate: 1,
	  muted: false,
	  volume: 1,
	  readyState: 0,
	  networkState: 0,
	  videoWidth: 0,
	  videoHeight: 0,
	  hasStarted: false,
	  userActivity: true,
	  isActive: false,
	  isFullscreen: false
	};
	
	function video() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _video.VOLUME_MUTE:
	      return _extends({}, state, {
	        muted: action.muted
	      });
	    case _video.LOAD_START:
	      return _extends({}, state, {
	        hasStarted: false,
	        ended: false,
	        buffered: action.buffered
	      });
	    case _video.CAN_PLAY:
	      return _extends({}, state, {
	        waiting: false,
	        videoWidth: action.videoWidth,
	        videoHeight: action.videoHeight,
	        duration: action.duration,
	        currentSrc: action.currentSrc
	      });
	    case _video.WAITING:
	      return _extends({}, state, {
	        waiting: true
	      });
	    case _video.CAN_PLAY_THROUGH:
	    case _video.PLAYING:
	      return _extends({}, state, {
	        waiting: false
	      });
	    case _video.PLAY:
	      return _extends({}, state, {
	        ended: false,
	        paused: false,
	        autoPaused: false,
	        waiting: false,
	        hasStarted: true,
	        duration: action.duration,
	        currentSrc: action.currentSrc
	      });
	    case _video.PAUSE:
	      return _extends({}, state, {
	        paused: true
	      });
	    case _video.END:
	      return _extends({}, state, {
	        ended: true
	      });
	    case _video.SEEKING:
	      return _extends({}, state, {
	        seeking: true
	      });
	    case _video.SEEKED:
	      return _extends({}, state, {
	        seeking: false
	      });
	    case _video.SEEKING_TIME:
	      return _extends({}, state, {
	        seekingTime: action.time
	      });
	    case _video.END_SEEKING:
	      return _extends({}, state, {
	        seekingTime: 0,
	        currentTime: action.time
	      });
	    case _video.DURATION_CHANGE:
	      return _extends({}, state, {
	        duration: action.duration
	      });
	    case _video.TIME_UPDATE:
	      return _extends({}, state, {
	        currentTime: action.time
	      });
	    case _video.VOLUME_CHANGE:
	      return _extends({}, state, {
	        volume: action.volume,
	        muted: action.muted
	      });
	    case _video.PROGRESS_CHANGE:
	      return _extends({}, state, {
	        buffered: action.buffered
	      });
	    case _video.RATE_CHANGE:
	      return _extends({}, state, {
	        playbackRate: action.rate
	      });
	    case _player.FULLSCREEN_CHANGE:
	      return _extends({}, state, {
	        isFullscreen: !!action.isFullscreen
	      });
	    case _player.USER_ACTIVATE:
	      return _extends({}, state, {
	        userActivity: action.activity
	      });
	    case _player.PLAYER_ACTIVATE:
	      return _extends({}, state, {
	        isActive: action.activity
	      });
	    default:
	      return state;
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
	var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
	var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
	
	/*
	 * Device is an iPhone
	 *
	 * @type {Boolean}
	 * @constant
	 * @private
	 */
	var IS_IPAD = exports.IS_IPAD = /iPad/i.test(USER_AGENT);
	
	// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
	// to identify iPhones, we need to exclude iPads.
	// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
	var IS_IPHONE = exports.IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = exports.IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = exports.IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(35),
	    getRawTag = __webpack_require__(54),
	    objectToString = __webpack_require__(55);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(56);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(35);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(52);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(51),
	    getPrototype = __webpack_require__(53),
	    isObjectLike = __webpack_require__(58);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(59);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(61);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(63);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(64)(module)))

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=video-react.js.map