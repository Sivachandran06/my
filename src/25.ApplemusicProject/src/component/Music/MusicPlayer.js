
import React, { useContext, useState } from "react";
import UseUser from "../../CustomHook/UseUser";



function MusicPlayer(props){
    const{_id,title, audio_url, thumbnail } =props;
    const ContextData = UseUser();
    const {getToken} = useContext(UseUser);

    const IsfavSong = true;
    return(
        <>
        <div className="music_player" id={_id}>
            <img className="music_palyer_img"src={thumbnail}/>
            <div className="music_title">{title}</div>
                <audio controls src={audio_url}></audio>

                
                {getToken && IsfavSong ? (
                <i className="fa-regular fa-heart"></i>
            ) : (
                <i className="fa-solid fa-heart"></i>
            )}
            </div>

        </>
    )
}
export default MusicPlayer;