import React, { Component } from 'react';
import '../App.css';
import VerticalSliderSection from './VerticalSliderSection';

class SliderSection extends Component {

    ListaItem1 = [
        {
            fragmento1: 'Portabilidad',
            parrafo: 'Realice consultas donde sea que se encuentre sin inconvenientes ni interrupciones '
        },
        {
            fragmento1: 'Seguridad',
            parrafo: 'Cifrado de datos con algoritmo SHA-1 y Páginas con certificado SSL'

        },
        {
            fragmento1: 'API',
            parrafo: 'Manejo de datos desde un servidor, mejorando la velocidad de las aplicaciones web'

        }
    ];

    state = {
        Value: this.ListaItem1,
        ListaFinalItem1: ''
    };

    componentWillMount() {
        let ListaTemp1 = [];
        (this.state.Value).forEach((item, index) => {
            ListaTemp1.push(< VerticalSliderSection key={index} valores1={item} />)
        });
        this.setState({ ListaFinalItem1: ListaTemp1 })
    }


    render() {
        const ListaSlider1 = this.state.ListaFinalItem1;
        return (
            <div className="v_slider_section">{/* Vertical Slider Section */}
                <div className="container fill_height">
                    <div className="row fill_height">

                        <div className="col-sm-12 col-lg-6 v_slider_section_image">
                            <div className="v_slider_image">
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-5 offset-lg-1 v_slider_content d-flex flex-column justify-content-center">
                            <div className="v_slider_container">

                                {/* Vertical Slider */}
                                <div className="v_slider">
                                    {ListaSlider1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SliderSection;
