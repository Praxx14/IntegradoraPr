import React, { Component } from 'react';
import VerticalSliderSection from './VerticalSliderSection';
import Services from './Services';
import SliderSection from './SliderSection';
import Features from './Features';
import Newsletter from './Newsletter';
import Footer from './Footer';
import IconBoxes from './IconBoxes';
import Home from "./Home";
import Pro from "./Pro";
import {BrowserRouter} from "react-router-dom";
class Contenedor extends Component {

    render(){
        return(
            <>
                <Pro />
                <Home/>
                <SliderSection/>
                <IconBoxes/>
                <Footer/>
            </>
        );
    }
}
export default Contenedor;
