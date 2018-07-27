 import React, { Component } from 'react';
 
 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
          <section id="buttons">

       <div class="container">
  <div class="row">
    <div class="col-sm text-right">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="icon ion-md-skip-backward"></span>
           </button>

               </div>
    <div class="col-sm">

            <button id="play-pause" onClick={this.props.handleSongClick} >
             <span className={this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play-circle"}> </span>
           </button>

               </div>
    <div class="col-sm text-left">

           <button id="next"onClick={this.props.handleNextClick}>
             <span className="icon ion-md-skip-forward"></span>
           </button>

               </div>

             </div>
</div>
    <div class="container text-center">
      &nbsp;
    </div>
         </section>

         <section id="time-control">  

<div class="container">
  <div class="row">
    <div class="col-sm text-right">

           <div className="current-time">{this.props.stringCurrentTime}</div>

               </div>
    <div class="col-sm slidecontainder slider">

           <input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01" 
             onChange={this.props.handleTimeChange}
           />   

               </div>
    <div class="col-sm text-left
    ">

           <div className="total-time">{this.props.stringTime}</div>
    </div>
  </div>
</div>

         </section>

<div class="container">
  <div class="row">
    <div class="col-sm">

    </div>
    <div class="col-sm">

    </div>
    <div class="col-sm">

    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">

    </div>
    <div class="col-sm">
           <div className="current-volume">{this.props.currentVolume * 80}</div>
    </div>
    <div class="col-sm">

    </div>
  </div>
</div>
         <section id="volume-control">


<div class="container">
  <div class="row">
    <div class="col-sm text-right">


           <div className="icon ion-md-volume-low"></div>

    </div>
    <div class="col-sm slidecontainder slider" >

           <input
            type="range"
            className="seek-bar"
            value= {this.props.currentVolume || 0}
             max="1" 
             min="0" 
             step = "0.01"

            onChange={this.props.handleVolumeChange}

          />

              </div>
    <div class="col-sm text-left">
           <div className="icon ion-md-volume-high"></div>

    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">

    </div>
    <div class="col-sm">

    </div>
    <div class="col-sm">

    </div>
  </div>
</div>
    <div class="container text-center">
      &nbsp;
    </div>
         </section>
       </section>

     );
   }
 }
 
 export default PlayerBar;