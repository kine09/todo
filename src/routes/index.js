import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Todo from "../pages/todo";

const configRoute = [
  { path: "/", component: App },
  { path: "login", component: Login },
  { path: "todo", component: Todo },
];
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {configRoute.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={`route-${route.path}-${index}`}
              path={route.path}
              element={<Component />}
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
