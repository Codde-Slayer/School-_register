const db = require("../models")
const Student = db.student;

exports.createStudent =(req, res) =>{
    Student.create({
        studentId: Math.round((Math.random() + Math.random()) * 10),
        image: req.body.image,  
        name: req.body.name,  
        class: req.body.class,  
        age: req.body.age,  
        height: req.body.height,  
        description: req.body.description,  
        available: true,
    })
    .then((student) =>{
        res.status(200).json({
            student: student,
            messsage: "Student has been succesfully added",
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ 
            err: "Student not added",
        });
    });
};

exports.getStudents=(req, res ) => {
    Student.findAll({})
    .then((students) => {
        res.status(200).json({students});
    })
    .catch((err) => {
        res.status(500).json(err);
    });
    console.log(req.params.id);
};

exports.getStudent =(req, res) => {
    Student.findOne({
        where: {studentId: req.params.studentId, available: true },
    }).then((student) => {
        res.status(200).json({student: student});
    });
};

exports.deleteStudent= (req, res ) => {
    Student.destroy({
        where: { StudentId: req.params.StudentId}
    }).then((student) => {
        res.status(200).json({message: "Student has been deleted "})
    });
};

exports.updateStudent = (req, res ) => {
    Student.update(
        { price: req.body.price},
        {
            where: { studentId: req.params.studentId},
        }
    ).then((student) => {
        res.status(200).json({message: "Student updated"});
    });
};