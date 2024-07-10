import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "#/routes/routes";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.components;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Page></Page>}
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}
export default App;
