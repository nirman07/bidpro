import { PrimaryItemForm } from "./ItemForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import React, { useState } from "react";
import Select from "react-select";
import * as Yup from 'yup';

const options = [
  { value: "Bidder", label: "Bidder" },
  { value: "Buyer", label: "Buyer" },
];
function ItemForm() {
  const [selectedOption, setSelectedOption] = useState(null);
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
  });
  return (
    <PrimaryItemForm>
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
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <table>
              <tr>
                <td colSpan={2} className="main2">
                  ADD YOUR ITEM
                </td>
              </tr>
              <tr>
                <td>
                  <label>Item Name:</label>
                  <Field name="fname" class="main" type="text" />
                  {errors.fname && touched.fname ? (
                    <div>{errors.fname}</div>
                  ) : null}
                </td>
                <td>
                  <label>Item Age:</label>
                  <Field name="lname" class="main" type="text" />
                  {errors.lname && touched.lname ? (
                    <div>{errors.lname}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Item-Description:</label>
                  <Field name="email" class="main" type="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </td>
                <td>
                  <label>Item Prize(in USD):</label>
                  <Field name="mobile_no" class="main" type="text" />
                  {errors.mobile_no && touched.mobile_no ? (
                    <div>{errors.mobile_no}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Bidding Start Form:</label>
                  <Field name="houseno" class="main" type="text" />
                  {errors.houseno && touched.houseno ? (
                    <div>{errors.houseno}</div>
                  ) : null}
                </td>
                
              </tr>
              
              <br></br>
              <PrimaryButton type="submit">ADD</PrimaryButton>
            </table>
          </Form>
        )}
      </Formik>
    </PrimaryItemForm>
  );
}

export default ItemForm;
