"use strict";

class UserStorage {
  static #users = {
    id: ["men1", "2dfsj", "김팀장"],
    password: ["1234", "2341", "123456"],
    name: ["박씨", "김씨", "이씨"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userinfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userinfo;
  }
  static save(userinfo) {
    const users = this.#users;
    users.id.push(userinfo.id);
    users.name.push(userinfo.name);
    users.password.push(userinfo.password);
    console.log(users);
  }
}

module.exports = UserStorage;
