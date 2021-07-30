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

app.get('/user', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
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


app.get('/projectscompleted', (req, res) => {
    db.query('SELECT user.user_name, user.user_id, COUNT(*) started FROM progress_history AS progress_history JOIN user AS user ON progress_history.user_id = user.user_id GROUP BY progress_history.user_id', (err, result) => {
        res.send(result)
    })
})

app.get('/projectstatus', (req, res) => {
    db.query('SELECT user_id, project_id FROM mission_x.progress_history;', (err, result) => {
        res.send(result)
    })
})

app.get('/user1', (req, res) => {
    db.query('SELECT user.user_id, progress_history.project_id, user.user_name FROM user JOIN progress_history ON progress_history.user_id = user.user_id WHERE user.user_id = "1"', (err, result) => {
        //'SELECT progress_history.project_id, user.user_name FROM progress_history JOIN user ON progress_history.user_id = user.user_id',(err, result) => {
        res.send(result)
    })
})

app.get('/project', (req, res) => {
    db.query('SELECT * FROM project', (err, result) => {
        res.send(result)
    })
})

app.get('/project1', (req, res) => {
    db.query('SELECT * FROM project WHERE activity_type = "animation" AND subscription = "fnodree"', (err, result) =>{
        res.send(result)
    })
})

app.get('/project1', (req, res) => {
    db.query('SELECT * FROM project WHERE activity_type = "Animation" AND subscription = "Free"', (err, result) =>{
        res.send(result)
    })
})

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
  


  app.listen(port, () => {
    console.log("server  is running locally");
  });
  