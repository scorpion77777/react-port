import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
export default function Contact() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(
              15,
              <p className="text-red-600 text-xl italic">
                "Must be 15 characters or less"
              </p>
            )
            .required(
              <p className="text-red-600 text-sm italic">"Required"</p>
            ),
          lastName: Yup.string()
            .max(
              20,
              <p className="text-red-600 text-sm italic">
                "Must be 20 characters or less"
              </p>
            )
            .required(
              <p className="text-red-600 text-sm italic">"Required"</p>
            ),
          email: Yup.string()
            .email(
              <p className="text-red-600 text-sm italic">
                "Invalid email address"
              </p>
            )
            .required(
              <p className="text-red-600 text-sm italic">"Required"</p>
            ),
          acceptedTerms: Yup.boolean()
            .required(<p className="text-red-600 text-sm italic">"Required"</p>)
            .oneOf(
              [true],
              <p className="text-red-600 text-sm italic">
                "You must accept the terms and conditions."
              </p>
            ),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required(
              <p className="text-red-600 text-sm italic">"Required"</p>
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <motion.span
            whileHover={{
              scale: 1.4,
              textShadow: "0px 0px 8px rgb(255, 16, 240)",
            }}
            className="text-black text-4xl font-thin flex flex-col align-middle items-center mt-8 cursor-pointer"
          >
            Subscribe!
          </motion.span>
          <div className="flex flex-col space-x-8 space-y-2 mt-8">
            <label className="text-xl ml-8">First name:</label>
            <MyTextInput
              className="text-xl border-2 p-4 w-full h-12 border-gray-400 rounded-md"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <label className="text-xl">Lastname:</label>
            <MyTextInput
              className="text-xl border-2 p-4 w-full h-12 border-gray-400 rounded-md"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <label className="text-xl">Email:</label>
            <MyTextInput
              className="text-xl border-2 p-4 w-full h-12 border-gray-400 rounded-md"
              name="email"
              type="email"
              placeholder="jane@mail.com"
            />
            <label className="text-xl ">Job type:</label>
            <MySelect
              className="text-xl h-12 w-full text-white border-2 border-gray-400 rounded-md bg-blue-700"
              name="jobType"
            >
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckbox className="text-xl" name="acceptedTerms">
              <span className="p-4">I accept the terms and conditions</span>
            </MyCheckbox>

            <button
              className="rounded-md h-12 text-xl bg-blue-700 hover:bg-green-500 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
