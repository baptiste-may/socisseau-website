const express = require("express");

const app = express();
const http = require("http").createServer(app);
const path = require("path");
const port = 3000;

app.use("/jquery", express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/home/index.html"));
});

http.listen(port, () => {
    console.log(`App server is running on port ${port}`);
});