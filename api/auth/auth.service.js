const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
const logger = require("../../services/logger.service");

const saltRounds = 10;

// async function login(email, password, isWithGoogle) {
// if (!email || (!password && !isWithGoogle))
async function login(email, password) {
  logger.debug(`auth.service - login with email: ${email}`);
  if (!email || !password)
    return Promise.reject("email and password are required!");
  const user = await userService.getByEmail(email);
  if (!user) return Promise.reject("Email does not exist");
  // if (!isWithGoogle) {
  const match = await bcrypt.compare(password, user.password);
  if (!match) return Promise.reject("Invalid email or password");
  // }
  delete user.password;
  // delete user.isWithGoogle;
  return user;
}

async function signup(credantials) {
  if (!credantials.name || !credantials.password || !credantials.email)
    return Promise.reject("name, email and password are required!");
  logger.debug(`auth.service - signup with email: ${credantials.email}`);
  const hash = await bcrypt.hash(credantials.password, saltRounds);
  credantials.password = hash
  return userService.add(credantials);
}

async function cheackIsAlreadyExists(email){
  return !!await userService.getByEmail(email);
}

module.exports = {
  signup,
  login,
  cheackIsAlreadyExists
};
