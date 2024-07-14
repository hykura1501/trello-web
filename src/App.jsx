import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "#/routes/routes";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "#/services/authServices";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");
      if (token) {
        const headers = { Authorization: "Bearer " + token };
        const data = await getUser({ headers });
        setUser(data);
      }
    };
    fetchUser();
  }, []);
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.components;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Page user={user}></Page>}
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}
export default App;
