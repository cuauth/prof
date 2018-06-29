import React from "react";
import ReactDOM from "react-dom";
import ListaAumnos from './components/ListaAlumnos'

import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')
const inicio = moment()
const alumnos = [
  {nombre: 'alberto garcia orozco'},
  {nombre: 'ernesto lizarraga osuna'},
  {nombre: 'lucia mira lagos'}
]
const DbObject = {
  alumnos: alumnos,
  listaFechas: {
    inicio: inicio,
    fin: moment(inicio).add(15, 'days')

  } 
}
const Index = () => {
  return <ListaAumnos {...DbObject}/>;
};

ReactDOM.render(<Index />, document.getElementById("index"));