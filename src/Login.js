import logo from './new_logo.png';
import appStore from "./AppStore";
import {useHistory} from "react-router-dom";

export default function Login(props) {
  let history = useHistory();
  let login = () => {
    appStore.signed = true;
    history.push("/job-offers");
  };
  return (
    <div className="main form-signin text-center">
      <form>
        <img className="mb-4" src={logo} alt="" height="100"/>
          <h1 className="h3 mb-3 fw-normal">Análitica del mercado laboral en tiempo real</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Recuérdame
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={login}>Entrar</button>
          <p className="mt-5 mb-3 text-muted">© 2020–2022</p>
      </form>
    </div>
  );
}