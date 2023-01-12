import React from "react";

const FormMaterias = ({Materia,setMateria,accion,setAccion}) => {
    const handleChange = e =>{
        setMateria({
            ...Materia,
            [e.target.name]:e.target.value
        })
    }
    let{materia,promedio,semestre} = Materia

    const handleSubmit =()=>{
        promedio = parseFloat(promedio)
        //VALIDACIÓN
        if (materia ==='' || promedio < 0 || semestre===''){
            alert('Todos los campos son obligatorios')
            return
        }
        //CREAR ALUMNO
        if(accion==='create'){
            const requestInit ={
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(Materia)
            }
            //CONSULTA
            fetch('http://localhost:80/api/materia',requestInit).then(res => res.json() ).then(res => console.log(res))      
        }
        //ACTUALIZAR ALUMNO
        else if(accion==='update'){
            const requestInit ={
                method:'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(Materia)
            }
            //CONSULTA
            fetch('http://localhost:80/api/materia/'+Materia.id,requestInit).then(res => res.json() ).then(res => console.log(res))
        }
    }
    const clearState =()=>{
        setMateria({
            materia: '',
            promedio: 0.0,
            semestre: ''
        })
    }

    return (
        <div className="modal fade" id="modal-form-materia" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Materia</h5>
                        <button onClick={clearState} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <label htmlFor="Materia" className="form-label">Materia</label>
                            <input value={materia} name="materia" onChange={handleChange} type="text" id="materia" className="form-control"></input>
                            <label htmlFor="Promedio" className="form-label">Promedio</label>
                            <input value={promedio} name="promedio" onChange={handleChange} type="number" max={10.0} min={0.0} step={0.1} id="promedio" className="form-control"></input>
                            <label htmlFor="Semestre" className="form-label">Semestre</label>
                            <input value={semestre} name="semestre" onChange={handleChange} type="text" id="semestre" className="form-control"></input>
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

export default FormMaterias;