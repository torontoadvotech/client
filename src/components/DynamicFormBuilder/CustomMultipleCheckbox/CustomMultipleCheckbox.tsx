import { Field, FormikValues } from 'formik';
import React, { Fragment, MutableRefObject, useEffect, useReducer, useRef, useState } from 'react';
import { FormControl } from '../../../lib/types';


interface CustomCheckboxProps {
  formikProps: FormikValues,
  formControl: FormControl
}

const CustomMultipleCheckbox: React.FC<CustomCheckboxProps> = (props) => {

  const [ otherValue, setOtherValue ] = useState("");
  const otherCheckbox = useRef() as MutableRefObject<HTMLInputElement>;

  // TODO: Figure out why the values don't inlucde the other boxed values

  useEffect(() => {
    console.log('using effect', otherValue);
    
    otherCheckbox.current.checked = !!otherValue;
  }, [otherValue]);

  return (
    <Fragment>
      <fieldset className="custom-checkbox-group multiple-checkbox" role="group" >
        <legend><p className="label-text">{props!.formControl.label}</p></legend>
        {props.formControl.optionsArray!.map((option, i)=> {
          return ( option.toLowerCase() === 'other' 
            ? <label key={`multipleCheckbox-${i}`}>
                <Field innerRef={otherCheckbox} name={props!.formControl.fieldName} type="checkbox" value="test" checked/>
                <span className="custom-select-box"></span>{option}
                <input type="text" name={props!.formControl.fieldName} onChange={(e: React.ChangeEvent<HTMLInputElement>)  =>  {
                  setOtherValue(e.target.value);
                }}
                />
              </label>
            : <label key={`multipleCheckbox-${i}`}>
                <Field name={props!.formControl.fieldName} type="checkbox" value={option} />
                <span className="custom-select-box"></span>{option}
              </label>
          )
        })}
      </fieldset>
    </Fragment>
  )
}

export default CustomMultipleCheckbox;