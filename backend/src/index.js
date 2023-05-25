import express from "express";
import bodyParser from "body-parser";
import createRoute from "./routes/post.js";
import getRoute from "./routes/get.js";
import deleteRoute from "./routes/delete.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", getRoute);
app.post("/", createRoute);
app.delete("/", deleteRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
