import {Redirect, Route} from "react-router-dom";
import appStore from "./AppStore";

export default function PrivateRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        appStore.signed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}