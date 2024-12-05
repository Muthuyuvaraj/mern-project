const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
require("dotenv").config();
const session = require("express-session");

const app = express();


app.use(cors(
   {
  origin:["https://frontend-tawny-three.vercel.app/"],
  methods:['POST', 'GET'],
  credentials: true,
}
));

app.use(express.json());




// Connect to MongoDB
mongoose.connect("mongodb+srv://muthuyuvarajm:dbusername@cluster0.kpxz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// API to handle login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({
            message: "Success",
            user: {
              name: user.name,
              email: user.email,
            },
          });
          
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => res.status(500).json(err));
});
// API to handle registration
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

// **New API to retrieve all employees**
app.get("/", (req, res) => {
  // Fetch employees from database or another source
  EmployeeModel.find({})
      .then((employees) => {
          res.json(employees); // Send the employees as JSON response
      })
      .catch((err) => {
          res.status(500).json({ error: "Failed to fetch employees" });
      });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
