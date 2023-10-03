import User from "../model/User.js";

class UseRepository{

    async findById(id){

        try {
            return await User.findOne({ where: {id} });
        }   
        catch (error) {

            console.error(err.message);
            return null;
            
        }

    }
    async findByEmail(email){

        try {
            return await User.findOne({ where: {email} });
        }   
        catch (error) {

            console.error(err.message);
            return null;

            
        }

    }
}

export default new UseRepository();