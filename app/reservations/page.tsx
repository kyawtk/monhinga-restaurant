"use client";
import React from "react";
import { useFormik } from "formik";
import { times } from "../../constants";
import { error } from "console";
const Reservations = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.size) {
      errors.size = "Required";
    } else if (values.size < 1) {
      errors.size = "At least 1 Person sir!";
    } else if (values.size > 4) {
      errors.size = "We can't accomodate more than 4 sir.";
    }
    if (!values.number) {
      errors.number = "Required";
    } else if (!/^\+959\d{7,9}$/i.test(values.number)) {
      errors.number = "Invalid Phone number";
    }
    if (!values.date) {
      errors.date = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      specialRequest: "",
      date: "",
      size: 1,
      time: "9:00 AM",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="inneWidth bg-white pb-20">
      <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto items-center justify-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl my-20">
          {" "}
          +959 420 691 00
        </h1>
        <p className="font-semibold tracking-tighter [word-spacing:5px]  text-xl leading-loose">
          Please inquire about reservations at least two weeks in advance by
          using the form below. For reservations within the coming week, or for
          parties larger than four, please call us at the number listed above.
          We will call you to confirm your reservation at least 24 hours prior
          to your reservation.
        </p>

        <form className="w-full" onSubmit={formik.handleSubmit}>
          <label>
            Name (Required)
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="form-error">{formik.errors.name}</div>
            ) : null}
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="form-error">{formik.errors.email}</div>
            ) : null}
          </label>
          <label>
            Ph.Number (Required)
            <input
              type="text"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="form-error">{formik.errors.number}</div>
            ) : null}
          </label>
          <label>
            Special Requests
            <textarea
              className="min-h-[150px] border border-gray-500 "
              name="specialRequest"
              value={formik.values.specialRequest}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </label>
          <label>
            Date (Required)
            <input
            className="w-[300px]"
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="form-error">{formik.errors.date}</div>
            ) : null}
          </label>
          <label>
            Party Size (Required)
            <input
              type="number"
              name="size"
              value={formik.values.size}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             {formik.touched.size && formik.errors.size ? <div className="form-error">{formik.errors.size}</div> : null}
          </label>
          <label>
            Time (Required)
            <select
            className="w-[300px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              name="time"
              id="time"
            >
              {times.map((time) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </label>
          <input type="submit" value={"Submit"} className="hover:bg-black hover:text-white px-4 py-3 font-semibold rounded-md active:bg-yellow-400" />
        </form>
      </div>
    </section>
  );
};

export default Reservations;
