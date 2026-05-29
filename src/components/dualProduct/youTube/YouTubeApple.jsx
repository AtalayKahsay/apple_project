import { useState, useEffect } from 'react'
import './YouTube.css'

function YouTubeApple() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet,id&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=${API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        setError("Failed to fetch videos");
      }
    }

    fetchVideos();
  }, []);
  // console.log(videos);

  return (
    <section className="yt-section">
      {error && <p className="yt-error">{error}</p>}
      <h2 className="yt-heading">Latest Apple Videos From YouTube</h2>
      <div className="yt-grid">
        {videos?.map((video, i) => {
          const vidId = video.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          return (
            <div key={i} className="yt-card">
              <a href={vidLink} target="_blank" rel="noreferrer">
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="yt-thumbnail" />
              </a>
              <div className="yt-info">
                <a href={vidLink} target="_blank" rel="noreferrer" className="yt-title">
                  {video.snippet.title}
                </a>
                <p className="yt-description">{video.snippet.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default YouTubeApple