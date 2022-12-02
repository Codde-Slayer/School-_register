const express = require("express")
const app = express();
const port = 5000;
const db = require("./Models");
var cors = require("cors");
const bodyParser = require("body-parser")

db.sequelize.sync(/*{force: true}*/).then(() => {
 console.log("Connected to database")
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

require("./Routes/Student.routes")(app)
require("./Routes/image.routes")(app)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 