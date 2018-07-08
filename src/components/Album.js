import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
   constructor(props) {
     super(props);



      const album = albumData.find( album => {
        return album.slug === this.props.match.params.slug
      });

      this.state = {
        album: album
      };
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

         </div>
       </section>



       <table id="song-list">
        <colgroup>
          <col id="song-number-column" />
          <col id="song-title-column" />
          <col id="song-duration-column" />
        </colgroup>
        <tbody>


            <td id = "song-title" > this.state.albums.songs</td>

        </tbody>
      </table>
     </section>
   );
 }
}

//toggleComplete(index); {
  //const songs = this.state.albums.songs.slice();
//  const song = songs[index];
  //  this.setState({ songs: songs });
//  console.log("Testing index array number:  " + index);
//}

export default Album;
