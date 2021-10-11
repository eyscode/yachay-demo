import './Jobs.css';
import PeruMap from "./PeruMap";
import {Dropdown} from "semantic-ui-react";
import React from "react";

export default function Jobs() {
  const jobs = [
    ["Desarrollador de software", 324, "S/ 5000 - S/ 9000"], ["Investigador", 305, "S/ 4000 - S/ 7000"],
    ["Analista de seguridad", 280, "S/ 6000 - S/ 5500"], ["Analista de riesgos", 250, "S/ 3000 - S/ 6500"],
    ["Gerente de producto", 220, "S/ 5000 - S/ 9000"], ["Gerente de Marketing", 170, "S/ 5000 - S/ 9000"],
    ["CEO", 134, "S/ 10000 - S/ 12000"], ["Instructor", 98, "S/ 6000 - S/ 7000"],
    ["Gerente de ventas", 76, "S/ 5000 - S/ 9000"], ["Ingeniero sonido", 34, "S/ 5000 - S/ 9000"]
  ];
  return (
    <div>
      <div className="title">
        <h4>
          Análisis general del
          <Dropdown
            defaultValue="lq"
            className="title-dropdown"
            fluid
            selection
            options={[
              {
                "key": "lm", "value": "lm", "text": "Último mes"
              },
              {
                "key": "lq", "value": "lq", "text": "Último trimestre"
              },
              {
                "key": "ls", "value": "ls", "text": "Último semestre"
              },
              {
                "key": "ly", "value": "ly", "text": "Último año"
              }
            ]}
          />
        </h4>
      </div>
      <hr/>
      <div>
        <div className="title">
          <div className="row jobs-percentages">
            <div className="col-md-4">
              <h3>987 300</h3>
              <p>oportunidades laborales en el período</p>
            </div>
            <div className="col-md-4">
              <h3>Desarrollador de software</h3>
              <p>profesión con mayor variación de demanda en el período</p>
            </div>
            <div className="col-md-4">
              <h3>Tecnologías de la Información</h3>
              <p>sector con mayor variación de demanda en el período</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div>
        <div className="title">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-striped">
                <thead className="bg-secondary">
                <tr>
                  <td scope="col" colSpan="2" style={{"color": "white"}}>
                    Principales trabajos actuales
                  </td>
                  <td scope="col" style={{"color": "white"}}>
                    Total de oportunidades
                  </td>
                  <td scope="col" style={{"color": "white"}}>
                    Rango salarial
                  </td>
                </tr>
                </thead>
                <tbody>
                {jobs.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{fontSize: 12}}>{index + 1}</td>
                      <td scope="row">{item[0]}</td>
                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                    </tr>
                  )
                })}
                </tbody>

              </table>
            </div>
            <div className="col-md-6">
              <PeruMap/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}