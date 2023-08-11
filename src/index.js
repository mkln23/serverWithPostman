const express = require("express");
const app = express();
const PORT = 3000;

const word = "Hello World"
const namelist = [{name : "Mukilan"},{name : "Aadavan"}]

app.use(express.json());

app.listen(PORT,() => {
    console.log('server started at port ${PORT}');
})

app.get("/test",(request,response) => {
    response.send(namelist);
})

app.post("/test",(request,response) => {
    console.log(request.body);
    namelist.push(request.body);
    response.send(namelist);
})