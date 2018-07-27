import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import albumData from './../data/albums';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
class Library extends Component {
  constructor(props) {
    super(props);


    this.state = {
      albums: albumData
    };
  }


  render() {
    return (
      <section className="library">
        {
          this.state.albums.map( (album, index) =>

            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} />
              <h1>{album.title}</h1>
              <h3>{album.artist}</h3>

               <h5>{album.songs.length} songs</h5>
               <div class="container text-center">
                 &nbsp;
                 <hr></hr>
               </div>


            </Link>
          )
        }
      </section>
    );
  }
}


export default Library

