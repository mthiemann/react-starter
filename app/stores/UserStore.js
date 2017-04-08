import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';

class UserStore extends EventEmitter {

  constructor() {
    super();
    this.keyCounter = 0;
    this.users = [];

    dispatcher.register(action => this.handleActions(action));
  }

  initialize(numInitialUsers) {
    for (let i = 0; i < numInitialUsers; i += 1) {
      this.addUser();
    }
  }

  getNewUser(username) {
    this.keyCounter += 1;
    return {
      key: this.keyCounter,
      username,
    };
  }

  getAllUsers() {
    return this.users;
  }

  addUser(username = '') {
    this.users.push(this.getNewUser(username));
    this.emit('change');
  }

  updateUser(userId, username) {
    this.users = this.users.map((user) => {
      if (user.key === userId) {
        user.username = username;
      }
      return user;
    });
    this.emit('change');
  }

  removeUser(userId) {
    this.users = this.users.filter(user => user.key !== userId);
    this.emit('change');
  }

  handleActions(action) {
    if (action.type === 'add-user') {
      this.addUser(action.username);
    } else if (action.type === 'update-user') {
      this.updateUser(action.id, action.username);
    } else if (action.type === 'remove-user') {
      this.removeUser(action.id);
    }
  }

}

const userStore = new UserStore();

export default userStore;
