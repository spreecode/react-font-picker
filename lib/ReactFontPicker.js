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
		this.onRipple = this.onRipple.bind(this);

		this.state = {
			isOptionsVisible: false,
			selectedFont: this.props.value
		};
	}

	_createClass(FontPicker, [{
		key: "onWrapperClick",
		value: function onWrapperClick() {
			this.setState({ isOptionsVisible: !this.state.isOptionsVisible });
		}
	}, {
		key: "onOptionClick",
		value: function onOptionClick(e, font) {
			e.stopPropagation();

			if (this.state.isOptionsVisible == false) return;

			if (typeof this.props.onChange == "function") this.props.onChange(font);

			this.setState({ isOptionsVisible: false, selectedFont: font });
		}
	}, {
		key: "onRipple",
		value: function onRipple(e) {
			// Material UI ripple effect
			// e.preventDefault();
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
			var className = _props.className;

			// Get select font (value) from props or local state if props not given
			var value = this.props.value || this.state.selectedFont;

			return _react2["default"].createElement(
				"div",
				{ className: "ReactFontPicker " + className },
				_react2["default"].createElement(
					"div",
					{ className: "ReactFontPicker_Wrapper", onClick: this.onWrapperClick },
					_react2["default"].createElement(
						"div",
						{ className: value === "" ? "ReactFontPicker_Label" : "ReactFontPicker_LabelFloat" },
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
										return _this.onRipple(e);
									},
									onMouseUp: function (e) {
										return _this.onOptionClick(e, n);
									},
									onClick: function (e) {
										return _this.onOptionClick(e, n);
									}
								},
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
	onChange: _react.PropTypes.func,
	className: _react.PropTypes.string
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