import config from "#/config/routes";

import Login from "#/pages/Auth/Login";
import Register from "#/pages/Auth/Register";
import Board from "#/pages/Boards/Board";
import Home from "#/pages/Home/Home";

const publicRoutes = [
  { path: config.BoardID, components: Board },
  { path: config.Login, components: Login },
  { path: config.Register, components: Register },
  { path: config.Home, components: Home },
  { path: config.Board, components: Home },
  { path: config.Template, components: Home },
];

export default publicRoutes;
