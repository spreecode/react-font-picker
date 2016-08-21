require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-font-picker":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FontPicker = (function (_Component) {
	_inherits(FontPicker, _Component);

	function FontPicker(props) {
		_classCallCheck(this, FontPicker);

		_get(Object.getPrototypeOf(FontPicker.prototype), "constructor", this).call(this, props);

		// Bind component methods to this context
		this.onWrapperClick = this.onWrapperClick.bind(this);
		this.onOptionClick = this.onOptionClick.bind(this);

		this.state = {
			isOptionsVisible: false,
			selectedFont: this.props.value
		};
	}

	_createClass(FontPicker, [{
		key: "componentDidMount",
		value: function componentDidMount() {

			// Check if stylesheet already exists
			for (var i = 0; i < document.styleSheets.length; i++) {

				var styleSheet = document.styleSheets[i];
				var cssRules = styleSheet.rules ? styleSheet.rules : styleSheet.cssRules;

				if (typeof cssRule !== "undefined" && cssRule !== null) {
					for (var j = 0; j < cssRules.length; ++j) {
						if (cssRules[j].selectorText == ".ReactFontPicker") return;
					}
				}
			}

			// Create stylesheet on the fly
			var styles = document.createElement("style");

			styles.innerHTML = "\n\t\t\t.ReactFontPicker_Wrapper {\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 30px;\n\t\t\t\tborder-bottom: 1px solid #ddd;\n\t\t\t}\n\t\t\t.ReactFontPicker_Wrapper:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.ReactFontPicker_Label {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 8px;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tcolor: #a0a0a0;\n\t\t\t}\n\t\t\t.ReactFontPicker_LabelFloat {\n\t\t\t\tposition: absolute;\n\t\t\t\tfont-size: 11px;\n\t\t\t\tbottom: 27px;\n\t\t\t\tcolor: #888;\n\t\t\t\t-webkit-transition: .2s all ease-in-out;\n\t\t\t\t-moz-transition: .2s all ease-in-out;\n\t\t\t\t-ms-transition: .2s all ease-in-out;\n\t\t\t\t-o-transition: .2s all ease-in-out;\n\t\t\t\ttransition: .2s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_SelectedOption {\n\t\t\t\tposition: absolute;\n\t\t\t\theight: 25px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tfont-size: 15px;\n\t\t\t}\n\t\t\t.ReactFontPicker_Button {\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 5px;\n\t\t\t\ttop: 12px;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-width: 5px 6px 0 6px;\n\t\t\t\tborder-color: #dddddd transparent transparent transparent;\n\t\t\t}\n\t\t\t.ReactFontPicker_Button:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.ReactFontPicker_Options {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -7.5px;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: auto;\n\t\t\t\tpadding-bottom: 15px;\n\t\t\t\tpadding-top: 15px;\n\t\t\t\tfloat: left;\n\t\t\t\tbackground-color: #fff;\n\n\t\t\t\tbox-shadow: 0px 0px 6px #ddd;\n\n\t\t\t\t-webkit-transition: .15s all ease-in-out;\n\t\t\t\t-moz-transition: .15s all ease-in-out;\n\t\t\t\t-ms-transition: .15s all ease-in-out;\n\t\t\t\t-o-transition: .15s all ease-in-out;\n\t\t\t\ttransition: .15s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_OptionsHidden {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -7.5px;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 0px;\n\t\t\t\tpadding-bottom: 0;\n\t\t\t\tpadding-top: 0;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\toverflow: hidden;\n\n\t\t\t\tbox-shadow: 0px 0px 6px #ddd;\n\n\t\t\t\t-webkit-transition: .15s all ease-in-out;\n\t\t\t\t-moz-transition: .15s all ease-in-out;\n\t\t\t\t-ms-transition: .15s all ease-in-out;\n\t\t\t\t-o-transition: .15s all ease-in-out;\n\t\t\t\ttransition: .15s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_Option {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: calc(100% - 20px);\n\t\t\t\tpadding-left: 10px;\n\t\t\t\tpadding-right: 10px;\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tfloat: left;\n\n\t\t\t\t-webkit-transition: .1s all ease-in-out;\n\t\t\t\t-moz-transition: .1s all ease-in-out;\n\t\t\t\t-ms-transition: .1s all ease-in-out;\n\t\t\t\t-o-transition: .1s all ease-in-out;\n\t\t\t\ttransition: .1s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_Option:hover {\n\t\t\t\tbackground-color: #eee;\n\t\t\t}\n\t\t\tdiv.ReactFontPicker_Wrapper .ripple {\n\t\t\t\tposition: relative;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\tdiv.ReactFontPicker_Wrapper .ripple-effect{\n\t\t\t\tposition: absolute;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tbackground: white;\n\t\t\t\tanimation: ripple-animation 1.8s;\n\t\t\t}\n\t\t\t@keyframes ripple-animation {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 0.4;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(100);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.ReactFontPicker {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t";
			document.getElementsByTagName("head")[0].appendChild(styles);
		}
	}, {
		key: "onWrapperClick",
		value: function onWrapperClick() {
			this.setState({ isOptionsVisible: !this.state.isOptionsVisible });
		}
	}, {
		key: "onOptionClick",
		value: function onOptionClick(e, font) {
			e.stopPropagation();

			if (typeof this.props.onChange == "function") this.props.onChange(font);

			this.setState({ isOptionsVisible: false, selectedFont: font });
		}
	}, {
		key: "onOptionMouseDown",
		value: function onOptionMouseDown(e, key) {
			// Material UI ripple effect
			e.preventDefault();
			e.stopPropagation();

			var target = e.target;

			var div = document.createElement("div"),
			    targetOffset = target.getBoundingClientRect(),
			    xPos = e.pageX - targetOffset.left,
			    yPos = e.pageY - targetOffset.top;

			div.classList.add('ripple-effect');
			div.style.top = parseInt(yPos - targetOffset.height / 2) + "px";
			div.style.left = parseInt(xPos - targetOffset.height) + "px";

			target.appendChild(div);

			setTimeout(function () {
				target.removeChild(div);
			}, 500);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var _props = this.props;
			var label = _props.label;
			var fonts = _props.fonts;
			var previews = _props.previews;
			var activeColor = _props.activeColor;

			// Get select font (value) from props or local state if props not given
			var value = this.props.value || this.state.selectedFont;

			return _react2["default"].createElement(
				"div",
				{ className: "ReactFontPicker" },
				_react2["default"].createElement(
					"div",
					{ className: "ReactFontPicker_Wrapper", onClick: this.onWrapperClick },
					_react2["default"].createElement(
						"div",
						{ className: this.state.selectedFont === "" ? "ReactFontPicker_Label" : "ReactFontPicker_LabelFloat" },
						label
					),
					_react2["default"].createElement(
						"div",
						{ className: "ReactFontPicker_SelectedOption" },
						value
					),
					_react2["default"].createElement("div", { className: "ReactFontPicker_Button" }),
					_react2["default"].createElement(
						"div",
						{ className: this.state.isOptionsVisible ? "ReactFontPicker_Options" : "ReactFontPicker_OptionsHidden" },
						fonts.map(function (n, i) {

							var style = {};

							if (value == n) style.color = activeColor;

							if (previews) style.fontFamily = n;

							return _react2["default"].createElement(
								"div",
								{ className: "ReactFontPicker_Option ripple",
									style: style,
									key: i,
									onMouseDown: function (e) {
										return _this.onOptionMouseDown(e, i);
									},
									onClick: function (e) {
										return _this.onOptionClick(e, n);
									} },
								n
							);
						})
					)
				)
			);
		}
	}]);

	return FontPicker;
})(_react.Component);

exports["default"] = FontPicker;

FontPicker.propTypes = {
	fonts: _react.PropTypes.array,
	label: _react.PropTypes.string,
	previews: _react.PropTypes.bool,
	activeColor: _react.PropTypes.string,
	value: _react.PropTypes.string,
	onChange: _react.PropTypes.func
};

FontPicker.defaultProps = {
	label: "",
	previews: true,
	fonts: ["Arial", "Arial Narrow", "Arial Black", "Courier New", "Georgia", "Lucida Console", "Lucida Sans Unicode", "Tahoma", "Times New Roman", "Verdana"],
	activeColor: "#64B5F6",
	value: "",
	onChange: function onChange(font) {
		console.log("FontPicker: " + font);
	}
};

exports["default"] = FontPicker;
module.exports = exports["default"];
/* Wrapper */ /* Floating label text */ /* Selected option */ /* Downdown button */ /* Options list */

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGFpdG91bml0ZWQvUHJvamVjdHMvcmVhY3QtZm9udC1waWNrZXIvc3JjL1JlYWN0Rm9udFBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQTRDLE9BQU87Ozs7SUFFOUIsVUFBVTtXQUFWLFVBQVU7O0FBRW5CLFVBRlMsVUFBVSxDQUVsQixLQUFLLEVBQUU7d0JBRkMsVUFBVTs7QUFHM0IsNkJBSGlCLFVBQVUsNkNBR3JCLEtBQUssRUFBRTs7O0FBR2YsTUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRCxNQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVuRCxNQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1osbUJBQWdCLEVBQUUsS0FBSztBQUN2QixlQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0dBQzlCLENBQUE7RUFDQTs7Y0Fia0IsVUFBVTs7U0FlYiw2QkFBRzs7O0FBR25CLFFBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFFbkQsUUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxRQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7QUFFM0UsUUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtBQUNyRCxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdB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LEVBQUU7QUFDVCxTQUFRLEVBQUUsSUFBSTtBQUNkLE1BQUssRUFBRSxDQUNOLE9BQU8sRUFDUCxjQUFjLEVBQ2QsYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVDtBQUNELFlBQVcsRUFBRSxTQUFTO0FBQ3RCLE1BQUssRUFBRSxFQUFFO0FBQ1QsU0FBUSxFQUFFLGtCQUFTLElBQUksRUFBRTtBQUN4QixTQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztFQUNuQztDQUNELENBQUE7O3FCQUVjLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEJpbmQgY29tcG9uZW50IG1ldGhvZHMgdG8gdGhpcyBjb250ZXh0XG5cdFx0dGhpcy5vbldyYXBwZXJDbGljayA9IHRoaXMub25XcmFwcGVyQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uT3B0aW9uQ2xpY2sgPSB0aGlzLm9uT3B0aW9uQ2xpY2suYmluZCh0aGlzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc09wdGlvbnNWaXNpYmxlOiBmYWxzZSxcblx0XHRcdHNlbGVjdGVkRm9udDogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cbiAgfVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgc3R5bGVzaGVldCBhbHJlYWR5IGV4aXN0c1xuXHRcdGZvciAodmFyIGk9MDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdHZhciBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG5cdCAgICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0LnJ1bGVzID8gc3R5bGVTaGVldC5ydWxlcyA6IHN0eWxlU2hlZXQuY3NzUnVsZXM7XG5cblx0XHRcdGlmICh0eXBlb2YgY3NzUnVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjc3NSdWxlICE9PSBudWxsKSB7XG5cdFx0ICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3NzUnVsZXMubGVuZ3RoOyArK2opIHtcblx0XHQgICAgICAgIGlmKGNzc1J1bGVzW2pdLnNlbGVjdG9yVGV4dCA9PSBcIi5SZWFjdEZvbnRQaWNrZXJcIikgcmV0dXJuO1xuXHQgICAgXHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHN0eWxlc2hlZXQgb24gdGhlIGZseVxuXHRcdHZhciBzdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0XHRzdHlsZXMuaW5uZXJIVE1MID0gYFxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlcjpob3ZlciB7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfTGFiZWwge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGNvbG9yOiAjYTBhMGEwO1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9MYWJlbEZsb2F0IHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdGJvdHRvbTogMjdweDtcblx0XHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfU2VsZWN0ZWRPcHRpb24ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfQnV0dG9uIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0XHRcdGJvcmRlci13aWR0aDogNXB4IDZweCAwIDZweDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGRkZGRkIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9CdXR0b246aG92ZXIge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0XHRcdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNkZGQ7XG5cblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtby10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnNIaWRkZW4ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZGRkO1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tcy10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9PcHRpb24ge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfT3B0aW9uOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRcdH1cblx0XHRcdGRpdi5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlciAucmlwcGxlIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIC5yaXBwbGUtZWZmZWN0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdGFuaW1hdGlvbjogcmlwcGxlLWFuaW1hdGlvbiAxLjhzO1xuXHRcdFx0fVxuXHRcdFx0QGtleWZyYW1lcyByaXBwbGUtYW5pbWF0aW9uIHtcblx0XHRcdFx0ZnJvbSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dG8ge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0YDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc3R5bGVzKTtcblx0fVxuXG5cdG9uV3JhcHBlckNsaWNrKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lzT3B0aW9uc1Zpc2libGU6ICF0aGlzLnN0YXRlLmlzT3B0aW9uc1Zpc2libGV9KTtcblx0fVxuXG5cdG9uT3B0aW9uQ2xpY2soZSwgZm9udCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShmb250KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe2lzT3B0aW9uc1Zpc2libGU6IGZhbHNlLCBzZWxlY3RlZEZvbnQ6IGZvbnR9KTtcblx0fVxuXG5cdG9uT3B0aW9uTW91c2VEb3duKGUsIGtleSkge1xuXHRcdC8vIE1hdGVyaWFsIFVJIHJpcHBsZSBlZmZlY3Rcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGxldCB0YXJnZXQgPSBlLnRhcmdldDtcblxuXHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHR0YXJnZXRPZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRcdHhQb3MgPSBlLnBhZ2VYIC0gdGFyZ2V0T2Zmc2V0LmxlZnQsXG5cdFx0XHRcdHlQb3MgPSBlLnBhZ2VZIC0gdGFyZ2V0T2Zmc2V0LnRvcDtcblxuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdyaXBwbGUtZWZmZWN0Jyk7XG5cdFx0ZGl2LnN0eWxlLnRvcCA9IHBhcnNlSW50KHlQb3MgLSB0YXJnZXRPZmZzZXQuaGVpZ2h0IC8gMikgKyBcInB4XCI7XG5cdFx0ZGl2LnN0eWxlLmxlZnQgPSBwYXJzZUludCh4UG9zIC0gdGFyZ2V0T2Zmc2V0LmhlaWdodCkgKyBcInB4XCJcblxuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUNoaWxkKGRpdik7XG5cdFx0fSwgNTAwKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHsgbGFiZWwsIGZvbnRzLCBwcmV2aWV3cywgYWN0aXZlQ29sb3IgfSA9IHRoaXMucHJvcHM7XG5cblx0XHQvLyBHZXQgc2VsZWN0IGZvbnQgKHZhbHVlKSBmcm9tIHByb3BzIG9yIGxvY2FsIHN0YXRlIGlmIHByb3BzIG5vdCBnaXZlblxuXHRcdHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQ7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJSZWFjdEZvbnRQaWNrZXJcIj5cblxuXHRcdFx0XHR7LyogV3JhcHBlciAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJSZWFjdEZvbnRQaWNrZXJfV3JhcHBlclwiIG9uQ2xpY2s9e3RoaXMub25XcmFwcGVyQ2xpY2t9PlxuXG5cdFx0XHRcdFx0ey8qIEZsb2F0aW5nIGxhYmVsIHRleHQgKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRGb250ID09PSBcIlwiID8gXCJSZWFjdEZvbnRQaWNrZXJfTGFiZWxcIiA6IFwiUmVhY3RGb250UGlja2VyX0xhYmVsRmxvYXRcIn0+e2xhYmVsfTwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qIFNlbGVjdGVkIG9wdGlvbiAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlcl9TZWxlY3RlZE9wdGlvblwiPlxuXHRcdFx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qIERvd25kb3duIGJ1dHRvbiAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlcl9CdXR0b25cIj48L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiBPcHRpb25zIGxpc3QgKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNPcHRpb25zVmlzaWJsZSA/IFwiUmVhY3RGb250UGlja2VyX09wdGlvbnNcIiA6IFwiUmVhY3RGb250UGlja2VyX09wdGlvbnNIaWRkZW5cIn0+XG5cdFx0XHRcdFx0XHR7Zm9udHMubWFwKChuLCBpKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0dmFyIHN0eWxlID0ge307XG5cblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlID09IG4pXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGUuY29sb3IgPSBhY3RpdmVDb2xvcjtcblxuXHRcdFx0XHRcdFx0XHRpZiAocHJldmlld3MpXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGUuZm9udEZhbWlseSA9IG47XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlcl9PcHRpb24gcmlwcGxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHN0eWxlPXtzdHlsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0IGtleT17aX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uTW91c2VEb3duPXsoZSkgPT4gdGhpcy5vbk9wdGlvbk1vdXNlRG93bihlLCBpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uT3B0aW9uQ2xpY2soZSwgbil9PlxuXHRcdFx0XHRcdFx0XHRcdFx0e259XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkZvbnRQaWNrZXIucHJvcFR5cGVzID0ge1xuXHRmb250czogUHJvcFR5cGVzLmFycmF5LFxuXHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblx0cHJldmlld3M6IFByb3BUeXBlcy5ib29sLFxuXHRhY3RpdmVDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0dmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuRm9udFBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGxhYmVsOiBcIlwiLFxuXHRwcmV2aWV3czogdHJ1ZSxcblx0Zm9udHM6IFtcblx0XHRcIkFyaWFsXCIsXG5cdFx0XCJBcmlhbCBOYXJyb3dcIixcblx0XHRcIkFyaWFsIEJsYWNrXCIsXG5cdFx0XCJDb3VyaWVyIE5ld1wiLFxuXHRcdFwiR2VvcmdpYVwiLFxuXHRcdFwiTHVjaWRhIENvbnNvbGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIixcblx0XHRcIlRhaG9tYVwiLFxuXHRcdFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XCJWZXJkYW5hXCJcblx0XSxcblx0YWN0aXZlQ29sb3I6IFwiIzY0QjVGNlwiLFxuXHR2YWx1ZTogXCJcIixcblx0b25DaGFuZ2U6IGZ1bmN0aW9uKGZvbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcIkZvbnRQaWNrZXI6IFwiICsgZm9udCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9udFBpY2tlcjtcbiJdfQ==
