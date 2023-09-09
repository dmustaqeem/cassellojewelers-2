import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Navbar } from "../components";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";
const LoginPage = () => {
  const [LoginPage, setLoginPage] = useState(true);
  const [ErrorMessage,setErrorMessage] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');


  function GetRegisteredClicked() {
    setLoginPage(!LoginPage);
  }
  const [ToggleBoolean, setToggleBoolean] = useState(false);
  const handleClick = () => {
    setToggleBoolean(!ToggleBoolean);
  };
  const handleUsernameChange = (e) => {

    setUsername(e.target.value);
    const isUsernameValid = /^[A-Za-z][A-Za-z0-9]{7,}$/.test(username);
    if(!isUsernameValid){
      setErrorMessage("Username must start with alphabet.Atlest 8 charachters")
    
    }
    else{
      setErrorMessage("")
    }
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!isEmailValid){
      setErrorMessage("Please Enter valid Email")
    }
    else{
      setErrorMessage("")
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    const isTextValid = /^[A-Za-z\s]+$/.test(firstName);
   
    if(!isTextValid){
      setErrorMessage("Only Alphabets and spaces")
    }
    else{
      setErrorMessage("")
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    const isTextValid = /^[A-Za-z\s]+$/.test(lastName);
   
    if(!isTextValid){
      setErrorMessage("Only Alphabets and spaces")
    }
    else{
      setErrorMessage("")
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/.test(password);
    if(!isPasswordValid){
      setErrorMessage("Password Atleast 8 charachters and must contain a alphabet, number and special charachter")
    }
    else{
      setErrorMessage("")
    }
    
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
    // const doPasswordsMatch = password == repeatPassword;
    if(e.target.value === password){
      
      setErrorMessage("")
    }
    else{
      setErrorMessage("Password dont match")
    }
  };


  return (
    <Wrapper>
      <Navbar />

      <div className="Holder">
        {LoginPage ? (
          <div className="SignInWrap">
            <p className="TitleText">Sign in</p>
           

            {/* <div className="AdminText" onClick={handleClick}>Admin</div>
            <div className="ToggleHolder">
              <motion.div 
            //  initial={{ right: 0 }}
            //  animate={ToggleBoolean ? { right: 0 } : { left: 0}}
               >

              </motion.div>
              
            </div> */}
            <div className="toggleHolder">
                      <div className="TextHolder">
                        
                        {ToggleBoolean && "Admin"}
                        {!ToggleBoolean && "User"}
                        </div>
                      <div className="togglebutton" onClick={handleClick} style={{ backgroundColor: ToggleBoolean ? " #a6705d" : "rgba(166, 112, 93, 0.25)" }}>
                          <motion.div className="toggle"
                             initial={{ right: 0,backgroundClip:"red" }}
              animate={ToggleBoolean ? { right: 0,backgroundClip:"red" } : { left: 0,backgroundClip:"pink"}}
                          ></motion.div>
                      </div>
            </div>

            <input type="text" placeholder="Username" className="InputField" />
            <input type="text" placeholder="Password" className="InputField" />
            <div>
              <p className="promptText">
                Not Registered ?
                <span className="promptSpan" onClick={GetRegisteredClicked}>
                  {" "}
                  Get Registered
                </span>
              </p>
            </div>

            <Link to= {!ToggleBoolean ? "/UserHomePage" : "/AdminHomePage"}>
            <Button variant="outlined" className="LoginButton">
              Proceed
            </Button>
            </Link>

          </div>
        ) : (
          <div className="SignUpWrap">
            <p className="TitleText">Sign Up</p>
            <p className="ErrorMessage">{ErrorMessage}</p>
            <div className="InputHolder">
              <input
                type="text"
                placeholder="Username"
                className="InputField"
                value={username}
                onChange={handleUsernameChange}
              />
              <input type="text" placeholder="Email" className="InputField" 
              value={email}
              onChange={handleEmailChange}/>
            </div>

            <div className="InputHolder">
              <input
                type="text"
                placeholder="First Name"
                className="InputField"
                value={firstName}
          onChange={handleFirstNameChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="InputField"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>

            <div className="InputHolder">
              <input
                type="text"
                placeholder="Password"
                className="InputField"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                type="text"
                placeholder="Repeat Password"
                className="InputField"
                value={repeatPassword}
          onChange={handleRepeatPasswordChange}
              />
            </div>

            <div className="AlternativeOption">
              <div className="OptionHolder">
                <FacebookOutlinedIcon className="OptionIcon" />
                <div className="OptionText">Continue with facebook</div>
              </div>

              <div className="OptionHolder2">
                <GoogleIcon className="OptionIcon2" />
                <div className="OptionText2">Continue with google</div>
              </div>
            </div>

            <div>
              <p className="promptText">
                Already Registered ?
                <span className="promptSpan" onClick={GetRegisteredClicked}>
                  {" "}
                  Login In
                </span>
              </p>
            </div>

            <Button variant="outlined" className="LoginButton">
              Register
            </Button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: #eeeeee;
  font-family: "Century Gothic", sans-serif;
  padding-bottom: 10%;

  .Holder {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2.5%;
  }
  .ErrorMessage{
    font-size:18px;
    font-weight:1000;
    color:red;
  }
  .TextHolder{
    text-align:center;
}
  }
  .toggleHolder{
    display:flex;
    flex-direction:column;
  }
  .togglebutton{
    background-color:black;
    width:50px;
    height:21px;
    border-radius:15px;
    padding:1%;
    margin-left:2%;
    position:relative;
  }
   .toggle{
    background-color:white;
    height:21px;
    width:20px;
    border-radius:10px;
    position:absolute;
    top:px;
   }
  .ImageHolder {
    width: 40%;
    height: 100%;
    background-color: black;
  }
  .SignInWrap {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5%;
  }
  .InputHolder {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }
  .SignUpWrap {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5%;
  }
  .TitleText {
    font-size: 50px;
    font-weight: 1000;
    text-align: center;
  }
  .InputField {
    height: 55px;
    width: 45%;
    border-radius: 5px;
    padding-left: 2%;
    outline: none;
    border: none;
    background-color: rgb(0, 0, 0, 0.1);
    font-size: 15px;
    margin-top: 5%;
  }
  .LoginButton {
    height: 50px;
    width: 200px;
    margin-top: 2.5%;
    background-color: #a6705d;
    &:hover {
      background-color: black;
      border: none;
      outline: none;
    }
    color: white;
  }
  .promptText {
    margin-top: 10%;
    font-weight: 100;
    font-size: 20px;
  }
  .promptSpan {
    color: #a6705d;
    font-weight: 1000;
  }
  .promptSpan .hover {
    cursor: pointer;
  }
  .AlternativeOption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 65%;
    margin-top: 5%;
  }
  .OptionHolder {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #1778f2;
    border-radius: 30px;
    align-items: center;
    padding: 2.5%;
    width: 50%;
    margin: 1%;
  }
  .OptionHolder2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: white;
    border: 1px solid rgb(0, 0, 0, 0.5);
    border-radius: 30px;
    align-items: center;
    padding: 2.5%;
    width: 50%;
    margin: 1%;
  }
  .OptionText {
    color: white;
    font-weight: 1000;
    letter-spacing: 1px;
  }
  .OptionIcon {
    color: white;
  }
  .OptionIcon2 {
  }
  .OptionText2 {
    font-weight: 1000;
    letter-spacing: 1px;
  }

  
  .UserText{
        font-size:14px;
        padding-left:2px;
        font-weight:1000;
  }
  .AdminText{
    font-size:14px;
    font-weight:1000;
    padding-right:2px;
  }

  @media (max-width: 767px) {
    margin-top: 80px;
    .SignUpWrap {
      width: 90%;
      padding: 5%;
    }
    .InputHolder {
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .InputField {
      width: 100%;
      padding-left: 2.5%;
    }
    .OptionHolder {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
    .OptionHolder2 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
    .AlternativeOption {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 65%;
      margin-top: 5%;
    }
    .SignInWrap {
      width: 90%;
    }
  }
  @media (min-width: 800px) and (max-width: 950px) {
    margin-top: 80px;
    .AlternativeOption {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 65%;
      margin-top: 5%;
    }
    .SignInWrap {
      width: 70%;
    }
    .OptionHolder {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
    .OptionHolder2 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
  }
`;
export default LoginPage;
