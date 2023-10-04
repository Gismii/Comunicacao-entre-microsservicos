import UserRepository from "../repository/UserRepository.js";
import * as httpStatus from "../../../config/constants/httpStatus.js"
import UserException from "../exception/UserException.js"

class UserService{

    async findByEmail(req){
        try {

            const { email } = req.params;
            this.validateRequestData(email);
            let user = await UserRepository.findByEmail(email);
            if (!user){

            }
            return {
                status: httpStatus.SUCCESS,
                user:{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                },
            };
            
        } catch (err) {
            
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,
            };
        }
    }

    validateRequestData(email){
        if (!email){
            throw new UserException(httpStatus.BAD_REQUEST,  "User email was not informed.");
        };
    }

    validateUserNotFound(user){
        if (!user){
            throw new UserException(httpStatus.BAD_REQUEST,  "User was not exist.");
        };
    }


}

export default new UserService();