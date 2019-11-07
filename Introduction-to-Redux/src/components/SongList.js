import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import SongDetail from "./SongDetail";

// import a named export, no need to specify filename if filename is index
import { selectSong } from "../actions";

class SongList extends Component {
	constructor(props) {
		super(props);
    }

	render() {
		return (
			<div className='ui container grid'>
				<div className='ui row'>
					<div className='column eight wide'>
						<List songs={this.props.songs} selectSong={this.props.selectSong}/>
					</div>
                    <div className='column eight wide'>
                        <SongDetail/>
                    </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    console.log('update', state);
	return state;
};

const conn = connect(
    mapStateToProps,
	{
		selectSong: selectSong 
	}
);

export default conn(SongList);
