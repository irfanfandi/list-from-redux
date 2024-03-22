import { Suspense, lazy } from "react";
import {
  Routes as ReactRoutes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

const HomePage = lazy(() => import(`./pages/Home`));
const PathRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
];
const Routes = () => {

  return (
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <ReactRoutes>
          {PathRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </ReactRoutes>
      </Suspense>
    </Router>
  );
};

export default Routes;
