const { userRepo } = require("../repo/user.repo");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateAccesstoken } = require("../middleware/auth");
const User = require("../schema/user.schema");
const { sendMail } = require("../service/mail.service").mailService;

class UserService {
  login = async (data) => {
    let userCond = { email: data.email, is_active: true };
    let user = await userRepo.findUser(userCond);
    let passcond = {
      user_id: user._id,
      roles_id: user.roles_id,
    };
    let pswrd = await userRepo.findUserCred(passcond);
    if (user == null) {
      return res.status(400).send("Cannot find user email");
    } else {
      console.log(user);
      if (await bcrypt.compare(data.password, pswrd.password)) {
        console.log(user);
        const accessToken = await generateAccesstoken({
          _id: user._id,
          roles_id: user.roles_id,
        });
        return Promise.resolve({
          data: {accessToken,userData:user},
          success: true,
        });
      } else {
        return Promise.reject({
          success: false,
          messageKey: "Not Allowed",
        });
      }
    }
  };

  addUser = async (data) => {
    let isExist = await userRepo.findUser({ email: data.email });
    if (isExist) {
      return Promise.reject({
        success: false,
        messageKey: "User Already Exits",
      });
    } else {
      let resData = await userRepo.addUser(data);
      let hashPassword = bcrypt.hashSync(data.password, 10);
      let usersCred = {
        user_id: resData._id,
        password: hashPassword,
      };

      let saveCred = await userRepo.addUserCred(usersCred);
      if (saveCred) {
        // sending verification to user email+
        const to = resData.email;
        const subject = "Verify your Account";
        const html = `Test`;
        sendMail(to, subject, html);
        return Promise.resolve({
          success: true,
          messageKey: "register",
        });
      } else {
        return Promise.reject({
          success: false,
          messageKey: "error",
        });
      }
    }
  };

  addUserCred = async (data) => {
    let resData = await userRepo.addUserCred(data);
    if (resData)
      return Promise.resolve({
        success: true,
        messageKey: "register",
      });
    else
      return Promise.reject({
        success: false,
        messageKey: "error",
      });
  };

  verifyUser = async (req, res) => {
    const token = req.params.token;

    jwt.verify(token, process.env.JWTKEY, async (err, payload) => {
      if (err) res.sendStatus(403);
      jwt.verify(cookie_token, process.env.JWTKEY, async (err, user) => {
        if (err) res.sendStatus(403);
        let newUser = new User(user);

        try {
          await newUser.save();
        } catch (err) {
          res.json({ message: err.message });
        }
      });
    });
  };
}

module.exports = {
  userService: new UserService(),
};
