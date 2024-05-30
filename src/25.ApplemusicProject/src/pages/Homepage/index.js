import { useEffect, useState } from "react";
import Loading from "../../component/CommonUI/Loader/Loading";


function Homepage(){
    const [MusicList, setMusicList] =useState([]);
    const [isLoading , setIsLoading] =useState(false);
    console.log(MusicList, "musiclist");
    
    useEffect(()=>{
        async function fechSong(){
            setIsLoading(true);
            const url = "https://academics.newtonschool.co/api/v1/music/song";
            const myHeaders = new Headers();
            myHeaders.append("projectID", "v6vl3jr9l35a");
        
        
            const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
            };
        
            const response = await fetch(url, requestOptions);
            const result = await response.json();
            const data = result.data;
            
            setMusicList(data);
            
        }
        try{
            fechSong();
        }catch(error){

        }finally{
            setIsLoading(false);
        }
    },[])
    return( 
        <>
            <h1>Homepage</h1>
            {isLoading ? (
            <div><Loading /></div>
         ) : (
            <section>
                {MusicList.map((music, index) => {
                    const { title } = music;
                    return <div key={index}>{title}</div>;
                })}
            </section>
             )}
        </>
    )
}

export default Homepage;