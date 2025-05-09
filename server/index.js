const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json())
const db = require("./models");


//routers
const usersRouter = require('./routes/users');
app.use("/users", usersRouter); 

db.sequelize.sync({ force: true }).then(() => {
    app.listen(3007, () => {
      console.log("Server running on port 3007");
    });
 
});

