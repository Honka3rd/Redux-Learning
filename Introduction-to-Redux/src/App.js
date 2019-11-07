import React, { Component } from "react";
import SongList from "./components/SongList";

class Song extends Component {
	render() {
		return (
			<div style={{display:'inline'}}>
				<SongList />
			</div>
		);
	}
}

export default Song;
