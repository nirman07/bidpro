import React from "react";
import * as Yup from 'yup';
import { PrimaryLoginForm } from "./LoginForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";

function LoginForm() {
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
        onSubmit={(values) => {}}
        initialValues={{ password: "", email: "" }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
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
                  <PrimaryButton type="submit">Login</PrimaryButton>
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
