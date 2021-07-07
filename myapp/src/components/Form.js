import React, {useState, useEffect} from "react"
import axios from "axios"
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";

const UserForm = ({errors, touched, values, status}) => {
//state component
const [users, setUsers] = useState([]);
//effect component
useEffect(() => {
    if (status) {
        setUsers([status]);
    }
}, [status]) //closing UseEffect
//return
return (
    <div className="formOne">
    <div className="header"><h1 id="head"><span className="color">Welcome </span> to <span className="school">Lambda School!
</span>
         </h1>
         <p>Sign up here.</p>
                </div>
    
    <Form className="userform">
        <p>Name:</p>
        <Field className="inputs" type="text" name="name"/>
            {
                touched.name && errors.name && (
                <p className="error">{errors.name}</p>
            )}
            <p>Email:</p>
            <Field className="inputs" type="text" name="email"/>
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}
            <p className="three">Password:</p>
            <Field className="inputs" type="password" name="password"/>
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            <div className="formTwo">
            <label className= "checkout-valid">
                Accept Terms & Conditions
                <Field className="checkbox"
                type="checkbox"
                name="users"
                checked= {values.users}/>
                <span className="checkmark"/>
            </label>
            <button className="button" type= "submit">Sign up</button>
            </div>
            </Form>

            {users.map(user => (
                <ul key = {user.id}>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Password: {user.password}</li>
                </ul>
            ))}

    </div>
   )  //closing return
}; //closing function
//export

//function
const FormikUserForm = withFormik({
    //map values to Formik
    mapPropsToValues({
        name, email, password, terms
    }) 
    //return
    {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },
    //validation Yup
    validationSchema: Yup.object().shape({
        name: Yup.string().required("name required"),
        email: Yup.string().required("email required"),
        password: Yup.string().required("password required"),
        terms: Yup.string().required("terms and condition required")

    }),

handleSubmit(values, {setStatus}) {
//axios.post
axios
.post("https://reqres.in/api/users", values)
.then(response => {
    setStatus(response.data);
    console.log(response);
})
.catch(error => console.log(error.response));
}
})(UserForm);
console.log("Error, try again!", FormikUserForm);

//export
export default FormikUserForm