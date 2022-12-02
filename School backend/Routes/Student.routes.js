const controller = require("../controllers/student.controllers");

module.exports = function (app) {
    app.post("/create_student", controller.createStudent);

    app.get("/student/:studentId", controller.getStudent);

    app.delete("/student/:studentId", controller.deleteStudent);

    app.patch("/student/:studentId", controller.updateStudent);
    
    app.get("/students", controller.getStudents);

}