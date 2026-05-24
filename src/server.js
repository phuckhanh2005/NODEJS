import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
require('dotenv').config();


let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRouter(app);

let port = process.env.PORT || 6969;
//PORT === UNDERFILE => PORT 6969

app.listen(port, () => {
    console.log("Back end adsaksdd :" + port)
} )