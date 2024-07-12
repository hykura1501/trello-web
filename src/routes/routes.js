import config from "#/config/routes";

import Login from "#/pages/Auth/Login";
import Register from "#/pages/Auth/Register";
import Board from "#/pages/Boards/Board";

const publicRoutes = [
  { path: config.Board, components: Board },
  { path: config.Login, components: Login },
  { path: config.Register, components: Register },
];

export default publicRoutes;
