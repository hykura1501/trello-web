import config from "#/config/routes";

import Login from "#/pages/Auth/Login";
import Board from "#/pages/Boards/Board";

const publicRoutes = [
  { path: config.Login, components: Login },
  { path: config.Board, components: Board },
];

export default publicRoutes;
