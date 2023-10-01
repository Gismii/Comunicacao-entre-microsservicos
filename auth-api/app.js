import  express  from "express";

import db from "./src/config/db/dataFake";


const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

db.createInitialData();

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