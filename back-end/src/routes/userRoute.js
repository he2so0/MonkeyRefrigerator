//userRoute.js
module.exports = function (app) {
  const user = require("../controller/UserController");
  // const jwtMiddleware = require('../config/jwt');

  app.route("/signUp").get(user.checkIdDouble);
  // app.route('/board/detail').get(board.findBoardAll);
};
