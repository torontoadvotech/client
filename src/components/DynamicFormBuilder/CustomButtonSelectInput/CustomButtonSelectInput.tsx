import { Field, FormikValues } from 'formik';
import React, { Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';

import "./customButtonSelectInput.scss";

interface CustomButtonProps {
  formikProps: FormikValues
}

const CustomButtonSelectInput: React.FC<CustomButtonProps> = (props) => {

  const [select, setSelected] = useState("");

  useEffect(() => {
    // Handles if user goes back to pre-populated form
    if (props.formikProps.values.gender && !props.formikProps.touched?.gender && !select) {
      const genderValue = props.formikProps.values.gender;
      if (genderValue === "male") {
        setSelectFields("male")
      } else if (genderValue === "female") {
        setSelectFields("female")
      } else {
        notlistedInputRef.current.value = genderValue;
        setSelectFields(genderValue);
      }
    }
  }, [])

  useEffect(() => {
    props.formikProps.setFieldValue('gender', select)
  }, [select]);

  const maleButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const femaleButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const notListedButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const notlistedInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const setSelectFields = (value: string) => {
    if (value === 'male') {
      maleButtonRef?.current.classList.add('selected-button');
      femaleButtonRef?.current.classList.remove('selected-button');
      notListedButtonRef?.current.classList.remove('selected-button');

      setSelected('male');

    } else if (value === "female") {
      femaleButtonRef?.current.classList.add('selected-button');
      maleButtonRef?.current.classList.remove('selected-button');
      notListedButtonRef?.current.classList.remove('selected-button');

      setSelected('female');
    } else {
      notListedButtonRef?.current.classList.add('selected-button');
      maleButtonRef?.current.classList.remove('selected-button');
      femaleButtonRef?.current.classList.remove('selected-button');

      notlistedInputRef?.current!.focus();
      setSelected(notlistedInputRef.current.value);
    }
  }

  const clickHandler = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => {
    setSelectFields(e.target.value)
  }

  return (
    <Fragment>
      <div className="button-grid-container">
        <Field name="gender" type="text" id="genderInput" />

        <button ref={maleButtonRef} className="gender-select" type="button" value="male"
          onClick={(e: React.MouseEvent<HTMLElement>) => clickHandler(e)}>
          Male
        </button>
        <button ref={femaleButtonRef} className="gender-select" type="button" value="female"
          onClick={(e: React.MouseEvent<HTMLElement>) => clickHandler(e)}>
          Female
        </button>
        <button ref={notListedButtonRef} className="gender-select not-listed" type="button" value="notListed"
          onClick={(e: React.MouseEvent<HTMLElement>) => clickHandler(e)}>
          Not Listed
        </button>
        <input ref={notlistedInputRef} className="not-listed input-height-50" type="text" placeholder="Please specify..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => clickHandler(e)} />
      </div>
    </Fragment>
  )
}

export default CustomButtonSelectInput;