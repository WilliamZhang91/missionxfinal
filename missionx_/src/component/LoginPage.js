import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, TextField, Grid} from '@material-ui/core';
import {useState, useEffect} from 'react';
import axios from 'axios';
import "./Home.css";
import { useHistory } from 'react-router-dom';
import Studentsection from './studentsection';
import Navbar from './Navbar.js'


const useStyles = makeStyles ({
  card:{
     textAlign:"center",
     border:"0px"
      },

  buttonGroup:{
     direction:"row", 
     margin:"20px 0",
     width:"60%",
  },
  
  
  textField:{
      margin:"7px 0", 
      borderRadius: "20px"
  },
})

export default function LoginPage (props){
const classes = useStyles();
  //conditional render
const [loginArea, setLoginArea] = useState("true")
  //backend
const history = useHistory();
const [users, setUsers] = useState("");
const [email, setEmail] = useState('');
const [password, setPassword]= useState("");
const [fullName, setFullName] = useState("");

const [teacherEmail, setTeacherEmail] = useState('');
const [teacherPassword, setTeacherPassword]= useState("");


useEffect(() => {
  axios.get("http://localhost:7000/logins")
    .then(response => {
      setUsers(response.data)
    })
    .catch(err => {
      console.log(err)
    })

},[])

const handleSignup = () => {
  axios.post("http://localhost:7000/logins", {
   "email": email,
   "password": password,
   "name": fullName,
 })
   .then(response => {
     console.log(response.status)
     console.log("Sign up successful")
   })
   .catch(err => {
     console.log(err)
   })
}




const loginStudent = () => {
  axios.post("http://localhost:7000/logins", {
    "email": email,
    "password": password,
  })
    .then(response => {
      console.log(response.status)
      console.log("login successful")
      history.push('/Login')
    })
    .catch(err => {
      console.log(err)
      alert("sorry")
    })

}

const loginTeacher = () => {
  axios.post("http://localhost:7000/logins", {
    "email": teacherEmail,
    "password": teacherPassword
  })
    .then(response => {
      console.log(response.status)
      console.log("login successful")
      history.push('/Login')
    })
    .catch(err => {
      console.log(err)
    })

}

return (  <div>
  <Grid container style={{width: '100%', height: '750px'}}>
  {/* <Grid item md={6} 
      style={{width:"50%", borderRight:"1px solid gray"}}>
<Card variant="outlined" classes = {{root: classes.card}} >
<img
              src="Mission X Images\Login\Students.png"
              alt="Students"
              style={{margin:"25px", width: "70%"}}
            />
 <h2>Students</h2>
 <ButtonGroup className={classes.buttonGroup}
            fullWidth= "true"
            variant="text" >


 <Button value="login" onClick={()=>setLoginArea("true")}>LOG IN</Button>

 <Button value="signup" onClick={()=>setLoginArea("false")}>SIGN UP</Button>
 </ButtonGroup>



<div className={loginArea === "false" && "display-none"}>
 <TextField className={classes.textField} 
 size="small" label="Email Address" variant="outlined"
 value={email} onChange={(e)=>setEmail(e.target.value)} />

 <TextField className={classes.textField} 
 size="small" type="password" label="Password" variant="outlined" 
 value={password} onChange={(e)=>setPassword(e.target.value)}/>
 <div><Button variant="contained" color="secondary" onClick={loginStudent}>LOG IN</Button></div>
 </div>

 

 <div  className = {loginArea === "true" && "display-none"}>

 <TextField className={classes.textField}  
 size="small" label="Full Name" variant="outlined"
 value={fullName} onChange={(e)=>setFullName(e.target.value)}
  />

<TextField className={classes.textField} 
 size="small" label="Email Address" variant="outlined"
 value={email} onChange={(e)=>setEmail(e.target.value)} />



<TextField className={classes.textField}  
 size="small" label="Password" type="password" variant="outlined"
 value={password} onChange={(e)=>setPassword(e.target.value)}/>

 <TextField className={classes.textField}  
 size="small" type="password" label="Confirm Password" 
 variant="outlined" 
  />

<div><Button variant="contained" color="secondary" onClick={handleSignup} >SIGN UP</Button></div>
 </div>
 </Card>



</Grid> */}
<Studentsection />

     
  <Grid item md={6} 
      style={{width:"50%"}}>
<Card variant="outlined" classes = {{root: classes.card}} >
<img
              src="Mission X Images\Login\teacher.png"
              alt="Students"
              style={{margin:"25px", width: "70%"}}
            />
 <h2>Teachers</h2>
 <ButtonGroup className={classes.buttonGroup}
            fullWidth= "true"
            variant="text" >


 <Button value="login" onClick={()=>setLoginArea("true")}>LOG IN</Button>

 <Button value="signup" onClick={()=>setLoginArea("false")}>SIGN UP</Button>
 </ButtonGroup>

{/* Teacher  Login*/}

<div className={loginArea === "false" && "display-none"}>
 <TextField className={classes.textField} 
 size="small" label="Email Address" variant="outlined"
 value={teacherEmail} onChange={(e)=>setTeacherEmail(e.target.value)} />

 <TextField className={classes.textField}  
 size="small" type="password" label="Password" variant="outlined" 
 value={teacherPassword} onChange={(e)=>setTeacherPassword(e.target.value)}/>

<div><Button variant="contained" color="secondary"  onClick={loginTeacher}>LOG IN</Button></div>
 </div>

 {/* Teacher Sign Up */}

 <div  className = {loginArea === "true" && "display-none"}>

 <TextField className={classes.textField}  
 size="small" label="Full Name" variant="outlined"
 value={fullName} onChange={(e)=>setFullName(e.target.value)}
  />

<TextField className={classes.textField}  
 size="small" label="Email Address" variant="outlined"
 value={email} onChange={(e)=>setEmail(e.target.value)}/>



<TextField className={classes.textField}  
 size="small" label="Password" type="password" variant="outlined"
 value={password} onChange={(e)=>setPassword(e.target.value)}/>


 <TextField className={classes.textField}  
 size="small" type="password" label="Confirm Password" 
 variant="outlined" 
  />
  <div><Button variant="contained" color="secondary" onClick={handleSignup} >SIGN UP</Button></div>


 </div>
 </Card>
</Grid>


</Grid>
</div>  
)}

