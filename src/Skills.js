import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './Skills.css';


const jobOptions = [
  { key: 'af', value: 'af', text: 'Desarrollador de software' },
  { key: 'ax', value: 'ax', text: 'Investigador' },
  { key: 'al', value: 'al', text: 'Analista de seguridad' },
  { key: 'dz', value: 'dz', text: 'Analista de riesgos' },
  { key: 'as', value: 'as', text: 'Gerente de producto' },
  { key: 'ad', value: 'ad', text: 'Gerente de Marketing' },
  { key: 'ao', value: 'ao', text: 'Gerente de ventas' },
  { key: 'ai', value: 'ai', text: 'Ingeniero sonido' }
]

export default function Skills() {
  return (
    <div>
      <div className="title">
        <h4>
          Top calificaciones requeridas para
          <Dropdown
            defaultSearchQuery="Desarrollador de software"
            className="job-dropdown"
            placeholder='Seleccionar profesión'
            fluid
            search
            selection
            options={jobOptions}
          />
        </h4>
      </div>
      <hr/>
      <div className="title">
        <h4>Certificaciones</h4>
        <br/>
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <p>1. Amazon Web Services (AWS) Certified Developer - Associate</p>
            <p>2. Associate Software Developer Certification</p>
            <p>3. Certified Secure Software Lifecycle Professional</p>
            <p>4. Certified Software Engineer (CSE)</p>
            <p>5. CIW Web Development Professional</p>
          </div>
          <div className="col-md-5">
            <p>6. Microsoft Technology Associate - HTML5 App Development Fundamentals</p>
            <p>7. Microsoft Technology Associate - Software Development Fundamentals</p>
            <p>8. Oracle Application Express 18: Developer Certified Professional</p>
            <p>9. Professional Software Developer Certification</p>
            <p>10. Professional Software Engineering Master Certification</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className="title">
        <h4>Skills</h4>
        <br/>
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <p>1. Cloud Computing</p>
            <p>2. Análisis estadístico</p>
            <p>3. Desarrollo web</p>
            <p>4. Diseño de Interfaces de usuario</p>
            <p>5. Seguridad de la información</p>
          </div>
          <div className="col-md-5">
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