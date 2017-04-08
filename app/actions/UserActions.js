import dispatcher from '../Dispatcher';

export function addUser(username = '') {
  dispatcher.dispatch({
    type: 'add-user',
    username,
  });
}

export function updateUser(id, username) {
  dispatcher.dispatch({
    type: 'update-user',
    id,
    username,
  });
}

export function removeUser(id) {
  dispatcher.dispatch({
    type: 'remove-user',
    id,
  });
}
