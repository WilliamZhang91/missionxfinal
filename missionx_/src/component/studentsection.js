import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, TextField, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    border: "0px",
  },

  buttonGroup: {
    direction: "row",
    margin: "20px 0",
    width: "60%",
  },

  textField: {
    margin: "7px 0",
    borderRadius: "20px",
  },
});

export default function Studentsection(props) {
  const classes = useStyles();

  const [loginArea, setLoginArea] = useState("true");

  const history = useHistory();
  const [users, setUsers] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/logins")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loginStudent = () => {
    axios
      .post("http://localhost:4000/logins", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.status);
        console.log("login successful");
        history.push("/projectspage");
      })
      .catch((err) => {
        console.log(err);
        alert("sorry");
      });
  };
  const handleSignup = () => {
    axios
      .post("http://localhost:4000/addUser", {
        email: email,
        password: password,
        name: fullName,
      })
      .then((response) => {
        console.log(response.status);
        console.log("Sign up successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid item md={6} style={{ width: "50%", borderRight: "1px solid gray" }}>
      <Card variant="outlined" classes={{ root: classes.card }}>
        <img
          src="Mission X Images\Login\Students.png"
          alt="Students"
          style={{ margin: "25px", width: "70%" }}
        />
        <h2>Students</h2>
        <ButtonGroup
          className={classes.buttonGroup}
          fullWidth="true"
          variant="text"
        >
          <Button value="login" onClick={() => setLoginArea("true")}>
            LOG IN
          </Button>

          <Button value="signup" onClick={() => setLoginArea("false")}>
            SIGN UP
          </Button>
        </ButtonGroup>

        {/* Student Login */}

        <div className={loginArea === "false" && "display-none"}>
          <TextField
            className={classes.textField}
            size="small"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className={classes.textField}
            size="small"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={loginStudent}
            >
              LOG IN
            </Button>
          </div>
        </div>

        {/* Student signup */}

        <div className={loginArea === "true" && "display-none"}>
          <TextField
            className={classes.textField}
            size="small"
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            className={classes.textField}
            size="small"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className={classes.textField}
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            className={classes.textField}
            size="small"
            type="password"
            label="Confirm Password"
            variant="outlined"
          />

          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSignup}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </Card>

      {/* Teacher Area*/}
    </Grid>
  );
}
