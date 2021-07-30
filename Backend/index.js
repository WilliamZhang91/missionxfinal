const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const port = 4000;

const app = express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'missionxdb.c7cxqkjagnrx.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'adminpassword',
    database: "mission_x"
})

db.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to db' + port)
    }
})

app.get('/user', (req, res) => { // student profile 
    db.query('SELECT * from user', (err, result) => {
        //'SELECT * from user WHERE user_id != "16"'
        res.send(result)
    })
})

app.get('/tracker1', (req, res) => { 
    db.query('SELECT * FROM progress_history JOIN project ON progress_history.project_id = project.project_id JOIN user ON progress_history.user_id = user.user_id;', (err, result) => {
        res.send(result)
    })
})

app.get('/count', (req, res) => {
    db.query('SELECT user_id, COUNT(*) AS project_started FROM progress_history GROUP BY user_id', (err, result) => {
        res.send(result)
    })
})

app.get('/teacherprofilepic', (req, res) => {
    db.query('SELECT profile_pic, user_name FROM mission_x.user WHERE user_id = 16;', (err, result) => {
        res.send(result)
    })
})




app.get('/projectscompleted', (req, res) => {
    db.query('SELECT user.user_name, user.user_id, COUNT(*) completed FROM progress_history AS progress_history JOIN user AS user ON progress_history.user_id = user.user_id WHERE date_completed IS NOT NULL GROUP BY progress_history.user_id', (err, result) => {
        //'SELECT user.user_name, user.user_id, COUNT(*) started FROM progress_history AS progress_history JOIN user AS user ON progress_history.user_id = user.user_id GROUP BY progress_history.user_id'//, (err, result) => {
        res.send(result)
    })
})

app.get('/projectstatus', (req, res) => {
    db.query('SELECT user_id, project_id FROM mission_x.progress_history;', (err, result) => {
        res.send(result)
    })
})

app.get('/project', (req, res) => {
    db.query('SELECT * FROM project', (err, result) => {
        res.send(result)
    })
})

app.get('/project1', (req, res) => {
    db.query('SELECT * FROM project WHERE activity_type = "animation" AND subscription = "free"', (err, result) =>{
        res.send(result)
    })
})

app.get('/project1', (req, res) => {
    db.query('SELECT * FROM project WHERE activity_type = "Animation" AND subscription = "Free"', (err, result) =>{
        res.send(result)
    })
})

<<<<<<< HEAD
app.get('/user1', (req, res) => { //project completion status of user_id = 1
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "1"', (err, result) => {
        res.send(result)
    })
})

app.get('/user2', (req, res) => { //project completion status of user_id = 2
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "2"', (err, result) => {
        res.send(result)
    })
})

app.get('/user3', (req, res) => { //project completion status of user_id = 3
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "3"', (err, result) => {
        res.send(result)
    })
})

app.get('/user4', (req, res) => { //project completion status of user_id = 4
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "4"', (err, result) => {
        res.send(result)
    })
})

app.get('/user5', (req, res) => { //project completion status of user_id = 1
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "5"', (err, result) => {
        res.send(result)
    })
})

app.get('/user6', (req, res) => { //project completion status of user_id = 1
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "6"', (err, result) => {
        res.send(result)
    })
})

app.get('/user7', (req, res) => { //project completion status of user_id = 7
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "7"', (err, result) => {
        res.send(result)
    })
})

app.get('/user10', (req, res) => { //project completion status of user_id = 10
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "10"', (err, result) => {
        res.send(result)
    })
})

app.get('/user11', (req, res) => { //project completion status of user_id = 11
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "11"', (err, result) => {
        //'SELECT progress_history.project_id, user.user_name FROM progress_history JOIN user ON progress_history.user_id = user.user_id',(err, result) => {
        res.send(result)
    })
})

app.get('/user13', (req, res) => { //project completion status of user_id = 1
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "13"', (err, result) => {
        //'SELECT progress_history.project_id, user.user_name FROM progress_history JOIN user ON progress_history.user_id = user.user_id',(err, result) => {
        res.send(result)
    })
})

app.get('/user14', (req, res) => { //project completion status of user_id = 14
    db.query('SELECT user.user_name, user.user_id, progress_history.project_id, progress_history.date_completed FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE progress_history.date_completed IS NOT NULL AND progress_history.user_id = "14"', (err, result) => {
        //'SELECT progress_history.project_id, user.user_name FROM progress_history JOIN user ON progress_history.user_id = user.user_id',(err, result) => {
        res.send(result)
    })
})
=======
// login for students

app.post("/logins", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [email, password],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          if (result.length > 0) {
            console.log("Check Successful");
            res.sendStatus(200);
          } else {
            console.log("Check Unsuccessful");
            res.sendStatus(401);
          }
        }
      }
    );
  });

// Update: changed login for teacher section so that it only works when someone with the role of teacher logs in

  app.post("/login/teacher", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
  
    db.query(
      "SELECT * FROM user WHERE email = ? AND password = ? AND role = 'teacher'",
      [email, password, role],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          if (result.length > 0) {
            console.log("Check Successful");
            res.sendStatus(200);
          } else {
            console.log("Check Unsuccessful");
            res.sendStatus(401);
          }
        }
      }
    );
  });
  
>>>>>>> 1a84c68d8a4a59d7213e1b84f643c1d9379e48ac


  app.listen(port, () => {
    console.log("server  is running locally");
  });
  