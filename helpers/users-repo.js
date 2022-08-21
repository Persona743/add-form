const fs = require('fs');

let users = require('data/users.json');

export const usersRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

function getAll() {
    return users;
}

function getById(id) {
    return users.find((x) => x.id.toString() === id.toString());
}

function create({ name, ida, latitude, longitude, type, ip1, ip2, ip3, ip4 }) {
    const user = { name, ida, latitude, longitude, type, ip1, ip2, ip3, ip4 };

    // validate
    if (users.find((x) => x.ida === user.ida))
        throw `User with the ID ${user.ida} already exists`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(
    id,
    { name, ida, latitude, longitude, type, ip1, ip2, ip3, ip4 }
) {
    const params = { name, ida, latitude, longitude, type, ip1, ip2, ip3, ip4 };
    const user = users.find((x) => x.id.toString() === id.toString());

    // validate
    if (
        params.ida !== user.ida &&
        users.find((x) => x.ida === params.ida)
    )
        throw `User with the ID ${params.ida} already exists`;

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter((x) => x.id.toString() !== id.toString());
    saveData();
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}
