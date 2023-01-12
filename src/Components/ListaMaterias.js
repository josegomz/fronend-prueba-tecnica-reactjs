import React from "react";
const ListaMaterias = ({Materias, setMateria, tablaModificada, setTablaModificada,setAccion})=>{
    const eliminarMateria = id=>{
        const requestInit ={
            method:'DELETE'
        }
        fetch('http://localhost:80/api/materia/'+id,requestInit).then(res => res.text() ).then(res => console.log(res))  
        setTablaModificada(true)
    }
    const editarMateria = m =>{
        setAccion('update')
        setMateria(m)
    }

    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Materia</th>
                    <th>Promedio</th>
                    <th>Semestre</th>
                    <th colSpan={2}>Opciones</th>
                </tr>
            </thead>
            <tbody> 
                {Materias.map(m =>(
                    <tr key={m.id}>
                        <td>{m.id}</td>
                        <td>{m.materia}</td>
                        <td>{m.promedio}</td>
                        <td>{m.semestre}</td>
                        <td><button onClick={()=>editarMateria(m)} type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-form-materia">Editar</button></td>
                        <td><button onClick={()=> eliminarMateria(m.id)} className="btn btn-danger">Eliminar</button></td>

                    </tr>
                ))} 
            </tbody>
        </table>
    );
}

export default ListaMaterias;