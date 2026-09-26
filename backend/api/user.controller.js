import UserDao from "../dao/UserDAO.js";

export default class UserController {
  static async apiPostNewUser(req, res, next) {
    try {
      const date = new Date();
      const username = req.body.username;
      const password = req.body.password;

      await UserDao.addUser(username, password, date);

      res.json({ status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
