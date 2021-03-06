import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoggedInContext } from '../../services/loggedInContext';

const ProtectedRoute = ({ component: Component, ...props  }) => {
  const loggedIn = useContext(LoggedInContext);

  return (
    <Route>
      {() => loggedIn ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
)}

export default ProtectedRoute;
