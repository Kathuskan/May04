const express = require('express');
const app = express();


app.use(express.json())
const db = require("./models");


//routers
const usersRouter = require('./routes/users');
app.use("/users", usersRouter); 

db.sequelize.sync().then(() => {
    app.listen(3007, () => {
        console.log("server running on port 3007");
    });

});
