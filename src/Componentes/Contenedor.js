import React, { Component } from 'react';
import SliderSection from './SliderSection';
import Footer from './Footer';
import IconBoxes from './IconBoxes';
import Home from "./Home";
import Pro from "./Pro";
import Info from "./Info";
class Contenedor extends Component {

    render(){
        return(
            <>
                <Pro />
                <Home/>
                <Info/>
                <SliderSection/>
                <IconBoxes/>
                <Footer/>
            </>
        );
    }
}
export default Contenedor;
