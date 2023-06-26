"use strict";

class UserStorage {
  static #users = {
    id: ["men1", "2dfsj", "김팀장"],
    password: ["1234", "2341", "123456"],
    names: ["박씨", "김씨", "이씨"],
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
}

module.exports = UserStorage;
