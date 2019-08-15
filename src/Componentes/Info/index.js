import React from 'react';
import './info.css';
class index extends React.Component{
    render() {
        return(
            <>
                <div className="row col-11 mt-4 justify-content-between marginNull "  style={{margin:'5%',marginTop:'8%'}}>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 marginNull TamaHeid card" style={{marginRight:'2%'}}>
                        <h3 className="card-title"> Misión </h3>
                        <p className="card-body">Desarrollar ideas innovadoras basadas en las Tics que ayude a mejorar el crecimiento de las empresas
                            y a su vez estas contribuyan con la economía nacional, basados en los preincipios y valores
                            que nos rigen para contribuir al crecimiento social y la económico del país.</p>
                    </div>

                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 marginNull TamaHeid card">
                        <h3 className="card-title"> Visión </h3>
                        <p className="card-body">Ser una empresa de soluciones tecnológicas reconocida a nivel nacional por la calidad e innovación
                            de nuestros servicios y productos desarrollados, para contribuir a él crecimiento de nuestro país
                            mediante el desarrollo de ideas innovadoras que sean capaces de competir.</p>

                    </div>
                </div>
            </>
        )
    }
}
export default index;
