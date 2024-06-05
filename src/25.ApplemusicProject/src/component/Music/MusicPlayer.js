
import React, { useContext, useState } from "react";
import UseUser from "../../CustomHook/UseUser";



function MusicPlayer(props){
    const{_id,title, audio_url, thumbnail ,isFav: isFaveFromAPI } =props;
    const getToken = useContext(UseUser);

    const[isFav , setIsFav] = useState(isFaveFromAPI);

    async function MakingFav() {
        const url ="https://academics.newtonschool.co/api/v1/music/favorites/like";
        const myHeaders = new Headers();
        myHeaders.append("projectID", "v6vl3jr9l35a");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${getToken} `);


        console.log(isFav);
        const raw = JSON.stringify({
        songId: _id,
        });

        const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        const response = await fetch( url, requestOptions);
        const data = await response.json();
        console.log(data, "fav data");

    }
    return(
        <>
        <div className="music_player" id={_id}>
            <img className="music_palyer_img"src={thumbnail}/>
            <div className="music_title">{title}</div>
                <audio controls src={audio_url}></audio>

                
                {getToken || 
                (!isFav ? (
                <i style={{cursor:"pointer"}} 
                onClick={()=>{
                    MakingFav ();
                    setIsFav(true);
                 }} className="fa-regular fa-heart"></i>
            ) : (
                <i style={{cursor:"pointer"}} 
                onClick={()=>{
                    MakingFav();
                    setIsFav(false);
                }} className="fa-solid fa-heart"></i>
            ))}
            </div>

        </>
    )
}
export default MusicPlayer;