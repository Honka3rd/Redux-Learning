import React, { Component } from "react";
import { connect } from "react-redux";
import { Message, Label } from "semantic-ui-react";

class SongDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.song);
		return (
			<div>
				<Message color='purple'>
					<Message.Header>Title:</Message.Header>
					<Message.Header>
						{this.props.song ? this.props.song.title : "Not seleted"}
					</Message.Header>
					<div>Author:</div>
					<p>{this.props.song ? this.props.song.author : "No infomation"}</p>
				</Message>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("Detail", state.selectSong);
	return { song: state.selectSong };
};

export default connect(mapStateToProps)(SongDetail);
