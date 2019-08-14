import React from "react";
import Consultas from "../Consultas";
class ReportesA {
    static getEncabezado=(valor)=>{
        let Encabezado = [];
       // console.log(valor);
        Object.keys(valor[0]).forEach((Frase, index) => {
            Encabezado.push(<td key={index}>{Frase}</td>);
        });
        return Encabezado;
    };
    static getTablaDianmica=(Array)=>{
        let Valores=[];
        Object.values(Array).forEach((item, index) => {
            let Valor = [];
            this.getEncabezado(Array).forEach((frase, index) => {
                Valor.push(<td key={index}>{item[frase.props.children]}</td>);
            });
         //   console.log(Valor);
            Valores.push(<tr key={index}>{Valor}</tr>);
        });
        return Valores;
    };


    //Ventas

    static getTablaFiltroFechas(FI,FF){
        Consultas.getVentasRangoFechas(FI, FF).then(e => {
            if (e.data.notFound) {
                return  null;
            } else {
                console.log(e.data)

                return e.data['result']
            }
        }).catch((e) => {
            return 1;
            console.log(e)
        });
        return null;
    }
}


export default ReportesA;
