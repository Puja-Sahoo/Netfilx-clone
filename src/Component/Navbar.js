import React from 'react';
import "../Style/navbar.css"
import SeachIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Storefront';
import StorefrontIcon from '@material-ui/icons/Notifications';

class Navbar extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         showVMenu:true,
    //         showBars:false,
    //         showHMenu:false
    //     }

    // }
    // closeSideMenu=()=>{
    //     const{showBars,showHMenu,showVMenu}=this.state;
        

    // }
 render(){
    // const{showBars,showHMenu,showVMenu}=this.state;
    return ( 
        
        <div className="navbar navbar-expand-md">
            <div className="container">
            <span><img className="navbar_logo navbar-brand" src="../Assets/logo4.png" alt= "" srcSet=""/></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <span>&nbsp;Home&nbsp; </span>
                    </li>
                    <li className="nav-item">
                    <span>&nbsp; Tv Shows &nbsp;</span>
                    </li>
                    <li className="nav-item">
                    <span>&nbsp; Movies &nbsp;</span>
                    </li>
                    <li className="nav-item">
                    <span>&nbsp; Latest &nbsp;</span>
                    </li>
                    <li className="nav-item">
                    <span>&nbsp; My List&nbsp; </span>
                    </li>
                    <li className="nav-item">
                    <span>&nbsp; KIDS &nbsp;</span>
                    </li>
                </ul>
            </div>
            
            {/* <span><a href="#" classNameName="close" onClick={() => this.closeSideMenu('showVMenu', false)}> */}
                {/* <i classNameName="fas fa-times"></i> */}
                {/* </a> */}
            {/* </span> */}
            <span><SeachIcon/></span>
            <span><NotificationsIcon/></span>
            <span><StorefrontIcon/></span>

            </div>
            
            {/* <span><img classNameName="navbar_logo" src="../Assets/logo4.png" alt= "" srcSet=""/></span>
            <span>Home</span>
            <span>Tv Shows</span>
            <span>Movies</span>
            <span>Latest</span>
            <span>My List</span>
            <span>KIDS</span>
            {/* <span><a href="#" classNameName="close" onClick={() => this.closeSideMenu('showVMenu', false)}> */}
                {/* <i classNameName="fas fa-times"></i> */}
                {/* </a> */}
            {/* </span> */}
            {/* <span><SeachIcon/></span>
            <span><NotificationsIcon/></span>
            <span><StorefrontIcon/></span> */} 


            
        </div>
    )
 }
    
}

export default Navbar
