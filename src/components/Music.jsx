import MusicItem from "./MusicItem";
import boda2 from "../assets/img/boda2.jpeg";
import boda3 from "../assets/img/boda3.jpg";
import boda4 from "../assets/img/boda4.jpg";
import boda5 from "../assets/img/boda5.jpeg";
import boda6 from "../assets/img/boda6.jpeg";
import boda7 from "../assets/img/boda7.jpeg";
import victor from "../assets/audio/victor.mp3";
import miLuz from "../assets/audio/RVFV_Mi_Luz.mp3";
import tigini from "/src/assets/audio/TIGINI.mp3";
import nolasco from "/src/assets/audio/PEQUEÑITAS.mp3";
import demarco from "../assets/audio/Demarco.mp3";
import borbujas from "/src/assets/audio/Burbujas.mp3";

const Music = () => {
  const songs = [
    // tus datos de canciones aquí
    {
      id: 1,
      imageSrc: boda2,
      title: "Nuestra canción",
      artist: "Victor Manuel ST",
      audioSrc: victor,
        
    },
    {
      id: 2,
      imageSrc: boda6,
      title: "Mi Luz",
      artist: "Rvfv, Reas B",
      audioSrc: miLuz, 
    },
    {
      id: 3,
      imageSrc: boda5,
      title: "Tigini",
      artist: "Rvfv, Kikimoteleba",
      audioSrc: tigini ,
    },
    {
      id: 4,
      imageSrc: boda7,
      title: "las cosas  pequeñitas",
      artist: "Nolasco",
      audioSrc: nolasco,
    },
    {
      id: 5,
      imageSrc: boda4,
      title: "Como te imagine",
      artist: "Demarco Flamenco",
      audioSrc: demarco,
    },
    {
      id: 6,
      imageSrc: boda3,
      title: "Borbuja de amor",
      artist: "Niña Pastori",
      audioSrc: borbujas,
    },
  ];

  return (
    <div className="music">
      {songs.map((song) => (
        <MusicItem key={song.id} {...song} />
      ))}
    </div>
  );
};

export default Music;
