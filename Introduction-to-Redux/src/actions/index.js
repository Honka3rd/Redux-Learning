// export a named property
export const selectSong =(song)=>{
    return {
        type:'SELECT_SONG',
        payload:song
    }
}