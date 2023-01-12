import React from "react";

const FormAlumno = ({Alumno,setAlumno,accion,setAccion}) => {
    const handleChange = e =>{
        setAlumno({
            ...Alumno,
            [e.target.name]:e.target.value
        })
    }
    let{nombre,apellidos,matricula,carrera} = Alumno

    const handleSubmit =()=>{
        //VALIDACIÓN
        if (nombre ==='' || apellidos ==='' || matricula==='' || carrera ===''){
            alert('Todos los campos son obligatorios')
            return
        }
        //CREAR ALUMNO
        if(accion==='create'){
            const requestInit ={
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(Alumno)
            }
            //CONSULTA
            fetch('http://localhost:80/api/alumno',requestInit).then(res => res.json() ).then(res => console.log(res))      
        }
        //ACTUALIZAR ALUMNO
        else if(accion==='update'){
            const requestInit ={
                method:'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(Alumno)
            }
            //CONSULTA
            fetch('http://localhost:80/api/alumno/'+Alumno.id,requestInit).then(res => res.json() ).then(res => console.log(res))
        }
    }
    const clearState =()=>{
        setAlumno({
            nombre: '',
            apellidos: '',
            matricula: '',
            carrera: ''
        })
    }

    return (
        <div className="modal fade" id="modal-form-alumno" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Alumno</h5>
                        <button onClick={clearState} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <label htmlFor="Nombre" className="form-label">Nombre</label>
                            <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"></input>
                            <label htmlFor="Apellidos" className="form-label">Apellidos</label>
                            <input value={apellidos} name="apellidos" onChange={handleChange} type="text" id="apellidos" className="form-control"></input>
                            <label htmlFor="Matricula" className="form-label">Matricula</label>
                            <input value={matricula} name="matricula" onChange={handleChange} type="text" id="matricula" className="form-control"></input>
                            <label htmlFor="Carrera" className="form-label">Carrera</label>
                            <input value={carrera} name="carrera" onChange={handleChange} type="text" id="carrera" className="form-control"></input>
                        </div>
                        <div className="modal-footer">
                            <button onClick={clearState} type="button" className="btn btn-secondary" data-dismiss="modal"> Cancelar </button>
                            <button type="submit" className="btn btn-success"> Guardar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormAlumno;