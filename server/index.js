const express = require('express');
const app = express();



const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = require("./models");

// Routers
const usersRouter = require('./routes/users');
const transactionsRouter = require('./routes/transactions');

app.use("/users", usersRouter); 
app.use('/api/transactions', transactionsRouter);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(3007, () => {
    console.log("Server running on port 3007");
  });
});
