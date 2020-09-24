const authService = require("./auth.service");
const logger = require("../../services/logger.service");

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await authService.login(email, password);
    req.session.user = user;
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
    // logger.debug(
    //   acount ? `auth.route - new account created: ` + JSON.stringify(acount) : `auth.route - This email account: ${eamil}, already exists, will be sent for a password check`
    // );
    // const isAlreadyExistsAtRegistration = acount? false: true
    const user = await authService.login(credantials.email, credantials.password);
    // const user = await authService.login(email, password, isAlreadyExistsAtRegistration);
    req.session.user = user;
    res.json(user);
  } catch (err) {
    logger.error("[SIGNUP] " + err);
    res.status(500).send({ error: "could not signup, please try later" });
  }
}


async function logout(req, res) {
  console.log('/////////////////////////////////////////////////im ');
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
