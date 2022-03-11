import React from 'react'
import "../Style/banner.css";
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Banner() {
    return (
        <div className="banner">
            <img src="../Assets/dark3.jpg" className="banner_img"/>
            <h3>NETFLIX  <small>ORIGINAL</small></h3>
            <h1>DARK</h1>
            <div className="button_div">
                
                <button className="button1">
                    <PlayArrowIcon style={{fontSize:"10"}}/>Play
                </button>
                <button className="button2">
                    <AddIcon style={{fontSize:"10"}}/>My List
                </button>

            </div>
            <div className="intro_container">
                <p className="intro" >
                  {/* {console.log(window.innerHeight,window.innerWidth)
                  if (this.window.innerHeight== "400px")
                  console.log(wi)
                  
                  }   */}
                  <span >
                      Dark is basically a show set in two time frames, one is a year after the Chernobyl disaster,
                  </span>
                  <span className="d-none d-lg-block ">
                    the other is 34 years after the Chernobyl disaster.
                      
                  </span>


                
                </p>
            </div>
        </div>
    )
}

export default Banner
