import { useState } from "react";
import MusicItem from "./MusicItem";
import AudioPlayerContext from "../Context/AudioPlayerContext";
import { songs } from "../data/dataMusic";
import like from "../assets/img/like1.gif";
import confetti from "canvas-confetti";


const Music = () => {
  const [activePlayer, setActivePlayer] = useState(null);
  // Objeto de estados de "me gusta"
  const [likes, setLikes] = useState({});
  // Contador de "me gusta"
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = (songId) => {
    // Comprobar si la canción ya ha sido "gustada"
    if (likes[songId]) {
      // Si es así, disminuir el contador y actualizar el estado de "me gusta"
      setLikeCount(likeCount - 1);
      setLikes({ ...likes, [songId]: false });
    } else {
      // Si no, aumentar el contador, lanzar el confeti y actualizar el estado de "me gusta"
      setLikeCount(likeCount + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setLikes({ ...likes, [songId]: true });
    }
  };

  return (
    <AudioPlayerContext.Provider value={{ activePlayer, setActivePlayer }}>
      <div className="music">
        {songs.map((song) => (
          <MusicItem key={song.id} {...song} handleLike={() => handleLike(song.id)} />
        ))}
        <div className="contenedor_likes">
          <img src={like} alt="like" />
          <div className="like">
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
    </AudioPlayerContext.Provider>
  );
};

export default Music;
