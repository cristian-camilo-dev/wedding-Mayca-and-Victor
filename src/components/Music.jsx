import { useState } from "react";
import MusicItem from "./MusicItem";
import AudioPlayerContext from "../Context/AudioPlayerContext";
import { songs } from "../data/dataMusic";
import like from "../assets/img/like.gif";
import confetti from "canvas-confetti";


const Music = () => {
  const [activePlayer, setActivePlayer] = useState(null);
  // Contador de likes
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <AudioPlayerContext.Provider value={{ activePlayer, setActivePlayer }}>
      <div className="music">
        {songs.map((song) => (
          <MusicItem key={song.id} {...song} handleLike={handleLike} />
        ))}
       <div className="contenedor_likes">
          <img src={like} alt="like" />
          <div className="like">
              <p>
              {likes}
              </p>
            </div>
      </div>
      </div>
    </AudioPlayerContext.Provider>
  );
};

export default Music;
