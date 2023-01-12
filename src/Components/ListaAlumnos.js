import React from "react";
const ListaAlumnos = ({Alumnos, setAlumno, tablaModificada, setTablaModificada,setAccion})=>{
    const eliminarAlumno = id=>{
        const requestInit ={
            method:'DELETE'
        }
        fetch('http://localhost:80/api/alumno/'+id,requestInit).then(res => res.text() ).then(res => console.log(res))  
        setTablaModificada(true)
    }
    const editarAlumno = a =>{
        setAccion('update')
        setAlumno(a)
    }

    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Matricula</th>
                    <th>Carrera</th>
                    <th colSpan={2}>Opciones</th>
                </tr>
            </thead>
            <tbody> 
                {Alumnos.map(a =>(
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.nombre}</td>
                        <td>{a.apellidos}</td>
                        <td>{a.matricula}</td>
                        <td>{a.carrera}</td>

                        <td><button onClick={()=>editarAlumno(a)} type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-form-alumno">Editar</button></td>
                        <td><button onClick={()=> eliminarAlumno(a.id)} className="btn btn-danger">Eliminar</button></td>

                    </tr>
                ))} 
            </tbody>
        </table>
    );
}
export default ListaAlumnos;