import React from "react";
import * as Yup from 'yup';
import { PrimaryLoginForm } from "./LoginForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";

function LoginForm() {
    return(
        <PrimaryLoginForm>
            <Formik onSubmit={(values)=>{
                alert(values.email)
                alert(values.password)
            }} initialValues={{ email: "", password: ""}}>
                <Form > <table> <tr><td>
                    <Field name="email" type="email" class=
                    "main" Placeholder="E-MAIL"/></td><td>
                     <Field name="password" type="password"class=
                    "main"Placeholder="PASSWORD"/></td><td>
                        
                      <PrimaryButton type="submit" >Login</PrimaryButton>
                      </td></tr>
                   <tr><td><Field class="main3"name="checked"  type="checkbox" />Remember Me</td>
                   <td className="main3">Forget Password? Click Here.</td></tr>
                   </table> 
                </Form>
            </Formik>
        </PrimaryLoginForm>
    )
}

export default LoginForm;
