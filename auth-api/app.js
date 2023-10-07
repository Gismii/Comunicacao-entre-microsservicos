import  express  from "express";
import * as db from "./src/config/db/dataFake.js";
import userRoutes from "./src/modulos/user/routs/UserRoutes.js";
import checkToken from "./src/config/auth/checkToken.js";



const app = express();
const env = process.env;
const PORT = env.PORT || 8080;
 

db.createInitialData()

app.use(express.json());

app.use(userRoutes);

app.use(checkToken);

app.get("/api/status", (req, res) => {

    return res.status(200).json({
        service:"Auth-API",
        status: "up",
        response: "ok",
        httpStatus: 200,

    });

});



app.listen(PORT, () =>{

    console.info(`Server starter successfuly at port ${PORT}`);

});

