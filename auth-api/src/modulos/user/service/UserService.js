import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";

import UserRepository from "../repository/UserRepository.js";
import UserException from "../exception/UserException.js";
import * as httpStatus from "../../../config/constants/httpStatus.js";
import * as secrets from "../../../config/constants/secretes.js";


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

    async getAccessToken(req){

        try {

        const {email, password} = req.body;
        this.validateAccessTokenData(email, password);
        let user = await UserRepository.findByEmail(email);
        this.validateUserNotFound(user);
        await this.validatePassword(password, user.password);
        const authUser = { id: user.id, name: user.name, email: user.email};
        const accessToken = Jwt.sign({authUser}, secrets.API_SECRET,{
            expiresIn: "1d",
        });

        return{
            status: httpStatus.SUCCESS,
            accessToken,
        }
            
        } catch (err) {
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,
            };
            
        }

    }

    validateAccessTokenData(email, password){
        if (!email || !password){
            throw new UserException(httpStatus.UNAUTHORIZED,  "Email end passord must be informed.");
        };
    }

    async validatePassword(password, hashPassword){

        if(!await bcrypt.compare(password,hashPassword)){

            throw new UserException(httpStatus.UNAUTHORIZED,  "Passord doesn't match..");

        }

    }


}

export default new UserService();