function SongCard({ song }) {
  function formatDuration(durationMs) {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="song-card">
      <h3>{song["songName"]}</h3>
      <p>{formatDuration(song["durationMs"])}</p>
    </div>
  );
}

export default SongCard;
