"use strict";

const fs = require("fs").promises;

class UserStorage {
  static getUsers(...fields) {
    //const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userinfo = usersKeys.reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {});

        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userinfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userinfo;
  }

  static save(userinfo) {
    //const users = this.#users;
    users.id.push(userinfod);
    users.name.push(userinfo.name);
    users.password.push(userinfo.password);
    console.log(users);
  }
}

module.exports = UserStorage;
