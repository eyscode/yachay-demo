import './Skills.css';

export default function Jobs() {
  return (
    <div>
      <div className="title">
        <h4>Principales prioridades en las carreras</h4>
        <br/>
        <div className="row">
          <div className="col-md-3 text-right">
            Salario
          </div>
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar bg-color-2" role="progressbar" style={{width: "32%"}} aria-valuenow="15"
                   aria-valuemin="0"
                   aria-valuemax="100">
                <span>32%</span>
              </div>
              <div className="progress-bar bg-color-3" role="progressbar" style={{width: "22%"}} aria-valuenow="30"
                   aria-valuemin="0" aria-valuemax="100">
                <span>22%</span>
              </div>
              <div className="progress-bar bg-color-4" role="progressbar" style={{width: "46%"}} aria-valuenow="20"
                   aria-valuemin="0" aria-valuemax="100">
                <span>46%</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-3 text-right">
            Estabilidad Laboral
          </div>
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar bg-color-2" role="progressbar" style={{width: "23%"}} aria-valuenow="15"
                   aria-valuemin="0"
                   aria-valuemax="100">
                <span>23%</span>
              </div>
              <div className="progress-bar bg-color-3" role="progressbar" style={{width: "43%"}} aria-valuenow="30"
                   aria-valuemin="0" aria-valuemax="100">
                <span>43%</span>
              </div>
              <div className="progress-bar bg-color-4" role="progressbar" style={{width: "34%"}} aria-valuenow="20"
                   aria-valuemin="0" aria-valuemax="100">
                <span>34%</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-3 text-right">
            Opciones Laborales
          </div>
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar bg-color-2" role="progressbar" style={{width: "51%"}} aria-valuenow="15"
                   aria-valuemin="0"
                   aria-valuemax="100">
                <span>51%</span>
              </div>
              <div className="progress-bar bg-color-3" role="progressbar" style={{width: "29%"}} aria-valuenow="30"
                   aria-valuemin="0" aria-valuemax="100">
                <span>29%</span>
              </div>
              <div className="progress-bar bg-color-4" role="progressbar" style={{width: "20%"}} aria-valuenow="20"
                   aria-valuemin="0" aria-valuemax="100">
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row justify-content-md-center skills-boxes">
          <div className="col-md-2">
            <div className="box bg-color-2"></div>
            <span>Primer puesto</span>
          </div>
          <div className="col-md-2">
            <div className="box bg-color-3"></div>
            <span>Segundo puesto</span>
          </div>
          <div className="col-md-2">
            <div className="box bg-color-4"></div>
            <span>Tercer puesto</span>
          </div>
        </div>
      </div>
      <hr/>
      <div className="title">
        <h4>Tipo de carrera</h4>
        <br/>
        <div className="row">
          <div className="col-md-3 text-right">
            Industria
          </div>
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar bg-color-5" role="progressbar" style={{width: "60%"}} aria-valuenow="15"
                   aria-valuemin="0"
                   aria-valuemax="100">
                <span>147</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-3 text-right">
            Ambiente de trabajo
          </div>
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar bg-color-5" role="progressbar" style={{width: "43%"}} aria-valuenow="15"
                   aria-valuemin="0"
                   aria-valuemax="100">
                <span>113</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-3 text-right">
            Posición Laboral
          </div>
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar bg-color-5" role="progressbar" style={{width: "80%"}} aria-valuenow="15"
                   aria-valuemin="0"
                   aria-valuemax="100">
                <span>178</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
      <hr/>
      <div className="title">
        <h4>Skills mas solicitados</h4>
        <br/>
        <div className="row justify-content-md-center">
          <div className="col-md-3">
            <p>1. Cloud Computing</p>
            <p>2. Análisis estadístico</p>
            <p>3. Desarrollo web</p>
            <p>4. Diseño de Interfaces de usuario</p>
            <p>5. Seguridad de la información</p>
          </div>
          <div className="col-md-3">
            <p>6. Desarrollo móbil</p>
            <p>7. Presentación de datos</p>
            <p>8. SEO Marketing</p>
            <p>9. Administración de BD</p>
            <p>10. Diseño de algoritmos</p>
          </div>
        </div>
      </div>
    </div>
  );
}