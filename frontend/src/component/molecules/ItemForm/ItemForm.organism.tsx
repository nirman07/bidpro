import { PrimaryItemForm } from "./ItemForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import React, { useState } from "react";
import Select from "react-select";
import useHooks from "./Item.hooks";
import AuthServices from "../../../Services/Auth.Services";
import * as Yup from 'yup';
import Toastr from "toastr"
function ItemForm() {
    const [ user, setUser ] = useState({
        item_name: "",
        item_age: "",
              item_description: "",
              item_prize: "",
              bid_start_time: "",
              category: [],
      })
    let{ categories } = useHooks();
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
      category: Yup.array().min(1, 'Category Required').required("Category Required"),
  });
  return (
    <PrimaryItemForm>
      <Formik
        initialValues={{
          item_name: "",
          item_age: "",
          item_description: "",
          item_prize: "",
          bid_start_time: "",
          category: [],
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          let item = {
            "item_name": values.item_name,
            "item_age": values.item_age,
            "item_description": values.item_description,
            "item_prize": values.item_prize,
           
            "category_id":values.category,
            "bid_start_time":values.bid_start_time,
           
            
          }
          AuthServices.item(item).then((res)=>{
            toastr.success('Your Item Is Successfully Added for Bid');
          }).catch((err)=>{
            toastr.error('Error');
          })
        }}
      >
        {({ errors,
          touched,
          setFieldValue,
          handleChange,
          setFieldTouched,
          submitForm,
          handleSubmit }) => (
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
                  <Field name="item_name" class="main" type="text" />
                  {errors.item_name && touched.item_name ? (
                    <div>{errors.item_name}</div>
                  ) : null}
                </td>
                <td>
                  <label>Item Age:</label>
                  <Field name="item_age" class="main" type="text" />
                  {errors.item_age && touched.item_age ? (
                    <div>{errors.item_age}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Item-Description:</label>
                  <Field name="item_description" class="main" type="textare" />
                  {errors.item_description && touched.item_description ? (
                    <div>{errors.item_description}</div>
                  ) : null}
                </td>
                <td>
                  <label>Item Prize(in USD):</label>
                  <Field name="item_prize" class="main" type="text" />
                  {errors.item_prize && touched.item_prize ? (
                    <div>{errors.item_prize}</div>
                  ) : null}
                </td>
              </tr>
              <tr>
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
                <td>
                  <label>Bidding Start Form:</label>
                  <Field name="bid_start_time" class="main" type="date" />
                  {errors.bid_start_time && touched.bid_start_time ? (
                    <div>{errors.bid_start_time}</div>
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