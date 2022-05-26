import logo from './new_logo_white.png';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Jobs from "./Jobs";
import Skills from "./Skills";
import appStore from "./AppStore";
import {useHistory} from "react-router-dom";
import Positions from "./Positions";
import Careers from "./Careers";

export default function Main() {
  let {path, url} = useRouteMatch();
  let history = useHistory();
  const logout = (a) => {
    appStore.signed = false;
    history.push("/");
  };
  return (
    <div className="main">
      <nav className="py-3 border-bottom sticky-top navbar navbar-dark bg-color-6">
        <div className="container-fluid">
          <a className="navbar-brand d-md-block collapse">
            <img src={logo} alt="logo" height={30} className="bi me-2"/>
          </a>
          <div className="dropdown e-md-block collapse">
            <a href="#"
               className="navbar-brand d-flex align-items-center col-lg-4 mb-lg-0 text-decoration-none dropdown-toggle"
               id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={logo} alt="logo" height={30} className="bi me-2"/>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
              <li><Link className="nav-link" to={`${url}job-offers`}>Oferta laboral</Link></li>
              <li><Link className="nav-link" to={`${url}top-skills`}>Top Skills</Link></li>
              <li><Link className="nav-link" to={`${url}hard-to-fill-jobs`}>Posiciones</Link></li>
              <li><Link className="nav-link" to={`${url}careers`}>Carreras</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Mes actual</a></li>
              <li><a className="dropdown-item" href="#">Último trimestre</a></li>
              <li><a className="dropdown-item" href="#">Último semestre</a></li>
              <li><a className="dropdown-item" href="#">Año Actual</a></li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 dropdown">
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2"
                 data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
              </a>
              <ul className="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" href="#">Configuración</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#" onClick={logout}>Salir</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}job-offers`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-shopping-cart">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Oferta Laboral
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}top-skills`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-bar-chart-2">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    Calificaciones Requeridas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}hard-to-fill-jobs`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-users">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Posiciones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}careers`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-layers">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    Carreras
                  </Link>
                </li>
              </ul>

              <h6
                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reportes guardados</span>
                <a className="link-secondary" href="#" aria-label="Add a new report">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="feather feather-plus-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-file-text">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Mes actual
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-file-text">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Último trimestre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-file-text">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Último semestre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-file-text">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Año Actual
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path={path}>
                <h3>Dashboard</h3>
              </Route>
              <Route path={`${path}job-offers`}>
                <Jobs/>
              </Route>
              <Route path={`${path}top-skills`}>
                <Skills/>
              </Route>
              <Route path={`${path}hard-to-fill-jobs`}>
                <Positions/>
              </Route>
              <Route path={`${path}careers`}>
                <Careers/>
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
}