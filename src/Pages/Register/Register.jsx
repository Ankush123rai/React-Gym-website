import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./Register.module.css";
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from "react-router-dom";


const Register = () => {

  const  showLogin= useNavigate()

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [gymData, setGymData] = useState(() => {
    const storedData = localStorage.getItem("gymUsers");
    return storedData ? JSON.parse(storedData) : [];
  });



  const getRegister = (e) => {

   const {value,name}=e.target;
    setInputValue(()=>{
      return{
        ...inputValue,
        [name]:value
      }
    })
  }
  const handleSubmitData=(e)=>{
      e.preventDefault()
      
      
      const {name,email,password,confirmPassword}=inputValue;
      if(name==""){
        Swal.fire("Name field is required")
      }else if(name.length<3){
        Swal.fire("Name size must be greater than Three")
      }else if(Number(name)){
        Swal.fire("Name must be string")
      }
      else if(email==""){
        Swal.fire("E-mail field is required")
      }else if(!email.includes("@")){
        Swal.fire("Please enter valid email address")
      }else if(!email.includes(".com")){
        Swal.fire("Please enter valid email address")
      }else if(password==""){
        Swal.fire("Password field is required")
      }else if(confirmPassword==""){
        Swal.fire("Confirm-Passowrd field is required")
      }else if(password.length<5){
        Swal.fire("Password size must be greater than Five")
      }
      else if(password!==confirmPassword){
        Swal.fire("Password must be same")
      }
      const existingUser = gymData.find((user) => user.email === email);
      if (existingUser) {
        Swal.fire("User with this email already exists");
        return;
      }
  
      const newUser = { name, email, password };
      setGymData([...gymData, newUser]);
      localStorage.setItem("gymUsers", JSON.stringify([...gymData, newUser]));
  
      Swal.fire("Successfull!", "You clicked the button!", "success");
      showLogin("/login")
    };
    
  return (
    <>
    <div className={style.container}>
      <h1>Register</h1>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Control 
            name="name"
            type="name"  
            onChange={getRegister} 
            placeholder="Enter your name"

             />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
          name="email"
          type="email"  
          onChange={getRegister} 
          placeholder="Enter email" 
          />
        </Form.Group>

        <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Control 
            name="password"
            type="password" 
            onChange={getRegister} 
            placeholder="Password" 
            />
        </Form.Group>

        <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Control 
            name="confirmPassword"
            type="password" 
            onChange={getRegister} 
            placeholder="Confirm Password" 
            />
        </Form.Group>

        <Button 
            variant="primary"
            type="submit"
            onClick={handleSubmitData}
            >
          Submit
        </Button>
        <p className="mt-3">Already Have an Account <NavLink to='/login'>Login</NavLink></p>
      </Form>
    </div>
    </>
  );
};

export default Register;