import React from 'react';
import '../../assets/css/now-ui-kit.css';
import LogoAl from "../../assets/img/now-logo.png";
import Consultas from "../../Helpers/Consultas";
import Alert from "react-s-alert";
class index extends React.Component{
    state={
      user:'',
      pass:''
    };

    Validad =()=> {
        let token = window.localStorage.getItem('token');
        Consultas.getValidacion(token).then(e=>{
            if( e.data === null){
                this.Alerta('Token no valido', false, 1000);
                //this.props.history.push("/");
               // window.location.reload();
                window.localStorage.removeItem('token');

            }else{

            }
        }).catch(e=>console.log(e))
    }

    InicioSession =()=>{
        Consultas.getLogin(this.state.user,this.state.pass).then(e=>{
            const valor = e.data;
            console.log(valor)
            if(valor.success === false){
                this.Alerta('Usuario o Contaseña son incorrectas');
            }else{
                window.localStorage.setItem('token',valor.token);
                this.props.history.push("/Reportes");
                window.location.reload();
            }
        });
    }

    Alerta = (texto, tipo=false, tiempo=1000) => {
        tipo ? Alert.succes(texto, {
            position: 'top',
            effect: 'slide',
            timeout: tiempo
        }) : Alert.error(texto, {
            position: 'top',
            effect: 'slide',
            timeout: tiempo
        });
    };
    Cambio =(event)=>{
        const name = event.target.id;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    componentWillMount() {
        this.Validad();
    }
    render() {
        return(
            <>
                <Alert stack={{limit: 3}}/>
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
                                            <input style={{color:'black'}} type="text" id='user' onChange={this.Cambio} className="form-control" placeholder="Usuario"/>
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i style={{color:'black'}} className="now-ui-icons ui-1_lock-circle-open"></i>
                    </span>
                                            </div>
                                            <input type="password" id="pass"  onChange={this.Cambio}  placeholder="Contraseña" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <label  className="btn btn-primary btn-round btn-lg btn-block" onClick={this.InicioSession}>Iniciar</label>
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
