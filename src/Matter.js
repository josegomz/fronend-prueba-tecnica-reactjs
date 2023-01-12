import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ListaMaterias from './Components/ListaMaterias'
import FormMaterias from './Components/FormMaterias'

function Matter() {
  const [Materia, setMateria] = useState({
    materia: "",
    promedio: 0.0,
    semestre: "",
  });
  const [Materias, setMaterias] = useState([]);
  const [tablaModificada, setTablaModificada] = useState(false);
  const [accion, setAccion] = useState("");

  useEffect(() => {
    const getMaterias = () => {
      fetch("http://localhost:80/api/materia")
        .then((res) => res.json())
        .then((res) => setMaterias(res));
    };
    getMaterias();
    setTablaModificada(false);
  }, [tablaModificada]);
  return (
    <Fragment>
      <Navbar brand="Prueba técnica - Materias" />
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Lista de Materias</h2>
        <br></br>
        <button
          onClick={() => setAccion("create")}
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modal-form-materia"
        >
          Agregar Materia
        </button>
        <br />
        <br />
        <ListaMaterias
          Materias={Materias}
          setMateria={setMateria}
          tablaModificada={tablaModificada}
          setTablaModificada={setTablaModificada}
          setAccion={setAccion}
        ></ListaMaterias>
        
        <FormMaterias Materia={Materia} setMateria={setMateria} accion={accion} setAccion={setAccion}></FormMaterias>

      </div>
    </Fragment>
  );
}
export default Matter;
