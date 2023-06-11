import {  useEffect , useRef, useContext ,useState } from "react";
import ReactPropTypes from "prop-types";
import  AudioPlayerContext  from '../Context/AudioPlayerContext';
import { Icon } from "@iconify/react";




const MusicItem = ({ id, imageSrc, title, artist, audioSrc, handleLike }) => {
  const audioRef = useRef(new Audio(audioSrc));
  const { activePlayer, setActivePlayer } = useContext(AudioPlayerContext);
  const [liked, setLiked] = useState(false); 

  const togglePlayPause = () => {
    if (activePlayer === id) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActivePlayer(null);
    } else {
      audioRef.current.play();
      setActivePlayer(id);
    }
  };

  useEffect(() => {
    if (activePlayer !== id && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [activePlayer, id]);


  const handleLikeClick = () => {
    handleLike();
    setLiked(!liked);
  };


  return (
    <div className="grid-2-small">
      <div className="music__artista">
        <div className="music_img">
          <img src={imageSrc} alt={title} className="music__img" />
        </div>
        <div className="music__info" onClick={togglePlayPause}>
          <div className="music__play" >
            <h2  className="music__title">{title} </h2>
            <p className="music__artista">{artist}</p>
            <audio
              src={audioSrc}
              id={`${id}_play`}
              className={`${id}_play`}
            ></audio>
          </div>
        </div>
      </div>
      <div className="music__icon">
        <Icon
          icon="mdi:heart"
          className="icon_heart"
          width={35}
          color={liked ? 'red' : 'white'}
          onClick={handleLikeClick}
        />
        <Icon icon="mdi:bookmark-music-outline" width={35} color="white" />
        <Icon icon="mdi:dots-horizontal" width={35} color="white" />
      </div>
      
    </div>
  );
};

MusicItem.propTypes = {
  id: ReactPropTypes.number.isRequired,
  imageSrc: ReactPropTypes.string.isRequired,
  title: ReactPropTypes.string.isRequired,
  artist: ReactPropTypes.string.isRequired,
  audioSrc: ReactPropTypes.string.isRequired,
  handleLike: ReactPropTypes.func.isRequired,
};

export default MusicItem;
