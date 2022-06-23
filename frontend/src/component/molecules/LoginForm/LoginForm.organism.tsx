import React, { useState } from "react";
import Select from "react-select";
import * as Yup from "yup";
import { PrimaryLoginForm } from "./LoginForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../../Services/Auth.Services";
import toastr from "toastr";
import useHooks from "./LoginForm.hooks";

function LoginForm() {
  const history = useNavigate();

  const ProfilePage = () => {
      history("/Profilepage")
  }

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });
  return (
    <PrimaryLoginForm>
      <Formik
        onSubmit={(values) => {
          console.log(values);
          let login = {
            email: values.email,
            password: values.password,
          };
          AuthServices.login(login.email, login.password)
            .then((res) => {
        
             
            })
            .catch((err) => {
            });
        }}
        initialValues={{ password: "", email: "" }}
        validationSchema={SignupSchema}
      >
        {({
          errors,
          touched,
          setFieldValue,
          handleChange,
          setFieldTouched,
          submitForm,
          handleSubmit,
        }) => (
          <Form>
            {" "}
            <table>
              {" "}
              <tr>
                <td>
                  <Field
                    name="email"
                    type="email"
                    class="main"
                    Placeholder="E-MAIL"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </td>
                <td>
                  <Field
                    name="password"
                    type="password"
                    class="main"
                    Placeholder="PASSWORD"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </td>
                <td>
                  <PrimaryButton type="submit">
                    LOGIN
                  </PrimaryButton>
                </td>
              </tr>
              <tr>
                <td>
                  <Field class="main3" name="checked" type="checkbox" />
                  Remember Me
                </td>
                <td className="main3">Forget Password? Click Here.</td>
              </tr>
            </table>
          </Form>
        )}
      </Formik>
    </PrimaryLoginForm>
  );
}

export default LoginForm;
