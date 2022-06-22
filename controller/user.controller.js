const { userService } = require("../service/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController {

     register = async (req, res, next) => {
        try {
            let { f_name,l_name,email,mobile,category_id,roles_id,address,password } = req.body;
            let data = {
                f_name: f_name,
                l_name:l_name,
                email:email,
                mobile:mobile,
                category_id:category_id,
                roles_id:roles_id,
                address:address,
                password:password,
            }
            let userData = await userService.addUser(data);
            this.renderJSON(req,res,userData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }

    login = async(req, res)=>{
        try {
            let {email,password } = req.body;
            let data = {
                email:email,
                password:password,
            }
            let userData = await userService.login(data);
            this.renderJSON(req,res,userData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
    getUser= async (req, res, next) => {
        try {
            let serData = await userService.getUser();
            this.renderJSON(req,res,serData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
};


module.exports = {
    userController: new UserController()
}