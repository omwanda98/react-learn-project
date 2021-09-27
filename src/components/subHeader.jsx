import React, { Component } from 'react';

//IMPORT IMAGES
import img from "../assets/img/house_noma.jpg";

class SubHeader extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className = "subheader" id = "subHeader">
                    <img alt ="" className = "subheaderIMG" src = {img}/>
                    <div className = "textOver">learn this at ShapeAI</div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default SubHeader;