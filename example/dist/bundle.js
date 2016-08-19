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

var ReactFontPicker = (function (_Component) {
	_inherits(ReactFontPicker, _Component);

	function ReactFontPicker(props) {
		_classCallCheck(this, ReactFontPicker);

		_get(Object.getPrototypeOf(ReactFontPicker.prototype), "constructor", this).call(this, props);
		this.getBasicFonts = this.getBasicFonts.bind(this);
		this.onWrapperClick = this.onWrapperClick.bind(this);
		this.onOptionClick = this.onOptionClick.bind(this);

		var fonts = this.props.fonts || this.getBasicFonts();
		var selectedFont = this.props.value || "";

		this.state = {
			isOptionsVisible: false,
			selectedFont: selectedFont,
			fonts: fonts
		};
	}

	_createClass(ReactFontPicker, [{
		key: "componentDidMount",
		value: function componentDidMount() {

			// Check if stylesheet already exists
			for (var i = 0; i < document.styleSheets.length; i++) {

				var styleSheet = document.styleSheets[i];
				var cssRules = styleSheet.rules ? styleSheet.rules : styleSheet.cssRules;

				if (typeof cssRule !== "undefined" && cssRule !== null) {
					for (var j = 0; j < cssRules.length; ++j) {
						if (cssRules[j].selectorText == ".ReactFontPicker") return "";
					}
				}
			}

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

	return ReactFontPicker;
})(_react.Component);

exports["default"] = ReactFontPicker;

ReactFontPicker.propTypes = {
	fonts: _react.PropTypes.array,
	label: _react.PropTypes.string,
	previews: _react.PropTypes.bool,
	activeColor: _react.PropTypes.string,
	value: _react.PropTypes.string,
	onChange: _react.PropTypes.func
};

exports["default"] = ReactFontPicker;
module.exports = exports["default"];
/* Wrapper */ /* Floating label text */ /* Selected option */ /* Downdown button */ /* Options list */

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGFpdG91bml0ZWQvUHJvamVjdHMvcmVhY3QtZm9udC1waWNrZXIvc3JjL1JlYWN0Rm9udFBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBNEMsT0FBTzs7OztJQUU5QixlQUFlO1dBQWYsZUFBZTs7QUFFeEIsVUFGUyxlQUFlLENBRXZCLEtBQUssRUFBRTt3QkFGQyxlQUFlOztBQUdoQyw2QkFIaUIsZUFBZSw2Q0FHMUIsS0FBSyxFQUFFO0FBQ2YsTUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRCxNQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELE1BQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRW5ELE1BQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyRCxNQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7O0FBRTFDLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixtQkFBZ0IsRUFBRSxLQUFLO0FBQ3ZCLGVBQVksRUFBRSxZQUFZO0FBQzFCLFFBQUssRUFBRSxLQUFLO0dBQ1osQ0FBQTtFQUNBOztjQWhCa0IsZUFBZTs7U0FrQmxCLDZCQUFHOzs7QUFHbkIsUUFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUVuRCxRQUFJLFVBQVUsR0FBRyxRQUFR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VUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLOztBQUVwQixXQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O0FBRWYsV0FBSSxNQUFLLEtBQUssQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUMvQixLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQzs7QUFFM0IsV0FBSSxRQUFRLEVBQ1gsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7O0FBRXRCLGNBQ0M7O1VBQUssU0FBUyxFQUFDLCtCQUErQjtBQUMzQyxjQUFLLEVBQUUsS0FBSyxBQUFDO0FBQ2IsWUFBRyxFQUFFLENBQUMsQUFBQztBQUNQLG9CQUFXLEVBQUUsVUFBQyxDQUFDO2lCQUFLLE1BQUssaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUFBLEFBQUM7QUFDakQsZ0JBQU8sRUFBRSxVQUFDLENBQUM7aUJBQUssTUFBSyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUFBLEFBQUM7UUFDMUMsQ0FBQztRQUNHLENBQ0w7T0FDRixDQUFDO01BQ0c7S0FDRDtJQUNELENBQ0w7R0FDRjs7O1FBdFJtQixlQUFlOzs7cUJBQWYsZUFBZTs7QUF5UnBDLGVBQWUsQ0FBQyxTQUFTLEdBQUc7QUFDM0IsTUFBSyxFQUFFLGlCQUFVLEtBQUs7QUFDdEIsTUFBSyxFQUFFLGlCQUFVLE1BQU07QUFDdkIsU0FBUSxFQUFFLGlCQUFVLElBQUk7QUFDeEIsWUFBVyxFQUFFLGlCQUFVLE1BQU07QUFDN0IsTUFBSyxFQUFFLGlCQUFVLE1BQU07QUFDdkIsU0FBUSxFQUFFLGlCQUFVLElBQUk7Q0FDeEIsQ0FBQTs7cUJBRWMsZUFBZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Rm9udFBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5nZXRCYXNpY0ZvbnRzID0gdGhpcy5nZXRCYXNpY0ZvbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbldyYXBwZXJDbGljayA9IHRoaXMub25XcmFwcGVyQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uT3B0aW9uQ2xpY2sgPSB0aGlzLm9uT3B0aW9uQ2xpY2suYmluZCh0aGlzKTtcblxuXHRcdHZhciBmb250cyA9IHRoaXMucHJvcHMuZm9udHMgfHwgdGhpcy5nZXRCYXNpY0ZvbnRzKCk7XG5cdFx0dmFyIHNlbGVjdGVkRm9udCA9IHRoaXMucHJvcHMudmFsdWUgfHwgXCJcIjtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc09wdGlvbnNWaXNpYmxlOiBmYWxzZSxcblx0XHRcdHNlbGVjdGVkRm9udDogc2VsZWN0ZWRGb250LFxuXHRcdFx0Zm9udHM6IGZvbnRzXG5cdFx0fVxuICB9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHQvLyBDaGVjayBpZiBzdHlsZXNoZWV0IGFscmVhZHkgZXhpc3RzXG5cdFx0Zm9yICh2YXIgaT0wOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0dmFyIHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcblx0ICAgIHZhciBjc3NSdWxlcyA9IHN0eWxlU2hlZXQucnVsZXMgPyBzdHlsZVNoZWV0LnJ1bGVzIDogc3R5bGVTaGVldC5jc3NSdWxlcztcblxuXHRcdFx0aWYgKHR5cGVvZiBjc3NSdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIGNzc1J1bGUgIT09IG51bGwpIHtcblx0XHQgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjc3NSdWxlcy5sZW5ndGg7ICsraikge1xuXHRcdCAgICAgICAgaWYoY3NzUnVsZXNbal0uc2VsZWN0b3JUZXh0ID09IFwiLlJlYWN0Rm9udFBpY2tlclwiKSByZXR1cm4gXCJcIjtcblx0ICAgIFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBzdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0XHRzdHlsZXMuaW5uZXJIVE1MID0gYFxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlcjpob3ZlciB7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfTGFiZWwge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGNvbG9yOiAjYTBhMGEwO1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9MYWJlbEZsb2F0IHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdGJvdHRvbTogMjdweDtcblx0XHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfU2VsZWN0ZWRPcHRpb24ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfQnV0dG9uIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0XHRcdGJvcmRlci13aWR0aDogNXB4IDZweCAwIDZweDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGRkZGRkIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9CdXR0b246aG92ZXIge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0XHRcdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNkZGQ7XG5cblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtby10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnNIaWRkZW4ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZGRkO1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tcy10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9PcHRpb24ge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfT3B0aW9uOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRcdH1cblx0XHRcdGRpdi5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlciAucmlwcGxlIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIC5yaXBwbGUtZWZmZWN0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdGFuaW1hdGlvbjogcmlwcGxlLWFuaW1hdGlvbiAxLjhzO1xuXHRcdFx0fVxuXHRcdFx0QGtleWZyYW1lcyByaXBwbGUtYW5pbWF0aW9uIHtcblx0XHRcdFx0ZnJvbSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dG8ge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0YDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc3R5bGVzKTtcblx0fVxuXG5cdGdldEJhc2ljRm9udHMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiQXJpYWxcIixcblx0XHRcdFwiQXJpYWwgTmFycm93XCIsXG5cdFx0XHRcIkFyaWFsIEJsYWNrXCIsXG5cdFx0XHRcIkNvdXJpZXIgTmV3XCIsXG5cdFx0XHRcIkdlb3JnaWFcIixcblx0XHRcdFwiTHVjaWRhIENvbnNvbGVcIixcblx0XHRcdFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLFxuXHRcdFx0XCJUYWhvbWFcIixcblx0XHRcdFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRcIlZlcmRhbmFcIlxuXHRcdF1cblx0fVxuXG5cdG9uV3JhcHBlckNsaWNrKCkge1xuXHRcdHZhciBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHRcdG5ld1N0YXRlLmlzT3B0aW9uc1Zpc2libGUgPSAhbmV3U3RhdGUuaXNPcHRpb25zVmlzaWJsZTtcblx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0fVxuXG5cdG9uT3B0aW9uQ2xpY2soZSwgZm9udCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShmb250KTtcblxuXHRcdHZhciBzZWxlY3RlZEZvbnQgPSB0aGlzLnByb3BzLnZhbHVlIHx8IGZvbnQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aXNPcHRpb25zVmlzaWJsZTogZmFsc2UsIHNlbGVjdGVkRm9udDogc2VsZWN0ZWRGb250fSk7XG5cdH1cblxuXHRvbk9wdGlvbk1vdXNlRG93bihlLCBrZXkpIHtcblx0XHQvLyBNYXRlcmlhbCBVSSByaXBwbGUgZWZmZWN0XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRcdFx0dGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0XHR4UG9zID0gZS5wYWdlWCAtIHRhcmdldE9mZnNldC5sZWZ0LFxuXHRcdFx0XHR5UG9zID0gZS5wYWdlWSAtIHRhcmdldE9mZnNldC50b3A7XG5cblx0XHRkaXYuY2xhc3NMaXN0LmFkZCgncmlwcGxlLWVmZmVjdCcpO1xuXHRcdGRpdi5zdHlsZS50b3AgPSBwYXJzZUludCh5UG9zIC0gdGFyZ2V0T2Zmc2V0LmhlaWdodCAvIDIpICsgXCJweFwiO1xuXHRcdGRpdi5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQoeFBvcyAtIHRhcmdldE9mZnNldC5oZWlnaHQpICsgXCJweFwiXG5cblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRhcmdldC5yZW1vdmVDaGlsZChkaXYpO1xuXHRcdH0sIDUwMCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gR2V0IGZvbnRzIGZyb20gcHJvcHMgb3IgbG9jYWwgc3RhdGVcblx0XHR2YXIgZm9udHMgPSB0aGlzLnByb3BzLmZvbnRzIHx8IHRoaXMuc3RhdGUuZm9udHM7XG5cblx0XHQvLyBHZXQgc2VsZWN0IGZvbnQgKHZhbHVlKSBmcm9tIHByb3BzIG9yIGxvY2FsIHN0YXRlIGlmIHByb3BzIG5vdCBnaXZlblxuXHRcdHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQ7XG5cblx0XHQvLyBHZXQgZm9udCBhY3RpdmUgY29sb3IgZnJvbSBwcm9wcyBvciBkZWZhdWx0XG5cdFx0dmFyIGFjdGl2ZUNvbG9yID0gdGhpcy5wcm9wcy5hY3RpdmVDb2xvciB8fCBcIiM2NEI1RjZcIjtcblxuXHRcdC8vIFByZXZpZXcgZm9udHMgZmxhZyBmcm9tIHByb3BzIG9yIGRlZmF1bHQgdG8gdHJ1ZVxuXHRcdHZhciBwcmV2aWV3cyA9ICh0eXBlb2YgdGhpcy5wcm9wcy5wcmV2aWV3cyA9PT0gXCJ1bmRlZmluZWRcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRydWUgOiB0aGlzLnByb3BzLnByZXZpZXdzKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlclwiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuXG5cdFx0XHRcdHsvKiBXcmFwcGVyICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyXCIgb25DbGljaz17dGhpcy5vbldyYXBwZXJDbGlja30+XG5cblx0XHRcdFx0XHR7LyogRmxvYXRpbmcgbGFiZWwgdGV4dCAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQgPT09IFwiXCIgPyBcIlJlYWN0Rm9udFBpY2tlcl9MYWJlbFwiIDogXCJSZWFjdEZvbnRQaWNrZXJfTGFiZWxGbG9hdFwifT57bGFiZWx9PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogU2VsZWN0ZWQgb3B0aW9uICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX1NlbGVjdGVkT3B0aW9uXCI+XG5cdFx0XHRcdFx0XHR7dmFsdWV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogRG93bmRvd24gYnV0dG9uICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX0J1dHRvblwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qIE9wdGlvbnMgbGlzdCAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc09wdGlvbnNWaXNpYmxlID8gXCJSZWFjdEZvbnRQaWNrZXJfT3B0aW9uc1wiIDogXCJSZWFjdEZvbnRQaWNrZXJfT3B0aW9uc0hpZGRlblwifT5cblx0XHRcdFx0XHRcdHtmb250cy5tYXAoKG4sIGkpID0+IHtcblxuXHRcdFx0XHRcdFx0XHR2YXIgc3R5bGUgPSB7fTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZvbnQgPT0gaSlcblx0XHRcdFx0XHRcdFx0XHRzdHlsZS5jb2xvciA9IGFjdGl2ZUNvbG9yO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChwcmV2aWV3cylcblx0XHRcdFx0XHRcdFx0XHRzdHlsZS5mb250RmFtaWx5ID0gbjtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX09wdGlvbiByaXBwbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9e3N0eWxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQga2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25Nb3VzZURvd249eyhlKSA9PiB0aGlzLm9uT3B0aW9uTW91c2VEb3duKGUsIGkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25DbGljaz17KGUpID0+IHRoaXMub25PcHRpb25DbGljayhlLCBuKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7bn1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuUmVhY3RGb250UGlja2VyLnByb3BUeXBlcyA9IHtcblx0Zm9udHM6IFByb3BUeXBlcy5hcnJheSxcblx0bGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHByZXZpZXdzOiBQcm9wVHlwZXMuYm9vbCxcblx0YWN0aXZlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Rm9udFBpY2tlcjtcbiJdfQ==
