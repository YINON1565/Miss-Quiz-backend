const userService = require('./user.service')

async function getUser(req, res) {
    // const id = req.params.id
    // const user = id.includes('@')? await userService.getByEmail(id) : await userService.getById(id);
    const user = await userService.getById(req.params.id)
    res.send(user)
}
  
async function getUsers(req, res) {
    const users = await userService.query(req.query)
    res.send(users)
    // if (req.query.count) res.json(users)
    // else res.send(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUser(req, res) {
    let user = req.body;
    user  = await userService.update(user)
    res.send(user)
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser
}