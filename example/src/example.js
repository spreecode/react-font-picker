var React = require('react');
var ReactDOM = require('react-dom');
var ReactFontPicker = require('react-font-picker');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactFontPicker />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
