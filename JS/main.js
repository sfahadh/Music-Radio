/*global $*/
/*global audio*/

let radio = {
  stations: [
    {
    name: 'Hip-Hop Hallelujah',
    genre: 'Rap',
    songs: [
      {
        title: 'Middle Child',
        artist: 'J Cole',
        art: 'Media/JCole-MiddleChild.jpeg',
        music: 'Media/JCole-MiddleChild.mp3',
        album: 'Middle Child'
      },
      {
        title: 'Come Get Her',
        artist: 'Rae Sremmurd',
        art: 'Media/RaeSremmurd-ComeGetHer.jpg',
        music: 'Media/RaeSremmurd-ComeGetHer.mp3',
        album: 'Sremm Life'
      },
      {
        title: 'DNA',
        artist: 'Kendrick Lamar',
        art: 'Media/KendrickLamar-DNA.jpg',
        music: 'Media/KendrickLamar-DNA.mp3',
        album: 'DAMN.'
      },
      {
        title: 'Sunflower',
        artist: 'Post Malone ft Swae Lee',
        art: 'Media/PostMalone-Sunflower.jpg',
        music: 'Media/PostMalone-Sunflower.mp3',
        album: 'Spider-man: Into the Spider-Verse'
      }
    ]
  },
  {
    name: 'BleepBloop',
    genre: 'House',
    songs: [
      {
        title: 'Wake Me Up',
        artist: 'Avicii',
        art: 'Media/Avicii-WakeMeUp.jpg',
        music: 'Media/Avicii-WakeMeUp.mp3',
        album: 'True'
      },
      {
        title: 'Animals',
        artist: 'Martin Garix',
        art: 'Media/MartinGarix-Animals.jpg',
        music: 'Media/MartinGarix-Animals.mp3',
        album: 'Animals (Botnek Edit)'
      }
    ]
  },
  {
    name: 'Head Bangers Ball',
    genre: 'Rock',
    songs: [
      {
        title: 'Never Too Late',
        artist: 'Three Days Grace',
        art: 'Media/ThreeDaysGrace-NeverTooLate.jpg',
        media: 'Media/ThreeDaysGrace-NeverTooLate.mp3',
        album: 'One-X'
      },
      {
        title: 'In The End',
        artist: 'Linkin Park',
        art: 'Media/LinkinPark-InTheEnd.jpg',
        music: 'Media/LinkinPark-InTheEnd.mp3',
        album: 'Hybrid Theory'
      },
      {
        title: 'Pompeii',
        artist: 'Bastille',
        art: 'Media/Bastille-Pompeii.jpg',
        music: 'Media/Bastille-Pompeii .mp3',
        album: 'Bad Blood'
      },
    ]
  },
  {
    name: 'A Nice Morning For A Cup Of Tea',
    genre: 'Pop',
    songs: [
      {
        title: 'Dark Horse',
        artist: 'Katy Perry',
        art: 'Media/KatyPerry-DarkHorse.jpg',
        music: 'Media/KatyPerry-DarkHorse.mp3',
        album: 'Prism'
      },
      {
        title: 'I\'m Not The Only One',
        artist: 'Sam Smith',
        art: 'Media/SamSmith-ImNotTheOnlyOne.png',
        music: 'Media/SamSmith-ImNotTheOnlyOne.mp3',
        album: 'In the Lonely Hour'
      },
      {
        title: 'Senorita',
        artist: 'Justin Timberlake',
        art: 'Media/JustinTimberlake-Senorita.png',
        music: 'Media/JustinTimberlake-Senorita.mp3',
        album: 'Justified'
      }
    ]
  },
  {
    name: 'Tipsy Daisy Love',
    genre: 'RnB',
    songs: [
      {
        title: 'Umbrella',
        artist: 'Rihanna',
        art: 'Media/Rihanna-Umbrella.jpg',
        music: 'Media/Rihanna-Umbrella.mp3',
        album: 'Good Girl Gone Bad'
      },
      {
        title: 'Treasure',
        artist: 'Bruno Mars',
        art: 'Media/BrunoMars-Treasure.jpg',
        music: 'Media/BrunoMars-Treasure.mp3',
        album: 'Unorthodox Jukebox'
    }
    ],

  }],
  change: function()
      {
          let station = this.stations[Math.floor(Math.random() * this.stations.length)];
          let song = station.songs[Math.floor(Math.random() * station.songs.length)];
          this.currentStation = station;
          this.currentSong = song;
          $("#displaySong").html(song.title);
          $("#displayArtist").html(song.artist);
          $("#displayGenre").html(station.genre);
          $('#playSong').attr('src', song.music);
          $('#albumArt').attr('src', song.art);
          $('#displayAlbum').html(song.album);
          $('#displayStation').html(station.name);
      }
    };
    
    
    
    
$( "#randomButton" ).click(function() {
  radio.change();
});


let audio = $('#playSong')[0];

$( "#pauseButton" ).click(function(){
  if (audio.paused) {
    console.log("play")
    audio.play();
  } 
  else {
    audio.pause();
    console.log("pause")
  }
});
