import { Field } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import { FormControl } from '../../../lib/types';


interface CustomCheckboxProps {
  formControl: FormControl
}

const CustomMultipleCheckbox: React.FC<CustomCheckboxProps> = (props) => {

  const [otherValue, setOtherValue] = useState("");
  const [otherValueChecked, setOtherValueChecked] = useState<boolean>(false);

  useEffect(() => {
    if (otherValue && !otherValueChecked) {
      setOtherValueChecked(true);
    }

  }, [otherValue]);

  return (
    <Fragment>
      <fieldset className="custom-checkbox-group multiple-checkbox" role="group" >
        <legend><p className="label-text">{props!.formControl.label}</p></legend>
        {props.formControl.optionsArray!.map((option, i) => {
          return (option.toLowerCase() === 'other'
            ? <label key={`multipleCheckbox-${i}`}>
              <Field name={`${props!.formControl.fieldName}-${option}`}>
              </Field>
              <span className="custom-select-box"></span>{option}
              <input type="text" name={props!.formControl.fieldName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setOtherValue(e.target.value);
              }}
              />
            </label>
            : <label key={`multipleCheckbox-${i}`}>
              <Field name={`${props!.formControl.fieldName}-${option.replace(/\s/g, '')}`} type="checkbox" value={option} />
              <span className="custom-select-box"></span>{option}
            </label>
          )
        })}
      </fieldset>
    </Fragment>
  )
}

export default CustomMultipleCheckbox;