const UserSchema = require("../schema/user.schema");
const UserCredSchema = require("../schema/user.credentials");
class UserRepo {
  findUser = async (query) => {
    return UserSchema.findOne(query);
  };

  findUserCred = async (query) => {
    return UserCredSchema.findOne(query);
  };

  addUser = async (data) => {
    let userData = new UserSchema(Object.assign({}, data));
    return userData.save();
  };

  addUserCred = async (data) => {
    let userData = new UserCredSchema(Object.assign({}, data));
    return userData.save();
  };

  getUser= async(cond)=>{
    return UserSchema.find(cond)
    
};

}

module.exports = {
  userRepo: new UserRepo(),
};
