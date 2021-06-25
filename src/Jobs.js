import './Jobs.css';
import PeruMap from "./PeruMap";

export default function Jobs() {
  const jobs = [
    ["Desarrollador de software", "10.5"], ["Investigador", "8, 7"], ["Profesor", "7.6"],
    ["Analista de riesgos", "7.0"], ["Gerente de producto", "6.7"], ["Gerente de Marketing", "5.0"],
    ["CEO", "4.0"], ["Instructor", "3.2"], ["Gerente de ventas", "2.9"], ["Ingeniero sonido", "1.0"],
    ["Desarrollador de software", "10.5"], ["Investigador", "8, 7"], ["Profesor", "7.6"],
    ["Analista de riesgos", "7.0"], ["Gerente de producto", "6.7"], ["Gerente de Marketing", "5.0"],
    ["CEO", "4.0"], ["Instructor", "3.2"], ["Gerente de ventas", "2.9"], ["Ingeniero sonido", "1.0"]
  ];
  return (
    <div>
      <div className="title">
        <h4>Análisis General</h4>
      </div>
      <br/>
      <div className="row jobs-percentages">
        <div className="col-md-4">
          <h3>66%</h3>
          <p>trabajando durante el primer año de graduación</p>
        </div>
        <div className="col-md-4">
          <h3>22%</h3>
          <p>trabajando en su campo de estudio durante el primer año de graduación</p>
        </div>
        <div className="col-md-4">
          <h3>17%</h3>
          <p>trabajando en su campo de estudio</p>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-striped">
            <thead className="bg-secondary">
            <tr>
              <td scope="col" colSpan="3" style={{"color": "white"}}>
                Principales trabajos actuales
              </td>
            </tr>
            </thead>
            <tbody>
            {jobs.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{fontSize: 12}}>{index + 1}</td>
                  <td scope="row">{item[0]}</td>
                  <td>{item[1]}%</td>
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
  );
}