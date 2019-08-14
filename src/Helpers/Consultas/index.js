import axios from 'axios';
class Consultas {
    static  getVentas=()=> {
        return axios.get('http://cuernavaca.xyz/sales/recent',{
            responseType: 'json'
        });
    };
    static getVentasID=(id)=>{
        return axios.get('http://cuernavaca.xyz/sales/venta/'+id,{
            responseType: 'json'
        });
    };
    static getVentasRangoFechas=(FechaI,FechaF)=>{
        return axios.post('http://cuernavaca.xyz/sales',{
            inicio:FechaI,
            final:FechaF
        },{responseType: 'json'});
    };
}

export default Consultas;
