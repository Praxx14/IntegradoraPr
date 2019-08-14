import React, { Component } from 'react';
import '../App.css';
import maquila from '../images/1maquila.jpg';
class IconBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
       <>
           <section className="site-section">
               <div className="container">
                   <div className="row justify-content-center mb-5">
                       <div className="col-md-7 text-center">
                           <h2> Nuestros Productos</h2>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-4">
                           <div className="media d-block media-feature text-center" style={{height: '29vh',
                               backgroundColor: 'rgba(0,0,0,0.8)',padding:'0%',
                               color:'#FFFF',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',
                               backgroundImage:'url("https://images.unsplash.com/photo-1562101994-0801ac2007fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")' }} >
                               <div className="media-body"
                                    style={{height: '100%',padding: '4%',
                                        justifyContent: 'space-around',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'rgba(0,0,0,0.4)',color:'#ffff'}}>
                                   <h3 style={{color:'#fff',margin:'0%'}}> Ubi-farma</h3>
                                   <p style={{color:'#fff'}}> Aplicación que facilita la búsqueda de medicamentos en su ciudad, localizando las farmacias más
                                       cercanas.</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-4">
                           <div className="media d-block media-feature text-center" style={{height: '29vh',
                               backgroundColor: 'rgba(0,0,0,0.8)',padding:'0%',
                               color:'#FFFF',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',
                               backgroundImage:'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")' }} >
                               <div className="media-body"
                                    style={{height: '100%',padding: '4%',
                                        justifyContent: 'space-around',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'rgba(0,0,0,0.4)',color:'#ffff'}}>
                                   <h3 style={{color:'#fff',margin:'0%'}}> ContraProductividad</h3>
                                   <p style={{color:'#fff'}}> Aplicación web, para la evaluación de la productividad y eficiencia de su empresa o negocio. </p>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-4">
                           <div className="media d-block media-feature text-center" style={{height: '29vh',
                               backgroundColor: 'rgba(0,0,0,0.8)',padding:'0%',
                               color:'#FFFF',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',
                               backgroundImage:'url('+maquila+')' }} >
                               <div className="media-body"
                                    style={{height: '100%',padding: '4%',
                                        justifyContent: 'space-around',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'rgba(0,0,0,0.4)',color:'#ffff'}}>
                                   <h3 style={{color:'#fff',margin:'0%'}}> Maquila Pro </h3>
                                   <p style={{color:'#fff'}}> Sistema de control de productividad, entregas dentro de su maquila.</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
        );
    }
}
export default IconBoxes;
