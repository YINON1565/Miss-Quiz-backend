const authService = require("./auth.service");
const logger = require("../../services/logger.service");

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await authService.login(email, password);
    req.session.user = user;
    console.log(req.session.user,'user /////////////////////////////////');
    res.json(user);
  } catch (err) {
    res.status(401).send({ error: err });
  }
}

async function signup(req, res) {
  const credantials = req.body 
  
  try {
    if (await authService.cheackIsAlreadyExists(credantials.email)) {
      return res.status(500).send({ error: `${credantials.email} already exists` });
    }
    logger.debug(Object.values(req.body).join(' , '));
    const account = await authService.signup(JSON.parse(JSON.stringify(credantials)));
    logger.debug(`auth.route - new account created: ${JSON.stringify(account)}`);
    const user = await authService.login(credantials.email, credantials.password);
    req.session.user = user;
    res.json(user);
  } catch (err) {
    logger.error("[SIGNUP] " + err);
    res.status(500).send({ error: "could not signup, please try later" });
  }
}


async function logout(req, res) {
  try {
    req.session.destroy();
    res.send({ message: "logged out successfully" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
}

module.exports = {
  login,
  signup,
  logout,
};
