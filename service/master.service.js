const { masterRepo } = require("../repo/master.repo")

class MasterService {
    addCategory = async (name) => {
        let data = {
            name: name
        }
        let resData = await masterRepo.addCategory(data);
        if (resData) return Promise.resolve({
            success: true,
            messageKey: "register"
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }

    addRoles = async (name) => {
        let data = {
            name: name
        }
        let resData = await masterRepo.addRoles(data);
        if (resData) return Promise.resolve({
            success: true,
            messageKey: "register"
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }

    getRoles = async () => {
        let cond = { is_active: true }
        let resData = await masterRepo.getRoles(cond);
        if (resData) return Promise.resolve({
            success: true,
            data: resData
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }

    getCategory = async () => {
        let cond = { is_active: true }
        
        let resData = await masterRepo.getCategory(cond);
        if (resData) return Promise.resolve({
            success: true,
            data:resData,
            messageKey: "register"
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }
}


module.exports = {
    masterService: new MasterService()
}