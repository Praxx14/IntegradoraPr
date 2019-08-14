import React from 'react';
import '../../assets/css/now-ui-kit.css';
import  imagenBa from '../../assets/img/login.jpg';
import LogoAl from "../../assets/img/now-logo.png";
class index extends React.Component{

    render() {
        return(
            <>
            <div className="page-header clear-filter"  filter-color="blacksyntax">
                <div className="page-header-image"
                     style={{backgroundImage: 'url(https://www.esan.edu.pe/apuntes-empresariales/2015/06/18/Data_Warehouse_Mart_figura_principal.jpg)'}}></div>
                <div className="content">
                    <div className="container">
                        <div className="col-md-4 ml-auto mr-auto">
                            <div className="card card-login card-plain">
                                <div className="form" >
                                    <div className="card-header text-center">
                                        <div className="logo-container"
                                             style={{width: '4rem',height: '4rem',marginLeft:'auto',marginRight:'auto',marginBottom:'1%'}}>
                                            <img src={LogoAl} alt=""/>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i style={{color:'black'}} className="now-ui-icons users_circle-08"></i>
                    </span>
                                            </div>
                                            <input style={{color:'black'}} type="text" className="form-control" placeholder="Usuario"/>
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i style={{color:'black'}} className="now-ui-icons ui-1_lock-circle-open"></i>
                    </span>
                                            </div>
                                            <input type="text" placeholder="Contraseña" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <label  className="btn btn-primary btn-round btn-lg btn-block">Iniciar</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default index;
