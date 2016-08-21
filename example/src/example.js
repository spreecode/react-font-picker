var React = require('react');
var ReactDOM = require('react-dom');
var FontPicker = require('react-font-picker');

var App = React.createClass({
	render () {
		return (
			<div>
				<FontPicker
					label="Select Font"
					previews={true}
					onChange={(font) => console.log(font)}
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
