import React,{Fragment,useState,useEffect} from "react";
import Navbar from "./Components/Navbar";
import ListaAlumnos from "./Components/ListaAlumnos"
import FormAlumno from './Components/FormAlumno'
function Student() {
  const [Alumno, setAlumno] = useState({
    nombre: '',
    apellidos: '',
    matricula: '',
    carrera: ''
  })
  const [Alumnos, setAlumnos] = useState([])
  const [tablaModificada, setTablaModificada] = useState(false)
  const [accion, setAccion] = useState('')

  useEffect(()=>{
    const getAlumnos =()=>{
      fetch('http://localhost:80/api/alumno').then(res => res.json() ).then(res => setAlumnos(res))  
    }
    getAlumnos()
    setTablaModificada(false);
  },[tablaModificada]);
  return (
    <Fragment>
      <Navbar brand="Prueba técnica - Alumnos" />
      <div className="container">
        <h2 style={{textAlign: 'center'}}>Lista de Alumnos</h2>
        <br></br>
        <button onClick={()=>setAccion('create')} type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-form-alumno">Agregar Alumno</button>
        <br/><br/>
        <ListaAlumnos Alumnos={Alumnos} setAlumno={setAlumno} tablaModificada={tablaModificada} setTablaModificada ={setTablaModificada} setAccion={setAccion}></ListaAlumnos>
      </div>
    <FormAlumno Alumno={Alumno} setAlumno={setAlumno} accion={accion} setAccion={setAccion}></FormAlumno>
    </Fragment>
  );
}

export default Student;
