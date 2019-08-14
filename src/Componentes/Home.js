import React, {Component} from 'react';
import imagen from '../images/slider_background.jpg';
import ItemSliderInicial from '../Subcomponentes/ItemSliderInicial'
import '../App.css';

class Home extends Component {
    ListaItem = [
        {
            imagen: imagen,
            Titulo: 'Titulo 1',
            Subtitulo: 'Subtitulo 1'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 2',
            Subtitulo: 'Subtitulo 2'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 3',
            Subtitulo: 'Subtitulo 3'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 4',
            Subtitulo: 'Subtitulo 2'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 5',
            Subtitulo: 'Subtitulo 4'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 6',
            Subtitulo: 'Subtitulo 5'
        }
    ];
    state = {
        Value: this.ListaItem,
        ListaFinalItem: ''
    };

    componentWillMount() {
        let ListaTemp = [];
        (this.state.Value).forEach((item, index) => {
            ListaTemp.push(< ItemSliderInicial key={index} valores={item}/>);
        });
        this.setState({ListaFinalItem: ListaTemp})
    }

    render() {
        const ListaSlider = this.state.ListaFinalItem;
        return (
<>

    <section className="site-hero overlay" data-stellar-background-ratio="0.5"
             style={{backgroundImage: 'url(https://www.esan.edu.pe/apuntes-empresariales/2015/06/18/Data_Warehouse_Mart_figura_principal.jpg)', maxHeight:'50vh'}}>
        <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-8 text-center">

                    <div className="mb-5 element-animate">
                        <img src="images/banner_text_1.png" alt="Image placeholder" className="img-md-fluid"/>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
        );
    }
}

export default Home;
