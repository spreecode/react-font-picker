var React = require('react');
var ReactDOM = require('react-dom');
var FontPicker = require('react-font-picker');

var App = React.createClass({

	onFontChange: function(font){
		console.log(font)
		this.setState({font: font});
	},

	getInitialState: function(){
		return {font: "Arial"}
	},

	render: function(){

		return (
			<div>
				<FontPicker
					label="Select Font"
					value={this.state.font}
					previews={true}
					onChange={this.onFontChange}
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
