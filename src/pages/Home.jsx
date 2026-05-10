import { useEffect, useState } from "react";
import getSongs  from "../services/songService.js";
import SongCard from "../components/SongCard";
import '../styles/home.css';

function Home() {

    const [songs, setSongs] = useState([]);
    const [page_no, setPageNo] = useState(0);
    const [total_page, setTotalPage] = useState(0);

    useEffect(() => {

        async function fetchSongs() {

            try {

                const data = await getSongs(page_no, 10);

                setSongs(data["content"]);
                setTotalPage(data["totalPages"]);

            } catch (error) {

                console.log(error);
            }
        }

        fetchSongs();

    }, [page_no]);

    function handleNextPage(){
        if (page_no<total_page-1){
            setPageNo(page_no+1);
        }
    }

    function handlePrevPage(){
        if (page_no>0){
            setPageNo(page_no-1);
        }
    }

    return (

        <div className="home-container">

            <div className="songs-grid">
                {
                    songs.map((song) => (
                        <SongCard
                            key={song["songId"]}
                            song={song}
                        />
                    ))
                }
            </div>

            <div className="page_no_container">
                <button onClick={handlePrevPage}>Prev</button>    
                <p>{page_no}</p>
                <button onClick={handleNextPage}>Next</button>
            </div>

        </div>
    );
}

export default Home;