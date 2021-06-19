const play = document.querySelector(".main-button");
const musicFiles = document.querySelector("audio");
const image = document.querySelector("img");
const pauseBtn = document.querySelector("fa-pause");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const previousBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let progress = document.querySelector(".progress");
let current_time = document.querySelector("#current-time");
let Total_duration = document.querySelector("#duration");
const progressBar = document.querySelector('.progress-div')
 
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
  {
    name: "astronaut",
    title: "astronaut",
    image: "astronaut",
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
  musicFiles.src = "Music/" + songs.name + ".mp3";
  image.src = "Img/" + songs.image + ".png";
};

songIndex = 0;

// loadSongs(songs);

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

//version2
//progress Js work
musicFiles.addEventListener("timeupdate", (event) => {
  // console.log(event);
  const { currentTime, duration } = event.srcElement;
  // console.log(currentTime);
  // console.log(duration);

  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;

  // music duration update

  let min_duration = Math.floor(duration/60);
  let sec_duration =Math.floor(duration%60);
 

  if(duration){
    Total_duration.innerHTML = `${min_duration}:${sec_duration}`;
  }
  
  // Current duration update

  let min_currentTime = Math.floor(currentTime/60);
  let sec_currentTime =Math.floor(currentTime%60);
  
  if(sec_currentTime < 10){
    sec_currentTime = `0${sec_currentTime}`
  }

  if(currentTime){
   current_time.innerHTML = `${min_currentTime}:${sec_currentTime}`;
  }

  //if song end play the next music 2ways
  // if( currentTime == duration){
  //   nextSong();
  // }
  
});
// progress bar functionality
progressBar.addEventListener('click', (event) =>{
  const {duration}= musicFiles;
  let moveProgress = (event.offsetX/event.srcElement.clientWidth)*duration;
  musicFiles.currentTime= moveProgress
  
  
   
  } )



musicFiles.addEventListener('ended', nextSong);

nextBtn.addEventListener("click", nextSong);
previousBtn.addEventListener("click", prevSong);
// let next = loadSongs(songs);
// for(next =0; next<=3 ; next++ ){
//     songs[next];

// }
