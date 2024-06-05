import { useEffect, useState } from "react";
import UseUser from "../../CustomHook/UseUser";


function Libarypage(){
    const{getToken}=UseUser();

    const [ favSongList, setFavSongList] = useState([]);
    console.log(favSongList, " favSongList libriary");

    useEffect(()=>{
        async function getFavList(){
            const url = "https://academics.newtonschool.co/api/v1/music/favorites/like";
            const myHeaders = new Headers();
            myHeaders.append("projectID", "v6vl3jr9l35a");
            myHeaders.append("Authorization", `Bearer ${getToken} `);
            myHeaders.append("Content-Type", "application/json");
            

            const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
            };

            const responce = await fetch(url, requestOptions);
            const data = await responce.json();
            const songs = data.data.songs;
            setFavSongList(songs);
        }
        getFavList();
    },[])

    return(
        <>
            <h1>Libary page</h1>
            {favSongList.map(item=>{
                const {_id, title} =item;

                return(
                    <div>
                        {title}-{_id}
                    </div>
                )
            })}
        </>
    )
}

export default Libarypage;