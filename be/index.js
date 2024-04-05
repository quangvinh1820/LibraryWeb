const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const route = require('./routes/index.js');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

dotenv.config();

//Middlewares
app.use(
    express.urlencoded({
      extended: true,
    }),
);
  
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(morgan('combined'));

  // On Cloud
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
      console.log(err);
});

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});