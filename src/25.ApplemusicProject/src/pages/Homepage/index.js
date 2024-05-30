import { useEffect, useState } from "react";
import Loading from "../../component/CommonUI/Loader/Loading";
import MusicPlayer from "../../component/Music/MusicPlayer";


function Homepage(){
    const [MusicList, setMusicList] =useState([]);
    const [isLoading , setIsLoading] =useState(false);

    const [seclectedMusic, setSeclectedMusic] =useState({
        _id:"",
        title:"",
        audio_url:"",
        thumbnail:""
    });
    

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
                {MusicList.map((music) => {
                    const { title ,_id, audio_url, thumbnail} = music;
                    return <div onClick={()=>setSeclectedMusic({
                        _id,
                        title,
                        audio_url,
                        thumbnail,
                    })}
                    >
                        {title} -{_id}
                    </div>;
                })}
            </section>
             )}
             {seclectedMusic && 
             <MusicPlayer 
             _id={seclectedMusic._id} 
             title={seclectedMusic.title} 
             audio_url={seclectedMusic.audio_url} 
             thumbnail={seclectedMusic.thumbnail} 
             />}
        </>
    )
}

export default Homepage;