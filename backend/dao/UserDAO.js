let users;

export default class RegisterDAO {
  static async injectDB(conn) {
    try {
      users = await conn.collection("users");
    } catch (err) {
      console.error(err);
    }
  }

  static async findUser(username) {}

  static async addUser(username, password, date) {
    try {
      const newUser = {
        username,
        password,
        date,
      };

      await users.insertOne(newUser);
    } catch (err) {
      console.error(err);
    }
  }

  static async updateUser() {}

  static async deleteUser() {}
}
