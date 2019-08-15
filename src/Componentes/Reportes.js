import React, {Component} from "react";
import Alert from 'react-s-alert';
import "../App.css";
import "../css/Reportes.css";
import ReportesA from '../Helpers/Reportes';
import Consultas from '../Helpers/Consultas';
import Newsletter from "./Newsletter";
class Reportes extends Component {
    state = {
        FechaInical: '',
        FechaFinal: '',
        CodigoProducto: '',
        ListaEncabezado: null,
        Categorys: [],
        Category: 'Pedro',
        ConMen: '',
        ContenedorFinal: null,
        BooleanTabla: false
    };


    Cambio = e => {
        const name = e.target.id;
        const value = e.target.value;
        if (value !== "") {
            if (name === "Venta") {
                this.Consulta(value);
            } if (name === "idProducto") {
                this.ConsultarProductos(value);
            } if (name === "idPromocion") {
                this.ConsultarPromocion(value);
            } if (name === "idPromocionLab") {
                this.ConsultarPromocionLab(value);
            }
            if(name === 'idSucursalEmp'){
                this.ConsultarEmpleadosPorSucursal(value);
            }
        } else {
            if (name === "Venta") {
                this.TablaInicial();
            } if (name === "idProducto") {
                this.ConsultarTodosLosProductos();
            } if (name === "idPromocion") {
                this.ConsultarPromociones();
            } if (name === "idPromocionLab") {
                this.ConsultarPromociones();
            }
            if(name === 'idSucursalEmp'){
                this.ConsultarEmpleados();
            }
        }
        this.setState({ [name]: value });
    };
    LimpiarTabla = () => {
        this.setState({
            ListaEncabezado: null,
            listaFinal: null,
            BooleanTabla: false
        });
    };
    Consulta = q => {
        Consultas.getVentasID(q)
            .then(e => {
                if (e.data.notFound) {
                    this.Alerta("Datos Vacios", false, 1000);
                    this.LimpiarTabla();
                } else {
                    let avoid = []
                    let change = { ID_PRODUCTO: 'Id Producto' };
                    this.CargarTabla(e.data["result"], avoid, change);
                }
            })
            .catch(e => {
                this.Alerta("Error en su conexión", false, 1000);
                console.log(e);
            });
    };
    ConsultarProductos = d => {
        Consultas.getProductoCode(d).then(e => {
            if (e.data.notFound !== undefined) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = [];
                let change = {
                    RFC_Sucursal: "RFC", Nombre_Empleado: "Nombre Empleado",
                    Apellido_Paterno: "Apellido Paterno", Apellido_Materno: "Apellido Materno"
                }
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }
    ConsultarTodosLosProductos = () => {
        Consultas.getProductos().then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = [];
                let change = {ID_PRODUCTO:'Id Producto', NOMBRE_PRODUCTO:'Nombre Producto',
                    LABORATORIO:'Laboratorio', ESTATUS_PRODUCTO:'Estatus Producto',
                    COSTO_PRODUCTO:'Costo Producto', REGISTRO:'Registro', PRECIO_VENTA:'Precio Venta',
                    CANTIDAD:'Cantidad'}
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }

    ConsultarProdIEPS = () => {
        Consultas.getProductoIEPS().then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = [];
                let change = {ID_PRODUCTO:'Id Producto', NOMBRE_PRODUCTO:'Nombre Producto',
                    LABORATORIO:'Laboratorio', ESTATUS_PRODUCTO:'Estatus Producto',
                    COSTO_PRODUCTO:'Costo Producto', REGISTRO:'Registro', PRECIO_VENTA:'Precio Venta',
                    CANTIDAD:'Cantidad'}
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });

    }

    ConsultarDiezMasVendidos = () => {
        Consultas.getDiezMasVendidos().then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = [];
                let change = {ID_PRODUCTO:'Id Producto', 'VENTAS TOTALES':'Venta Totales',
                    LABORATORIO:'Laboratorio', 	TIPO:'Tipo'};
                let a = [] ;
                Object.values(e.data["result"]).forEach((p,index)=>{
                    if(index < 10){
                        a.push(p);
                    }
                });
                this.CargarTabla(a, avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }

    ConsultarCaducados = () => {
        Consultas.getCaducados().then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = [];
                let change = {id_producto:'Id Producto', 	laboratorio:'Laboratorio'}
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }


    ConsultarPromocionLab = p => {
        Consultas.getPrombyIdLab(p).then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = ['aplica_descuento', 'aplica_precio_fijo', 'status', 'permitir_devoluciones'];
                let change = {
                    id_promocion: 'Id Promocion', desc_promocion: 'Descuento Promoción',
                    fecha_inicial: 'Fecha Inicial', fecha_final: 'Fecha Final', tipo_filtro: 'Tipo Filtro',
                    clave_familia_med: 'Clave Familia Médica',
                    clave_clasificacion_essa: 'Clave Clasificacion ESSA', id_laboratorio: 'Id Laboratorio',
                    descuento: 'Descuento', fecha_actualizacion: 'Fecha Actualizacion',
                    agotar_existencias: 'Agotar Existencias'
                };
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }
    ConsultarPromocion = p => {
        Consultas.getPrombyId(p).then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = ['aplica_descuento', 'aplica_precio_fijo', 'status', 'permitir_devoluciones'];
                let change = {
                    id_promocion: 'Id Promocion', desc_promocion: 'Descuento Promoción',
                    fecha_inicial: 'Fecha Inicial', fecha_final: 'Fecha Final', tipo_filtro: 'Tipo Filtro',
                    clave_familia_med: 'Clave Familia Médica',
                    clave_clasificacion_essa: 'Clave Clasificacion ESSA', id_laboratorio: 'Id Laboratorio',
                    descuento: 'Descuento', fecha_actualizacion: 'Fecha Actualizacion',
                    agotar_existencias: 'Agotar Existencias'
                };
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    };

    ConsultarPromociones = pr => {
        Consultas.getProm().then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = ['aplica_descuento', 'aplica_precio_fijo', 'status', 'permitir_devoluciones'];
                let change = {
                    id_promocion: 'Id Promocion', desc_promocion: 'Descuento Promoción',
                    fecha_inicial: 'Fecha Inicial', fecha_final: 'Fecha Final', tipo_filtro: 'Tipo Filtro',
                    clave_familia_med: 'Clave Familia Médica',
                    clave_clasificacion_essa: 'Clave Clasificacion ESSA', id_laboratorio: 'Id Laboratorio',
                    descuento: 'Descuento', fecha_actualizacion: 'Fecha Actualizacion',
                    agotar_existencias: 'Agotar Existencias'
                };
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }

    ConsultarEmpleados = () => {
        Consultas.getEmpleados().then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = ['nombre_desc', 'almacen_medicamentos', 'num_ext_suc',
                    'num_int_suc', 'codigoCentroCosto', 'numEstablecimiento', '	almacen', 'hora_cirre',
                    'hora_apertura', 'cantidad_empleados', 'encargado', 'nom_servidor', 'nombre_med',
                    'seg_nombre_med', 'apellido_mat_med', 'apellido_pat_med	', 'sexo_med', 'tel_med',
                    'tel_par_med'];
                let change = {id_empleado:'Id Empleado', nombre:'Nombre', seg_nombre:'Segundo Nombre',
                    apellidoMaterno:'Apellido Materno', apellidoPaterno:'Apellido Paterno', sexo:'Sexo',
                    telefonoCelular:'Teléfono Celular', telefonoParticular:'Teléfono Particular',
                    direccion:'Dirección', correo_electronico:'Correo Electrónico', colonia:'Colonia',
                    municipio:'Municipio', estado:'Estado', ciudad:'Ciudad', codigoPostal:'C.P.',
                    noInterno:'No Interior', noExterno:'No Exterior', id_sucursal:'Id Sucursal',
                    clasificacion:'Clasificación', registroSAA:'registro SAA', 	id_medico:'Id Médico',
                    cedulaProfesional:'Cédula Profesional', especialidad:'Especialidad'};
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }

    ConsultarEmpleadosPorSucursal = (id) =>{
        Consultas.getEmpleadosPorSucursal(id).then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            } else {
                let avoid = ['nombre_desc', 'almacen_medicamentos', 'num_ext_suc',
                    'num_int_suc', 'codigoCentroCosto', 'numEstablecimiento', '	almacen', 'hora_cirre',
                    'hora_apertura', 'cantidad_empleados', 'encargado', 'nom_servidor', 'nombre_med',
                    'seg_nombre_med', 'apellido_mat_med', 'apellido_pat_med	', 'sexo_med', 'tel_med',
                    'tel_par_med'];
                let change = {id_empleado:'Id Empleado', nombre:'Nombre', seg_nombre:'Segundo Nombre',
                    apellidoMaterno:'Apellido Materno', apellidoPaterno:'Apellido Paterno', sexo:'Sexo',
                    telefonoCelular:'Teléfono Celular', telefonoParticular:'Teléfono Particular',
                    direccion:'Dirección', correo_electronico:'Correo Electrónico', colonia:'Colonia',
                    municipio:'Municipio', estado:'Estado', ciudad:'Ciudad', codigoPostal:'C.P.',
                    noInterno:'No Interior', noExterno:'No Exterior', id_sucursal:'Id Sucursal',
                    clasificacion:'Clasificación', registroSAA:'registro SAA', 	id_medico:'Id Médico',
                    cedulaProfesional:'Cédula Profesional', especialidad:'Especialidad'};
                this.CargarTabla(e.data["result"], avoid, change);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });

    }

    ConsultaFechas = (FI, FF, CF) => {
        ReportesA.getTablaFiltroFechas(FI, FF, CF).then(e => {
            let Com = e;
            if (Com != null) {
                console.log("it works")
                let avoid = [];
                let change = {RFC_Sucursal:'RFC Sucursal', Nombre_Empleado:'Nombre Empleado',
                    Apellido_Paterno:'Apellido Paterno', Apellido_Materno:'Apellido Materno'};
                this.CargarTabla(Com, avoid, change);
            } else if (Com === 1) {
                this.Alerta("Revice su conexión", false, 1000);
            } else {
                // this.Alerta();
                this.LimpiarTabla();
            }
        }); //Com es lo que devuelve filtro fecha y revisa inconvenientes en el envío de datos 1

    };
    Parametros = comparar => {
        console.log(comparar);

        this.ConsultaFechas(
            this.state.FechaInical,
            this.state.FechaFinal,
            comparar
        ); //Ingresa a la consulta por fechas
    };




    CambioStilo = e => {
        const id = e.target.id;
        switch (id) {
            case "C1": {
                // se va a manejar por cada una de las opciones// añadir opcion a case para op de filtraod
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Por rango de fechas de :</span>
                                <input
                                    id="FechaInical"
                                    onChange={this.Cambio}
                                    type="date"
                                    className="form-control"
                                    placeholder="Usuario"
                                />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span> a: </span>
                                <input
                                    id="FechaFinal"
                                    onChange={this.Cambio}
                                    type="date"
                                    className="form-control"
                                    placeholder="dd/mm/aaaa"
                                />
                            </div>
                            <div className="col-12">
                                <button
                                    type="button"
                                    className="mtop20 btn btn-outline-info"
                                    onClick={() => this.Parametros("Ventas")}
                                >
                                    Filtrar
                                </button>
                            </div>
                            <div className="col-12 row" style={{ marginTop: "2%" }}>
                                <span className="col-3"> Por id de venta: </span>
                                <input
                                    id="Venta"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control col-8"
                                    placeholder="Id venta"
                                />
                            </div>
                        </div>
                    )
                });
                this.TablaInicial();
                break;
            }
            case "C2": {
                this.Sucursales();
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            {/*<div className="col-8">
                                <span></span>
                            <Select
                                value={this.state.Sucursal}
                                onChange={this.CambioSucursal}
                                options={this.state.Sucursales}
                            />
                            </div>
                            <div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Sucursal")}
                                >
                                    Filtro
                </button>
                            </div>*/}
                        </div>
                    ),
                    // Sucursales: ReportesA.getOpciones()
                });
                break;
            }
            case "C3": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="mtopcen col-sm-12 col-md-6 col-lg-6">
                                <span>Id Producto:</span>
                                <input
                                    id="idProducto"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Prodcuto"
                                />
                            </div>
                            <div className="prodbtn col-12 col-md-12 col-lg-6">
                                <button
                                    type="button"
                                    className="btnproduct btn btn-outline-info"
                                    onClick={() => this.ConsultarProdIEPS()}
                                >
                                    Filtrar por IEPS
                                </button>
                                <button

                                    type="button"
                                    className="btnproduct btn btn-outline-info"
                                    onClick={() => this.ConsultarDiezMasVendidos()}
                                >
                                    Mostrar 10 más vendidos
                                </button>
                                {/*</div>
                            <div className=" btnscont col-sm-12 col-md-12 col-lg-6">*/}
                                {/*<button
                                    type="button"
                                    className="mbtntop btnproduct btn btn-outline-info"
                                    onClick={() => this.ConsultarMasVendido()}
                                >
                                    Mostrar el más vendido
                                </button>*/}
                                <button
                                    type="button"
                                    className="mbtntop btnproduct btn btn-outline-info"
                                    onClick={() => this.ConsultarCaducados()}
                                >
                                    Mostrar caducados
                                </button>
                            </div>
                        </div>
                    )
                });
                this.ConsultarTodosLosProductos();
                break;
            }
            case "C4": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-6">
                                <span>Promoción:</span>
                                <input
                                    id="idPromocion"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Promoción"
                                />
                            </div>
                            <div className="col-6">
                                <span>Promoción en laboratorio:</span>
                                <input
                                    id="idPromocionLab"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Laboratorio"
                                />
                            </div>
                            {/*<div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Promociones")}
                                >
                                    Filtro
                </button>
                    </div>*/}
                        </div>
                    )
                });
                this.ConsultarPromociones();
                break;
            }
            case "C5": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-6">
                                <span>Por sucursal:</span>
                                <input
                                    id="idSucursalEmp"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Sucursal"
                                />
                            </div>
                            <div className="col-12">
                                {/*<button
                                    type="button"
                                    className="mtop20 btn btn-outline-info"
                                    onClick={() => this.Parametros("Empleados")}
                                >
                                    Filtro
                                </button>*/}
                            </div>
                        </div>
                    )
                });
                this.ConsultarEmpleados();
                break;
            }
            case "C6": {
                this.setState({
                    ContenedorFinal: null
                });
                this.Doctores();
                break;
            }
            default: {
                this.setState({ ContenedorFinal: null });
            }
        }
    };

    CargarTabla = (Valor, NoEntrar = [], Cambio = {}) => {
        this.setState({
            ListaEncabezado: ReportesA.getEncabezado(Valor, NoEntrar, Cambio),
            listaFinal: ReportesA.getTablaDianmica(Valor, NoEntrar, Cambio),
            BooleanTabla: true
        });
    };
    TablaInicial = () => {
        Consultas.getVentas()
            .then(e => {
                if (e.data.notFound) {
                    this.Alerta("Datos Vacios", false, 1000);
                } else {
                    this.CargarTabla(e.data["result"],
                        ['RFC_Sucursal'],
                        { 'Apellido_Materno': 'Materno', Apellido_Paterno: 'Paterno', 'Nombre_Empleado': 'Nombre', 'Cantidad de productos': 'Cantidad' });
                }
            })
            .catch(e => {
                this.Alerta("Error en su conexión", false, 1000);
                console.log(e);
            });
    };
    Doctores = () => {
        Consultas.getDoctores()
            .then(e => {
                if (e.data.notFound) {
                    this.Alerta("Datos Vacios", false, 1000);
                } else {
                    let avoid = [];
                    let change = {
                        NOMBRE_DOC: 'Nombre', SEG_NOMBRE_DOC: 'Segundo Nombre',
                        APELLIDO_PAT_DOC: 'Apellido Paterno', APELLIDO_MAT_DOC: 'Apellido Materno',
                        ID_SUCURSAL: 'Id Sucursal', COLONIA: 'Colonia', MUNICIPIO: 'Municipio',
                        ESTADO: 'Estado', CIUDAD: 'Ciudad'
                    };
                    this.CargarTabla(e.data["result"], avoid, change);
                }
            }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    };
    Sucursales = () => {
        Consultas.getSucursales()
            .then(e => {
                if (e.data.notFound) {
                    this.Alerta("Datos Vacios", false, 1000);
                } else {
                    let avoid = ['hora_apertura', 'hora_cirre', 'codigoCentroCosto'];
                    let change = {
                        id_sucursal: 'Id Sucursal', clasificacion: 'Clasificación',
                        nombre_desc: 'nombre desc', registroSAA: 'registro SAA',
                        cedulaProfesional: 'Cédula Profesional', medico_id: 'Id Médico',
                        especialidad: 'Especialidad', rfc: 'RFC', direccion: 'Dirección',
                        colonia: 'Colonia', estado: 'Estado', municipio: 'Municipio',
                        ciudad: 'Ciudad', codigoPostal: 'Código Postal', telefono: 'Telefono',
                        encargado: 'Encargado', cantidad_empleados: 'Cantidad Eempleados',
                        almacen: 'Almacen', almacen_medicamentos: 'Almacen Medicamentos',
                        noExterior: 'No. Exterior', noInterior: 'No. Interior',
                        numEstablecimiento: 'Número Establecimiento'
                    };
                    this.CargarTabla(e.data["result"], avoid, change);
                }
            }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    };

    componentWillMount() {
        this.Validad();
      this.TablaInicial();
    }

    Validad =()=> {
        let token = window.localStorage.getItem('token');
        Consultas.getValidacion(token).then(e=>{
            const  valor  = e.data;
            if( valor === null){
                this.Alerta('Token no valido', false, 1000);
                this.props.history.push("/Login");
                window.location.reload();
                window.localStorage.removeItem('token');

            }else{

            }
        }).catch(e=>console.log(e))
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

    render() {
        const Tabla = this.state.BooleanTabla ? (
            <table className="table users table-hover">
                <thead>
                <tr className="table-primary">{this.state.ListaEncabezado}</tr>
                </thead>
                <tbody className="grid">{this.state.listaFinal}</tbody>
            </table>
        ) : (
            <h1 className="text-center">Sin Información</h1>
        );
        return (
            <>
            <Newsletter />
            <div className="reportes" >
                <Alert stack={{limit: 3}}/>
                <div className="container" >
                    <div className="row" style={{marginBottom:"3%"}}>
                        <div className="col-lg-12" id="reporteTitle">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" id="reporteTitle">
                            <h1>Filtros de reporte</h1>
                        </div>
                    </div>
                    <div className="row">
                        {/*Navegacion*/}
                        <div
                            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                            style={{ marginBottom: "2%" }}
                        >
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">


                                        <li name="C1" className="nav-item">
                                            <label
                                                id="C1"
                                                onClick={this.CambioStilo}
                                                className="nav-link"
                                            >
                                                VENTAS{" "}
                                            </label>
                                        </li>
                                        <li name="'C2" className="nav-item">
                                            <label
                                                id="C2"
                                                onClick={this.CambioStilo}
                                                className="nav-link"
                                            >
                                                SUCURSAL{" "}
                                            </label>
                                        </li>
                                        <li name="C3" className="nav-item">
                                            <label
                                                id="C3"
                                                onClick={this.CambioStilo}
                                                className="nav-link"
                                            >
                                                PRODUCTOS
                                            </label>
                                        </li>
                                        <li name="C4" className="nav-item">
                                            <label
                                                id="C4"
                                                onClick={this.CambioStilo}
                                                className="nav-link "
                                            >
                                                PROMOCIONES
                                            </label>
                                        </li>
                                        <li name="C5" className="nav-item">
                                            <label
                                                id="C5"
                                                onClick={this.CambioStilo}
                                                className="nav-link "
                                            >
                                                EMPLEADOS
                                            </label>
                                        </li>
                                        <li name="C6" className="nav-item">
                                            <label
                                                id="C6"
                                                onClick={this.CambioStilo}
                                                className="nav-link "
                                            >
                                                DOCTORES
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/*Conten*/}
                            <div style={{ marginTop: "2%" }}>
                                {this.state.ContenedorFinal}
                            </div>
                            {/*Fin Conten*/}
                        </div>
                        {/*fin Navegacion*/}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div style={{ overflow: "auto" }}>{Tabla}</div>
                        </div>
                    </div>>

                </div>
            </div>
        </>
                );
    }
}

export default Reportes;
