
import React, { Component } from 'react';
 import albumData from './../data/albums.js';




class Album extends Component {
  constructor(props) {
  super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],

      isPlaying: false,
      isHovering: 0,
      nowHoverSong: null
    };

//console.log(this.state.audioState[0]);

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
   // this.hoverOverIt = this.hoverOverIt.bind(this);
  //  this.hoverOffIt = this.hoverOffIt.bind(this);
}

play() {
  this.audioElement.play();
  this.setState({ isPlaying: true });

}


pause() {
  this.audioElement.pause();
  this.setState({ isPlaying: false });
}

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  setHoveringSong(song) {
    this.setState({ nowHoverSong: song });
  }

  setNotHoveringSong(song) {
    this.setState({ nowHoverSong: null});
  }



  showButtons(song, index) {
    console.log("showButtonsCalled")
     if (this.state.nowHoverSong === song || (this.state.isPlaying === false && this.state.nowHoverSong === song)) {
      return  <span className="icon ion-md-play-circle"></span>;
    } else if (this.state.isPlaying === true && this.state.currentSong === song) {
      return  <span className="icon ion-md-pause"></span>;
    } else {
      return index + 1;
    }
  }




  hideButtons(song, index) {
    console.log("hideButtons called")
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




  render() {
    return (
      <section className="album">
      <section id="album-info">
        
        <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">
        <h1 id="album-title">{this.state.album.title}</h1>
        <h2 className="artist">{this.state.album.artist}</h2>
        <div id="release-info">{this.state.album.releaseInfo}</div>
        <i className="icon ion-md-play-circle"></i>
        </div>



            </section>
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <tbody>
              {
                this.state.album.songs.map( (song, index) =>
               <tr className="song" key={index} onClick={() => this.handleSongClick(song)} >
                <td onMouseEnter={() => this.setHoveringSong(song)} onMouseLeave={ () => this.setNotHoveringSong(song)}>{this.showButtons(song, index)} {this.hideButtons(song, index)}</td>
                <td>{song.title}</td>
                <td>{song.duration}</td>
               </tr>

            )
              }
              </tbody>
            </table>
      </section>
    );
  }
}

export default Album;

   