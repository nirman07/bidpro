import { PrimaryRegistrationForm } from "./Registration.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import React, { useState } from "react";
import Select from "react-select";
import * as Yup from "yup";
import useHooks from "./Registration.hooks";
import AuthServices from "../../../Services/Auth.Services";
import Toastr from "toastr"


function RegistrationForm() {


  const [ user, setUser ] = useState({
    fname: "",
          lname: "",
          email: "",
          mobile_no: "",
          houseno: "",
          street: "",
          city: "",
          pin: "",
          password: "",
          role: "",
          category: [],
  })


  let { roles, categories } = useHooks();
  const SignupSchema = Yup.object().shape({
    fname: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    lname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    mobile_no: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    houseno: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    street: Yup.string()
      .min(2, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
    city: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    pin: Yup.string()
      .min(5, "Too Short!")
      .max(7, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    role: Yup.string().required("Role Required"),
    category: Yup.array().min(1, 'Category Required').required("Category Required"),
  });
  return (
    <PrimaryRegistrationForm>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          mobile_no: "",
          houseno: "",
          street: "",
          city: "",
          pin: "",
          password: "",
          role: "",
          category: [],
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          let user = {
            "f_name": values.fname,
            "l_name": values.lname,
            "email": values.email,
            "password": values.password,
            "mobile": values.mobile_no,
            "category_id":values.category,
            "roles_id":values.role,
            "address": [
              {
                "house_no": values.houseno,
                "street": values.street,
                "city": values.city,
                "pin": values.pin
              }
            ]
          }
          AuthServices.register(user).then((res)=>{
            toastr.success('User Successfully Registered!', 'Now you can Log In')

          })
        }}
      >
        {({
          errors,
          touched,
          setFieldValue,
          handleChange,
          setFieldTouched,
        }) => (
          <Form>
            <table>
              <tr>
                <td colSpan={2} className="main2">
                  FREE SIGN UP
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="main3">
                  Sign-up takes less than 30 seconds.
                </td>
              </tr>
              <tr>
                <td>
                  <label>First Name:</label>
                  <Field name="fname" class="main" type="text" />
                  {errors.fname && touched.fname ? (
                    <div>{errors.fname}</div>
                  ) : null}
                </td>
                <td>
                  <label>Last Name:</label>
                  <Field name="lname" class="main" type="text" />
                  {errors.lname && touched.lname ? (
                    <div>{errors.lname}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                  <Field name="email" class="main" type="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </td>
                <td>
                  <label>Mobile No.:</label>
                  <Field name="mobile_no" class="main" type="text" />
                  {errors.mobile_no && touched.mobile_no ? (
                    <div>{errors.mobile_no}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>House no:</label>
                  <Field name="houseno" class="main" type="text" />
                  {errors.houseno && touched.houseno ? (
                    <div>{errors.houseno}</div>
                  ) : null}
                </td>
                <td>
                  <label>Street:</label>
                  <Field name="street" class="main" type="text" />
                  {errors.street && touched.street ? (
                    <div>{errors.street}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>City:</label>
                  <Field name="city" class="main" type="text" />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ) : null}
                </td>
                <td>
                  <label>PinCode:</label>
                  <Field name="Pin" class="main" type="text" />
                  {errors.pin && touched.pin ? <div>{errors.pin}</div> : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Role:</label>
                  <div className="app">
                    <Select
                      name="role"
                      id="role"
                      options={roles}
                      onFocus={() => {
                        setFieldTouched("role");
                      }}
                      onChange={(selectedOption: any) => {
                        setFieldValue("role", selectedOption.value);
                      }}
                    />
                  </div>
                  {errors.role && touched.role ? (
                    <div>{errors.role}</div>
                  ) : null}
                </td>

                <td>
                  <label>Category:</label>
                  <div className="app">
                    <Select
                      name="category"
                      id="category"
                      options={categories}
                      isMulti={true}
                      onFocus={() => {
                        setFieldTouched("category");
                      }}
                      onChange={(selectedOption: any) => {
                        let option = selectedOption.map((val: any) => { return val.value })
                        console.log(option)
                        setFieldValue("category", option);
                      }}
                    />
                  </div>
                  {errors.category && touched.category ? (
                    <div>{errors.category}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                  <Field name="password" class="main" type="password" />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="main4">
                  <Field class="main4" name="checked" type="checkbox" />I accept
                  the Terms and Conditions and the Privacy Policy of BidBid.com
                </td>
              </tr>
              <br></br>
              <PrimaryButton type="submit">Register</PrimaryButton>
            </table>
          </Form>
        )}
      </Formik>
    </PrimaryRegistrationForm>
  );
}

export default RegistrationForm;
