import React from 'react';

const AudioPlayerContext = React.createContext({
    activePlayer: null,
    setActivePlayer: () => {},
  });
  
  export default AudioPlayerContext;