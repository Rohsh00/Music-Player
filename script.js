const play = document.querySelector(".main-button");
const musicFiles = document.querySelector("audio");
const image = document.querySelector("img");
const pauseBtn = document.querySelector("fa-pause");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const previousBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const songs = [
  {
    name: "Deewana Kar Raha Hai - Raaz 3 320Kbps",
    title: "Dewana kar Rha h",
   image: "imran",
  },
  {
    name: "Pehle Pyaar Ka Pehla Gham - Jubin Nautiyal 320 Kbps",
    title: "Teri Sanson",
   image: "jubin",
  },
  {
    name: "Aankhon Aankhon (Bhaag Johnny) Yo Yo Honey Singh 320Kbps",
    title: "Ankhon Ankhon m",
   image: "yoyo",
  },
];

let isPlaying = false;

function playMusic() {
  isPlaying = true;
  musicFiles.play();
  play.classList.replace("fa-play", "fa-pause");
  image.classList.add("anime");
}

function pauseMusic() {
  isPlaying = false;

  musicFiles.pause();
  play.classList.replace("fa-pause", "fa-play");
  image.classList.remove("anime");
}

play.addEventListener("click", () => {
  //   if (isPlaying) {
  //     pauseMusic();
  //   } else {
  //     playMusic();
  //   }

  //with ternary operator

  isPlaying ? pauseMusic() : playMusic();
});

//changing the music data;



const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.image;
  musicFiles.src ="Music/"+songs.name+".mp3" ;
  image.src = "Img/"+songs.image+".png";
};

songIndex = 0;

// loadSongs(songs); 

const nextSong =()=>{
    songIndex = (songIndex + 1) %songs.length;
    loadSongs(songs[songIndex]);
    playMusic()
}
const prevSong =()=>{
    songIndex = (songIndex - 1 + songs.length) %  songs.length;
    loadSongs(songs[songIndex]);
    playMusic()
}


nextBtn.addEventListener('click', nextSong)
previousBtn.addEventListener('click', prevSong)
    // let next = loadSongs(songs);
    // for(next =0; next<=3 ; next++ ){
    //     songs[next];

    // }

