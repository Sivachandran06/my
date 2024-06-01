import { useEffect, useState } from "react";
import Loading from "../../component/CommonUI/Loader/Loading";
import MusicPlayer from "../../component/Music/MusicPlayer";

function Homepage() {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMusic, setSelectedMusic] = useState({
        _id: "",
        title: "",
        audio_url: "",
        thumbnail: ""
    });

    useEffect(() => {
        async function fetchSong() {
            setIsLoading(true);
            const url = "https://academics.newtonschool.co/api/v1/music/song";
            const myHeaders = new Headers();
            myHeaders.append("projectID", "v6vl3jr9l35a");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            try {
                const response = await fetch(url, requestOptions);
                const result = await response.json();
                const data = result.data;
                setMusicList(data);
            } catch (error) {
                console.error("Error fetching music list:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchSong();
    }, []);

    return (
        <>
            <h1>Homepage</h1>
            {isLoading ? (
                <div><Loading /></div>
            ) : (
                <section>
                    {musicList.map((music) => {
                        const { title, _id, audio_url, thumbnail } = music;
                        return (
                            <div key={_id} onClick={() => setSelectedMusic({
                                _id,
                                title,
                                audio_url,
                                thumbnail,
                            })}>
                                {title} - {_id}
                            </div>
                        );
                    })}
                </section>
            )}
            {selectedMusic._id && (
                <MusicPlayer
                    _id={selectedMusic._id}
                    title={selectedMusic.title}
                    audio_url={selectedMusic.audio_url}
                    thumbnail={selectedMusic.thumbnail}
                />
            )}
        </>
    );
}

export default Homepage;
