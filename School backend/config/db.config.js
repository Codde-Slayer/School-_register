module.exports ={
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "password",
    port: 5432,
    DB: "student",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,        
    },
};