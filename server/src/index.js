const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("../src/Student.route.js");
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use("/students", studentRoutes);
mongoose.connect("mongodb://localhost:27017/reactdb",{
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(()=>{
    console.log("Mongoose Connected Successfully");
}).catch(()=>{
    console.log("Mongoose not connected");
})

// app.get("/students",(req,res)=>{
//     res.status(201).redirect("/students");
// });
// 404 Error
app.use((req, res, next) => {
    next(createError(404))
})

// Error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})
// app.post("/student", async (req,res)=>{
//     try {
//         const dataPosted = new studentData(req.body);
//         const insertData = await dataPosted.save();
//         res.status(201).send(insertData);
//     } catch (error) {
//         res.status(400).send();
//         console.log("Error from Post");
//     }
// })

// app.get("/student", async (req,res)=>{
//     try {
//         const getStudents = await studentData.find({});
//         res.status(201).send(getStudents);
//     } catch (error) {
//         res.status(400).send();
//         console.log("Student Can not Get");
//     }
// })

app.listen(port,()=>{
    console.log(`Server is running at: http://localhost:${port}`);
});