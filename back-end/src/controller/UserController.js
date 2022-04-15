//UserController.js
const response = require("../utils/response");

const userDao = require("../dao/UserDao");

module.exports = {
  checkIdDouble: async function (req, res) {
    try {
      const userList = await UserDao.selectUserIdCheck();
      if (userList === undefined) {
        return res.json(response.successFalse(1002, "전체 사용자가 없습니다."));
      }

      return res.json(
        response.successTrue(
          2001,
          "전체 사용자 조회에 성공하였습니다.",
          boardList
        )
      );
    } catch (err) {
      return res.json(
        response.successFalse(
          1001,
          "서버와 통신에 실패하였습니다. UserController/UserDao error - checkIdDouble"
        )
      );
    }
  },
};
