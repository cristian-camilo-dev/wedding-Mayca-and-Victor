import { useState, useEffect } from "react";
import ReactPropTypes from "prop-types";
import { Icon } from "@iconify/react";

const MusicItem = ({ id, imageSrc, title, artist, audioSrc }) => {
  const [audio] = useState(new Audio(audioSrc));
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };

  }, [isPlaying, audio]);
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
          color="white"
        />
        <Icon icon="mdi:bookmark-music-outline" width={35} color="white" />
        <Icon icon="mdi:dots-horizontal" width={35} color="white" />
      </div>
    </div>
  );
};

MusicItem.propTypes = {
  id: ReactPropTypes.string.isRequired,
  imageSrc: ReactPropTypes.string.isRequired,
  title: ReactPropTypes.string.isRequired,
  artist: ReactPropTypes.string.isRequired,
  audioSrc: ReactPropTypes.string.isRequired,
};

export default MusicItem;
