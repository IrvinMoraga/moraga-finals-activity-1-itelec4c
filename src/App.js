import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";

toast.configure();

const Users = [
  {
    firstName: "Juan",
    lastName: "Dela Cruz",
    gender: "Male",
    email: "juandelacruz@gmail.com",
    password: "12345678",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const loginHandler = (values) => {
    const { email, password } = values;
    const user = Users.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        toast.success("Login Successful");
        setTimeout(() => {
          window.alert("Welcome " + user.firstName + " " + user.lastName + "!");
        }, 2000);
      } else {
        toast.error("Incorrect Password");
      }
    } else {
      toast.error("User not found");
    }
  };

  const navigateToSignUpHandler = () => {
    setCurrentPage("signup");
  };

  const signUpHandler = (values) => {
    const { firstName, lastName, gender, email, password } = values;
    Users.push({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      password: password,
    });
    setCurrentPage("login");
    toast.success(
      "User successfully registered. You can now login using the created account."
    );
    // to see all users in the Users array in the console
    console.log(Users);
  };

  const navigateToLoginHandler = () => {
    setCurrentPage("login");
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="mainContainer">
        {(() => {
          switch (currentPage) {
            case "login":
              return (
                <Login
                  loginHandler={loginHandler}
                  navigateToSignUpHandler={navigateToSignUpHandler}
                />
              );
            case "signup":
              return (
                <SignUp
                  signUpHandler={signUpHandler}
                  navigateToLoginHandler={navigateToLoginHandler}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
