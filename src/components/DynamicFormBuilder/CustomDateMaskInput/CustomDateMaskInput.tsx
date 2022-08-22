import React, { Fragment, useEffect, useState } from 'react';
import { Field, FormikValues } from 'formik';
import './customDateMaskInput.scss'

interface CustomDateProps {
  formikProps: FormikValues
}

const CustomDateMaskInput: React.FC<CustomDateProps> = (props) => {

  const [dateValue, setDateValue] = useState({ date: "", month: "", year: "" });

  useEffect(() => {
    // Handles if user goes back to pre-populated form
    if (props.formikProps.values.date && !props.formikProps.touched?.date_date && !props.formikProps.touched?.date_month && !props.formikProps.touched?.date_year && !dateValue.date && !dateValue.month && !dateValue.year) {
      const wholeDateValue = props.formikProps.values.date;
      setDateValue({
        date: wholeDateValue.split("-")[0],
        month: wholeDateValue.split("-")[1],
        year: wholeDateValue.split("-")[2]
      });
    }
  }, [])

  useEffect(() => {
    if (!dateValue.date && !dateValue.month && !dateValue.year) {
      props.formikProps.setFieldValue('date', "")
    } else {
      props.formikProps.setFieldValue('date', `${dateValue.date}-${dateValue.month}-${dateValue.year}`)
    }

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
            value={dateValue.date}
          />
        </div>

        <div className="date-inputs date-input-month">
          <label htmlFor="date_date" className="lower-case-text">mm</label>
          <Field name="date_month" type="string" id="date_month"
            placeholder="05" maxLength="2" size="2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e, 'month');
              setDateValue({ ...dateValue, month: e.target.value });
            }}
            value={dateValue.month}
          />

        </div>

        <div className="date-inputs date-input-year">
          <label htmlFor="date_date" className="lower-case-text">yyyy</label>
          <Field name="date_year" type="string" id="date_year"
            placeholder="1992" maxLength="4" size="4"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDateValue({ ...dateValue, year: e.target.value });
            }}
            value={dateValue.year}
          />
        </div>
      </div>

    </Fragment>
  )
}

export default CustomDateMaskInput;