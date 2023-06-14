//task1

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [login, setLogin] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [loginError, setLoginError] = useState("");
//   const [ageError, setAgeError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const submit = (e) => {
//     e.preventDefault();

//     // Reset errors
//     setNameError("");
//     setLoginError("");
//     setAgeError("");
//     setEmailError("");

//     // Validate name
//     if (name.length <= 1 || /\d/.test(name)) {
//       setNameError("Name should be longer than 1 character and should not contain digits");
//     }

//     // Validate login
//     if (login.length <= 5) {
//       setLoginError("Login should be longer than 5 characters");
//     }

//     // Validate age
//     if (age < 18) {
//       setAgeError("Age should be greater than or equal to 18");
//     }

//     // Validate email
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     if (!emailPattern.test(email)) {
//       setEmailError("Invalid email format");
//     }

//     // If any field is invalid, return early
//     if (nameError || loginError || ageError || emailError) {
//       return;
//     }

//     // If all fields are valid, proceed
//     console.log("Name:", name);
//     console.log("Login:", login);
//     console.log("Age:", age);
//     console.log("Email:", email);
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={submit}>
//         <label>Name</label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className={nameError ? "invalid" : ""}
//         />
//         {nameError && <p>{nameError}</p>}

//         <label>Login</label>
//         <input
//           value={login}
//           onChange={(e) => setLogin(e.target.value)}
//           className={loginError ? "invalid" : ""}
//         />
//         {loginError && <p>{loginError}</p>}

//         <label>Age</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           className={ageError ? "invalid" : ""}
//         />
//         {ageError && <p>{ageError}</p>}

//         <label>Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={emailError ? "invalid" : ""}
//         />
//         {emailError && <p>{emailError}</p>}

//         <button type="submit">Sign in</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//task2

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// function App() {
//   const handleSubmit = (values) => {
//     console.log("Name:", values.name);
//     console.log("Login:", values.login);
//     console.log("Age:", values.age);
//     console.log("Email:", values.email);
//   };

//   const validateName = (value) => {
//     let error;
//     if (!value || value.length <= 1 || /\d/.test(value)) {
//       error = "Name should be longer than 1 character and should not contain digits";
//     }
//     return error;
//   };

//   const validateLogin = (value) => {
//     let error;
//     if (!value || value.length <= 5) {
//       error = "Login should be longer than 5 characters";
//     }
//     return error;
//   };

//   const validateAge = (value) => {
//     let error;
//     if (!value || value < 18) {
//       error = "Age should be greater than or equal to 18";
//     }
//     return error;
//   };

//   const validateEmail = (value) => {
//     let error;
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     if (!value || !emailPattern.test(value)) {
//       error = "Invalid email format";
//     }
//     return error;
//   };

//   return (
//     <div className="wrapper">
//       <Formik
//         initialValues={{
//           name: "",
//           login: "",
//           age: "",
//           email: "",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <label htmlFor="name">Name</label>
//           <Field
//             type="text"
//             id="name"
//             name="name"
//             validate={validateName}
//             className="form-control"
//           />
//           <ErrorMessage name="name" component="p" className="error-message" />

//           <label htmlFor="login">Login</label>
//           <Field
//             type="text"
//             id="login"
//             name="login"
//             validate={validateLogin}
//             className="form-control"
//           />
//           <ErrorMessage name="login" component="p" className="error-message" />

//           <label htmlFor="age">Age</label>
//           <Field
//             type="number"
//             id="age"
//             name="age"
//             validate={validateAge}
//             className="form-control"
//           />
//           <ErrorMessage name="age" component="p" className="error-message" />

//           <label htmlFor="email">Email</label>
//           <Field
//             type="email"
//             id="email"
//             name="email"
//             validate={validateEmail}
//             className="form-control"
//           />
//           <ErrorMessage name="email" component="p" className="error-message" />

//           <button type="submit">Sign in</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default App;

//task3

import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Name:", data.name);
    console.log("Login:", data.login);
    console.log("Age:", data.age);
    console.log("Email:", data.email);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name should be longer than 1 character",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Name should contain only alphabets",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          {...register("login", {
            required: "Login is required",
            minLength: {
              value: 6,
              message: "Login should be longer than 5 characters",
            },
          })}
        />
        {errors.login && <p>{errors.login.message}</p>}

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            required: "Age is required",
            min: {
              value: 18,
              message: "Age should be greater than or equal to 18",
            },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
