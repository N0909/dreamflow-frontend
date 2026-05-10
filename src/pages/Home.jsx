import { useEffect, useState } from "react";
import getSongs from "../services/songService.js";
import SongCard from "../components/SongCard";
import "../styles/home.css";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

function Home() {
  const [songs, setSongs] = useState([]);
  const [page_no, setPageNo] = useState(0);
  const [total_page, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSongs() {
      try {
        setLoading(true);

        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        setSongs([]);

        const data = await getSongs(page_no, 10);

        setSongs(data["content"]);

        setTotalPage(data["totalPages"]);

      } catch (error) {
        const errorMessage =
          error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong";

        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchSongs();
  }, [page_no]);

  function handleNextPage() {
    if (loading) return;

    if (page_no < total_page - 1) {
      setPageNo((prev) => prev + 1);
    }
  }

  function handlePrevPage() {
    if (loading) return;

    if (page_no > 0) {
      setPageNo((prev) => prev - 1);
    }
  }

  return (
    <div className="home-container">

      {
            loading && <Loader />
      }

      <div className="songs-grid">
        {songs.map((song) => (
          <SongCard key={song["songId"]} song={song} />
        ))}
      </div>

      <div className="page_no_container">
        <button onClick={handlePrevPage} disabled={loading || page_no === 0}>
          Prev
        </button>
        <p>{page_no+1}</p>
        <button
          onClick={handleNextPage}
          disabled={loading || page_no === total_page - 1}
        >
          Next
        </button>
      </div>
    </div>

  );
}

export default Home;
