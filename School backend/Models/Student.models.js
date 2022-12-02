const { Sequelize } = require("sequelize");

module.exports = (sequelise, Sequelize) => {
    const Student = sequelise.define("student", {
        studentId: {
            type: Sequelize.INTEGER,
            primarykey: true,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        class: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        height: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        available: {
            type: Sequelize.STRING,
            allowNull: false,
        
    }
});

    return Student;
}