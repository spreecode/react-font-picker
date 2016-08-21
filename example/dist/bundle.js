require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-font-picker":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
		this.getBasicFonts = this.getBasicFonts.bind(this);
		this.onWrapperClick = this.onWrapperClick.bind(this);
		this.onOptionClick = this.onOptionClick.bind(this);

		// Get available fonts and selected fton from props or defaults
		var fonts = this.props.fonts || this.getBasicFonts();
		var selectedFont = this.props.value || "";

		// We have a local component state so the font picker works without
		// explicitly supplying with inital value and fonts as props
		this.state = {
			isOptionsVisible: false,
			selectedFont: selectedFont,
			fonts: fonts
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
		key: "getBasicFonts",
		value: function getBasicFonts() {
			return ["Arial", "Arial Narrow", "Arial Black", "Courier New", "Georgia", "Lucida Console", "Lucida Sans Unicode", "Tahoma", "Times New Roman", "Verdana"];
		}
	}, {
		key: "onWrapperClick",
		value: function onWrapperClick() {
			var newState = _extends({}, this.state);
			newState.isOptionsVisible = !newState.isOptionsVisible;
			this.setState(newState);
		}
	}, {
		key: "onOptionClick",
		value: function onOptionClick(e, font) {
			e.stopPropagation();

			if (typeof this.props.onChange == "function") this.props.onChange(font);

			var selectedFont = this.props.value || font;
			this.setState({ isOptionsVisible: false, selectedFont: selectedFont });
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

			var label = this.props.label;

			// Get fonts from props or local state
			var fonts = this.props.fonts || this.state.fonts;

			// Get select font (value) from props or local state if props not given
			var value = this.props.value || this.state.selectedFont;

			// Get font active color from props or default
			var activeColor = this.props.activeColor || "#64B5F6";

			// Preview fonts flag from props or default to true
			var previews = typeof this.props.previews === "undefined" ? true : this.props.previews;

			return _react2["default"].createElement(
				"div",
				{ className: "ReactFontPicker", style: { width: 300 } },
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

							if (_this.state.selectedFont == i) style.color = activeColor;

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

exports["default"] = FontPicker;
module.exports = exports["default"];
/* Wrapper */ /* Floating label text */ /* Selected option */ /* Downdown button */ /* Options list */

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGFpdG91bml0ZWQvUHJvamVjdHMvcmVhY3QtZm9udC1waWNrZXIvc3JjL1JlYWN0Rm9udFBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBNEMsT0FBTzs7OztJQUU5QixVQUFVO1dBQVYsVUFBVTs7QUFFbkIsVUFGUyxVQUFVLENBRWxCLEtBQUssRUFBRTt3QkFGQyxVQUFVOztBQUczQiw2QkFIaUIsVUFBVSw2Q0FHckIsS0FBSyxFQUFFOzs7QUFHZixNQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELE1BQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckQsTUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O0FBR25ELE1BQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyRCxNQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Ozs7QUFJMUMsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLG1CQUFnQixFQUFFLEtBQUs7QUFDdkIsZUFBWSxFQUFFLFlBQVk7QUFDMUIsUUFBSyxFQUFFLEtBQUs7R0FDWixDQUFBO0VBQ0E7O2NBckJrQixVQUFVOztTQXVCYiw2QkFBRzs7O0FBR25CLFFBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFFbkQsUUFBSSxVQUFVLEdBQUcs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Q0FBQyxFQUFFLENBQUMsRUFBSzs7QUFFcEIsV0FBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVmLFdBQUksTUFBSyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsRUFDL0IsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7O0FBRTNCLFdBQUksUUFBUSxFQUNYLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOztBQUV0QixjQUNDOztVQUFLLFNBQVMsRUFBQywrQkFBK0I7QUFDM0MsY0FBSyxFQUFFLEtBQUssQUFBQztBQUNiLFlBQUcsRUFBRSxDQUFDLEFBQUM7QUFDUCxvQkFBVyxFQUFFLFVBQUMsQ0FBQztpQkFBSyxNQUFLLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7VUFBQSxBQUFDO0FBQ2pELGdCQUFPLEVBQUUsVUFBQyxDQUFDO2lCQUFLLE1BQUssYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7VUFBQSxBQUFDO1FBQzFDLENBQUM7UUFDRyxDQUNMO09BQ0YsQ0FBQztNQUNHO0tBQ0Q7SUFDRCxDQUNMO0dBQ0Y7OztRQTVSbUIsVUFBVTs7O3FCQUFWLFVBQVU7O0FBK1IvQixVQUFVLENBQUMsU0FBUyxHQUFHO0FBQ3RCLE1BQUssRUFBRSxpQkFBVSxLQUFLO0FBQ3RCLE1BQUssRUFBRSxpQkFBVSxNQUFNO0FBQ3ZCLFNBQVEsRUFBRSxpQkFBVSxJQUFJO0FBQ3hCLFlBQVcsRUFBRSxpQkFBVSxNQUFNO0FBQzdCLE1BQUssRUFBRSxpQkFBVSxNQUFNO0FBQ3ZCLFNBQVEsRUFBRSxpQkFBVSxJQUFJO0NBQ3hCLENBQUE7O3FCQUVjLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEJpbmQgY29tcG9uZW50IG1ldGhvZHMgdG8gdGhpcyBjb250ZXh0XG5cdFx0dGhpcy5nZXRCYXNpY0ZvbnRzID0gdGhpcy5nZXRCYXNpY0ZvbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbldyYXBwZXJDbGljayA9IHRoaXMub25XcmFwcGVyQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uT3B0aW9uQ2xpY2sgPSB0aGlzLm9uT3B0aW9uQ2xpY2suYmluZCh0aGlzKTtcblxuXHRcdC8vIEdldCBhdmFpbGFibGUgZm9udHMgYW5kIHNlbGVjdGVkIGZ0b24gZnJvbSBwcm9wcyBvciBkZWZhdWx0c1xuXHRcdHZhciBmb250cyA9IHRoaXMucHJvcHMuZm9udHMgfHwgdGhpcy5nZXRCYXNpY0ZvbnRzKCk7XG5cdFx0dmFyIHNlbGVjdGVkRm9udCA9IHRoaXMucHJvcHMudmFsdWUgfHwgXCJcIjtcblxuXHRcdC8vIFdlIGhhdmUgYSBsb2NhbCBjb21wb25lbnQgc3RhdGUgc28gdGhlIGZvbnQgcGlja2VyIHdvcmtzIHdpdGhvdXRcblx0XHQvLyBleHBsaWNpdGx5IHN1cHBseWluZyB3aXRoIGluaXRhbCB2YWx1ZSBhbmQgZm9udHMgYXMgcHJvcHNcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNPcHRpb25zVmlzaWJsZTogZmFsc2UsXG5cdFx0XHRzZWxlY3RlZEZvbnQ6IHNlbGVjdGVkRm9udCxcblx0XHRcdGZvbnRzOiBmb250c1xuXHRcdH1cbiAgfVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgc3R5bGVzaGVldCBhbHJlYWR5IGV4aXN0c1xuXHRcdGZvciAodmFyIGk9MDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdHZhciBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG5cdCAgICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0LnJ1bGVzID8gc3R5bGVTaGVldC5ydWxlcyA6IHN0eWxlU2hlZXQuY3NzUnVsZXM7XG5cblx0XHRcdGlmICh0eXBlb2YgY3NzUnVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjc3NSdWxlICE9PSBudWxsKSB7XG5cdFx0ICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3NzUnVsZXMubGVuZ3RoOyArK2opIHtcblx0XHQgICAgICAgIGlmKGNzc1J1bGVzW2pdLnNlbGVjdG9yVGV4dCA9PSBcIi5SZWFjdEZvbnRQaWNrZXJcIikgcmV0dXJuO1xuXHQgICAgXHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHN0eWxlc2hlZXQgb24gdGhlIGZseVxuXHRcdHZhciBzdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0XHRzdHlsZXMuaW5uZXJIVE1MID0gYFxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlcjpob3ZlciB7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfTGFiZWwge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGNvbG9yOiAjYTBhMGEwO1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9MYWJlbEZsb2F0IHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdGJvdHRvbTogMjdweDtcblx0XHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfU2VsZWN0ZWRPcHRpb24ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfQnV0dG9uIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0XHRcdGJvcmRlci13aWR0aDogNXB4IDZweCAwIDZweDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGRkZGRkIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9CdXR0b246aG92ZXIge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0XHRcdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNkZGQ7XG5cblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtby10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnNIaWRkZW4ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZGRkO1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tcy10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9PcHRpb24ge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfT3B0aW9uOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRcdH1cblx0XHRcdGRpdi5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlciAucmlwcGxlIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIC5yaXBwbGUtZWZmZWN0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdGFuaW1hdGlvbjogcmlwcGxlLWFuaW1hdGlvbiAxLjhzO1xuXHRcdFx0fVxuXHRcdFx0QGtleWZyYW1lcyByaXBwbGUtYW5pbWF0aW9uIHtcblx0XHRcdFx0ZnJvbSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dG8ge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0YDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc3R5bGVzKTtcblx0fVxuXG5cdGdldEJhc2ljRm9udHMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiQXJpYWxcIixcblx0XHRcdFwiQXJpYWwgTmFycm93XCIsXG5cdFx0XHRcIkFyaWFsIEJsYWNrXCIsXG5cdFx0XHRcIkNvdXJpZXIgTmV3XCIsXG5cdFx0XHRcIkdlb3JnaWFcIixcblx0XHRcdFwiTHVjaWRhIENvbnNvbGVcIixcblx0XHRcdFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLFxuXHRcdFx0XCJUYWhvbWFcIixcblx0XHRcdFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRcIlZlcmRhbmFcIlxuXHRcdF1cblx0fVxuXG5cdG9uV3JhcHBlckNsaWNrKCkge1xuXHRcdHZhciBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHRcdG5ld1N0YXRlLmlzT3B0aW9uc1Zpc2libGUgPSAhbmV3U3RhdGUuaXNPcHRpb25zVmlzaWJsZTtcblx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0fVxuXG5cdG9uT3B0aW9uQ2xpY2soZSwgZm9udCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShmb250KTtcblxuXHRcdHZhciBzZWxlY3RlZEZvbnQgPSB0aGlzLnByb3BzLnZhbHVlIHx8IGZvbnQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aXNPcHRpb25zVmlzaWJsZTogZmFsc2UsIHNlbGVjdGVkRm9udDogc2VsZWN0ZWRGb250fSk7XG5cdH1cblxuXHRvbk9wdGlvbk1vdXNlRG93bihlLCBrZXkpIHtcblx0XHQvLyBNYXRlcmlhbCBVSSByaXBwbGUgZWZmZWN0XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRcdFx0dGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0XHR4UG9zID0gZS5wYWdlWCAtIHRhcmdldE9mZnNldC5sZWZ0LFxuXHRcdFx0XHR5UG9zID0gZS5wYWdlWSAtIHRhcmdldE9mZnNldC50b3A7XG5cblx0XHRkaXYuY2xhc3NMaXN0LmFkZCgncmlwcGxlLWVmZmVjdCcpO1xuXHRcdGRpdi5zdHlsZS50b3AgPSBwYXJzZUludCh5UG9zIC0gdGFyZ2V0T2Zmc2V0LmhlaWdodCAvIDIpICsgXCJweFwiO1xuXHRcdGRpdi5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQoeFBvcyAtIHRhcmdldE9mZnNldC5oZWlnaHQpICsgXCJweFwiXG5cblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRhcmdldC5yZW1vdmVDaGlsZChkaXYpO1xuXHRcdH0sIDUwMCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gR2V0IGZvbnRzIGZyb20gcHJvcHMgb3IgbG9jYWwgc3RhdGVcblx0XHR2YXIgZm9udHMgPSB0aGlzLnByb3BzLmZvbnRzIHx8IHRoaXMuc3RhdGUuZm9udHM7XG5cblx0XHQvLyBHZXQgc2VsZWN0IGZvbnQgKHZhbHVlKSBmcm9tIHByb3BzIG9yIGxvY2FsIHN0YXRlIGlmIHByb3BzIG5vdCBnaXZlblxuXHRcdHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQ7XG5cblx0XHQvLyBHZXQgZm9udCBhY3RpdmUgY29sb3IgZnJvbSBwcm9wcyBvciBkZWZhdWx0XG5cdFx0dmFyIGFjdGl2ZUNvbG9yID0gdGhpcy5wcm9wcy5hY3RpdmVDb2xvciB8fCBcIiM2NEI1RjZcIjtcblxuXHRcdC8vIFByZXZpZXcgZm9udHMgZmxhZyBmcm9tIHByb3BzIG9yIGRlZmF1bHQgdG8gdHJ1ZVxuXHRcdHZhciBwcmV2aWV3cyA9ICh0eXBlb2YgdGhpcy5wcm9wcy5wcmV2aWV3cyA9PT0gXCJ1bmRlZmluZWRcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRydWUgOiB0aGlzLnByb3BzLnByZXZpZXdzKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlclwiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuXG5cdFx0XHRcdHsvKiBXcmFwcGVyICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyXCIgb25DbGljaz17dGhpcy5vbldyYXBwZXJDbGlja30+XG5cblx0XHRcdFx0XHR7LyogRmxvYXRpbmcgbGFiZWwgdGV4dCAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQgPT09IFwiXCIgPyBcIlJlYWN0Rm9udFBpY2tlcl9MYWJlbFwiIDogXCJSZWFjdEZvbnRQaWNrZXJfTGFiZWxGbG9hdFwifT57bGFiZWx9PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogU2VsZWN0ZWQgb3B0aW9uICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX1NlbGVjdGVkT3B0aW9uXCI+XG5cdFx0XHRcdFx0XHR7dmFsdWV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogRG93bmRvd24gYnV0dG9uICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX0J1dHRvblwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qIE9wdGlvbnMgbGlzdCAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc09wdGlvbnNWaXNpYmxlID8gXCJSZWFjdEZvbnRQaWNrZXJfT3B0aW9uc1wiIDogXCJSZWFjdEZvbnRQaWNrZXJfT3B0aW9uc0hpZGRlblwifT5cblx0XHRcdFx0XHRcdHtmb250cy5tYXAoKG4sIGkpID0+IHtcblxuXHRcdFx0XHRcdFx0XHR2YXIgc3R5bGUgPSB7fTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQgPT0gaSlcblx0XHRcdFx0XHRcdFx0XHRzdHlsZS5jb2xvciA9IGFjdGl2ZUNvbG9yO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChwcmV2aWV3cylcblx0XHRcdFx0XHRcdFx0XHRzdHlsZS5mb250RmFtaWx5ID0gbjtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX09wdGlvbiByaXBwbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9e3N0eWxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQga2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25Nb3VzZURvd249eyhlKSA9PiB0aGlzLm9uT3B0aW9uTW91c2VEb3duKGUsIGkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25DbGljaz17KGUpID0+IHRoaXMub25PcHRpb25DbGljayhlLCBuKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7bn1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuRm9udFBpY2tlci5wcm9wVHlwZXMgPSB7XG5cdGZvbnRzOiBQcm9wVHlwZXMuYXJyYXksXG5cdGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRwcmV2aWV3czogUHJvcFR5cGVzLmJvb2wsXG5cdGFjdGl2ZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb250UGlja2VyO1xuIl19
