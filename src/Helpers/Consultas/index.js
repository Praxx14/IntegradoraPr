import axios from 'axios';
class Consultas {

    static getVentas = () => {
        return axios.get('http://cuernavaca.xyz/sales/recent', {
            responseType: 'json'
        });
    };
    static getVentasID = (id) => {
        return axios.get('http://cuernavaca.xyz/sales/venta/' + id, {
            responseType: 'json'
        });
    };

    static getVentasRangoFechas = (FechaI, FechaF) => {
        return axios.post('http://cuernavaca.xyz/sales', {
            inicio: FechaI,
            final: FechaF
        }, { responseType: 'json' });
    };

    static getProductos = () =>{
        return axios.get('http://cuernavaca.xyz/products',{
            responseType: 'json'
        });
    };

    static getProductoCode = (code) => {
        return axios.get('http://cuernavaca.xyz/products/code/' + code, {
            responseType: 'json'
        });
    };

    static getProductoIEPS = () =>{
        return axios.get('http://cuernavaca.xyz/products/imp',{
            responseType: 'json'
        });
    };

    static getDiezMasVendidos = () =>{
        return axios.get('http://cuernavaca.xyz/products/smoreselled',{
            responseType: 'json'
        });
    };

    static getMasVendido = () =>{
        return axios.get('http://cuernavaca.xyz/products/moreselled',{
            responseType: 'json'
        })
    };

    static getCaducados = () =>{
        return axios.get('http://cuernavaca.xyz/products/expired',{
            responseType: 'json'
        });
    };



    static getProm = () =>{
        return axios.get("http://cuernavaca.xyz/promotions",{
            responseType : 'json'
        });
    };

    static getPrombyIdLab = (id) => {
        return axios.get('http://cuernavaca.xyz/promotions/lab/' + id, {
            responseType: 'json'
        });
    };

    static getPrombyId = (id) => {
        return axios.get('http://cuernavaca.xyz/promotions/pro/' + id, {
            responseType: 'json'
        });
    };

    static getEmpleadosPorSucursal = (id) => {
        return axios.get('http://cuernavaca.xyz/employees/'+id, {
            responseType: 'json'
        });
    };
    static getSucursales= () => {
        return axios.get('http://cuernavaca.xyz/branches',{
            responseType: 'json'
        });
    };
    static getEmpleados= () => {
        return axios.get('http://cuernavaca.xyz/employees',{
            responseType: 'json'
        });
    };



    static getDoctores = () => {
        return axios.get("http://cuernavaca.xyz/doctors",{
            responseType: 'json'
        });
    }
    static  authUser = (user, password) => {
        return axios.post("http://cuernavaca.xyz/login",{
            nombre_use: user,
            password: password
        },{
            responseType: 'json'
        });
    }
    static getValidacion = (token) => {
        return axios.post('http://cuernavaca.xyz/validar',{
           token: token
        });
        //No valido = null Valido = true/notFound
    };
    static getLogin = (nombre_us,password) =>{
        return axios.post('http://cuernavaca.xyz/login',{
            nombre_us: nombre_us,
            password: password
        });
        //noFound=true/error/
    }

}

export default Consultas;
