import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from "yup";
import { UserProfileForm } from '../../lib/types';
import './customDateMaskInput.scss'


interface CustomDateProps {
  formikProps: FormikValues
}

// TODO: update error handling on non numbers
// TODO: add errors for not numbers
// TODO: Look into Formik innerRef


const CustomDateMaskInput: React.FC<CustomDateProps> = (props) => {

  const [dateValue, setDateValue] = useState({ date: "", month: "", year: "" });

  useEffect(() => {
    props.formikProps.setFieldValue('date', `${dateValue.date}-${dateValue.month}-${dateValue.year}`)
  }, [dateValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {

    const value = event.target.value;
    const fieldLength = value?.length;

    if (!value) {
      return;
    }

    if (field === "date" && fieldLength === 2) {
      // Skip to next input
      const monthInputFieldElem = document.getElementById('date_month');
      if (monthInputFieldElem) {
        monthInputFieldElem.focus();
      }

    } else if (field === "month" && fieldLength === 2) {
      // skip to next input
      const yearInputFieldElem = document.getElementById('date_year');
      if (yearInputFieldElem) {
        yearInputFieldElem.focus();
      }
    }
  }


  return (
    <Fragment>
      <Field name="date" type="string" id="fullDateControl" />
      <div className="date-input-container">
        <div className="date-inputs date-input-date">
          <label htmlFor="date_date" className="lower-case-text">dd</label>
          <Field name="date_date" type="string" id="date_date"
            placeholder="14" maxLength="2" size="2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e, 'date');
              setDateValue({ ...dateValue, date: e.target.value });
            }}
          />
        </div>

        <div className="date-inputs date-input-month">
          <label htmlFor="date_date" className="lower-case-text">mm</label>
          <Field name="date_month" type="string" id="date_month"
            placeholder="05" maxLength="2" size="2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e, 'month');
              setDateValue({ ...dateValue, month: e.target.value });
            }} />

        </div>

        <div className="date-inputs date-input-year">
          <label htmlFor="date_date" className="lower-case-text">yyy</label>
          <Field name="date_year" type="string" id="date_year"
            placeholder="1992" maxLength="4" size="4"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDateValue({ ...dateValue, year: e.target.value });
            }} />
        </div>
      </div>

    </Fragment>
  )
}

export default CustomDateMaskInput;