import bcrypt from "bcrypt";
import User from "../../modulos/user/model/User.js";

export async function createInitialData(){

try {

    await User.sync({ force: true });

    let password = await bcrypt.hash("123456", 10);

    await User.create({
        name:  "User Test",
        email: "testuser@gmail.com",
        password: password,
    });

    await User.create({
        name:  "Gismi",
        email: "g@gmail.com",
        password: password,
    });
    
        
    } catch (err) {

        console.log(err);
        
    }

      
}