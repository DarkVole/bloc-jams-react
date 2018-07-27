
 import React, { Component } from 'react';
 import albumData from './../data/albums.js';
 import PlayerBar from './PlayerBar';




class Album extends Component {
  constructor(props) {
  super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration, 
      isPlaying: false,
      currentVolume: 40,
      isHovering: 0,
      nowHoverSong: null,
      durationPrettyTime: "-:--",
      stringTime: "",
      stringCurrentTime: "",
      stringBlank:  "Hello"
    };



    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
}

   componentDidMount() {
     this.eventListeners = {
       timeupdate: e => {
         this.setState({ currentTime: this.audioElement.currentTime });
       },
       durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       },
       volumechange: e => {
         this.setState({ volume: this.audioElement.volume });
       }       
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
     this.audioElement.addEventListener('volumecontrol', this.eventListeners.volumechange);     
   }

   componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumecontrol', this.eventListeners.volumecontrol);
   }
  

play() {
  this.audioElement.play();
  this.setState({ isPlaying: true });
}


pause() {
  this.audioElement.pause();
  this.setState({ isPlaying: false });
}


  setHoveringSong(song) {
    this.setState({ nowHoverSong: song });
  }

  setNotHoveringSong(song) {
    this.setState({ nowHoverSong: null});
  }



  showButtons(song, index) {
    //console.log("showButtonsCalled")
     if (this.state.nowHoverSong === song || (this.state.isPlaying === false && this.state.nowHoverSong === song)) {
      return  <span className="icon ion-md-play-circle"></span>;
    } else if (this.state.isPlaying === true && this.state.currentSong === song) {
      return  <span className="icon ion-md-pause"></span>;
    } else {
      return index + 1;
    }
  }

 formatTime(xTime) {
  var fail = "-:--";
  var xSeconds = xTime % 60;
  var fSeconds = xSeconds.toFixed();
  var sSeconds = fSeconds.toString();
  var xMinutes = Math.round((xTime / 60) -.5);
  var sMinutes = xMinutes.toString();
  if (xMinutes < 1) { sMinutes = "0:";}
  if (xTime < 10) { sSeconds = "0"+ sSeconds};

if (isNaN(xSeconds)) {
   return fail;

  } else if 
   (isNaN(xMinutes)) {
    return fail;
  }

  var xHash = ":";
  var xBoth = xMinutes + xHash + sSeconds;
 // console.log(xBoth);

return xBoth
}



  hideButtons(song, index) {
    //console.log("hideButtons called")
    if (!this.state.nowHoverSong === song)
    return index + 1;
  }



setSong(song) {
  this.audioElement.src = song.audioSrc;
  this.setState({ currentSong: song });
}

handleSongClick(song) {
  const isSameSong = this.state.currentSong === song;
  if (this.state.isPlaying && isSameSong) {
  this.pause();
} else {
  if (!isSameSong) { this.setSong(song); }
  this.play();
 ;
}
}
   handleVolumeChange(e) {
     const newVolume = e.target.value;
     //const newVolume = 0;
     this.audioElement.volume = newVolume;
     this.setState({ volume: newVolume });
     console.log(this.state.volume)
   }

   handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });

   }
 


    handlePrevClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.min(this.state.album.songs.length-1, currentIndex + 1);

      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

  render() {
    return (
      <section className="album">
      <section id="album-info">
        <div class="container text-center">
        <img class = "img-rounded" id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">
        <h3 id="album-title">{this.state.album.title}</h3>
        <h2 className="artist">{this.state.album.artist}</h2>
        <div id="release-info">{this.state.album.releaseInfo}</div>




    </div>
        </div>



            </section>
<div class="container text-left">
  <div class="table-responsive-md text-left">

            <table id="song-list text-center">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>

              <tbody class="table text-right">

              {
                this.state.album.songs.map( (song, index) =>
               <tr class= "row col-sm-12 text-center" className="song" key={index} onClick={() => this.handleSongClick(song)} >
                <td class = "col-sm-1 text-center"></td>
                <td class = "col-sm-1 text-center" onMouseEnter={() => this.setHoveringSong(song)} 
                onMouseLeave={ () => this.setNotHoveringSong(song)}>{this.showButtons(song, index)}
                {this.hideButtons(song, index)} </td>
                <td class = "col-sm-1 text-center">{song.title}</td>
                <td class = "col-sm-1 text-center">{this.formatTime(song.duration)}</td>

               </tr>



            )
              }
              </tbody>
            </table>
             </div>
             </div>





             

         <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           stringTime = {this.formatTime(this.audioElement.duration)}
           stringCurrentTime = {this.formatTime(this.audioElement.currentTime)}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           currentTime={this.audioElement.currentTime}
           duration={this.audioElement.duration}
           volume = {this.audioElement.volume}
           currentVolume={this.audioElement.volume}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           handleTimeChange={(e) => this.handleTimeChange(e)}
           handleVolumeChange={(e) => this.handleVolumeChange(e)}           
         />
      </section>

    );
  }
}

export default Album;

   