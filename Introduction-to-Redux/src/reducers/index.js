import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: "破月",
			author: "Alice"
		},
		{
			title: "Rising hope",
			author: "Lisa"
		},
		{
			title: "绯色月下",
			author: "夜月奈乃"
		}
	];
};

const selectSongReducer = (selectedSong = null, action) => {
	// selectedSong plays the same role as react state
	if (action.type === "SELECT_SONG") {
        return action.payload;
    }
    
    return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectSong:selectSongReducer
})