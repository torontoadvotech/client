import React, { Fragment } from 'react';
import { ErrorMessage, Field, FormikValues } from 'formik';
import { UserType, FormControl } from '../../lib/types';
import CustomDateMaskInput from './CustomDateMaskInput/CustomDateMaskInput';
import CustomButtonSelectInput from './CustomButtonSelectInput/CustomButtonSelectInput';
import CustomMultipleCheckbox from './CustomMultipleCheckbox/CustomMultipleCheckbox';

import "./dynamicFormBuilder.scss";

import uploadImage from "../../assets/images/upload-image.svg";

interface AccountProfileInitialValues {
  user: UserType | null,
  formControlList: FormControl[],
  formikProps: FormikValues;
}

const DynamicFormBuilder: React.FC<AccountProfileInitialValues> = (props) => {
  const { formikProps } = props;
  return (
    <Fragment>
      {[...props.formControlList].map((formControl, i) => {
        return <div className="form-field " key={i}>
          {formControl.type === "profileImage" &&
            <div className="field-container profile-image" id="profileImage">
              {props.user?.photo
                ?
                <img
                  src={props.user.photo}
                  alt={`${props.user.name}'s profile image`}
                  className="profile-summary--img"
                />

                :
                <img
                  src={uploadImage}
                  alt="Upload new profile image"
                  className="profile-summary--add-img"
                />
              }
              <label htmlFor="photo">Add Profile Image<input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.currentTarget.files) {
                    formikProps.setFieldValue("photo", event.currentTarget.files[0]);
                  }
                }}
                className="form-control"
              /></label>
            </div>
          }
          {/* STANDARD TEXT BOX */}
          {formControl.type === "textbox" &&
            <div className={"field-container standard-text" + ` ${formControl.fieldName}-field`}>
              <label htmlFor={formControl.fieldName}>{formControl.label}</label>
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage
                  component="span"
                  className="form-error"
                  name={formControl.fieldName}
                />
              }
              <Field className="input-height-50" name={formControl.fieldName} type="text" id={formControl.fieldName} placeholder={formControl.placeholder} />
               {/* LINKEDIN STANDARD TEXT BOX */}
              {formControl.fieldName === "linkedinProfile" && <p className="resume-hint">*Sharing your resume or work profile supports your credibility as an applicant to the platform.</p>}
            </div>
          }
          {/* TEXT AREA */}
          {formControl.type === "textarea" &&
            <div className={"field-container textarea-field" + ` ${formControl.fieldName}-field`}>
              <label htmlFor={formControl.fieldName}>{formControl.label}</label>
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage
                  component="span"
                  className="form-error"
                  name={formControl.fieldName}
                />
              }
              <Field className="" name={formControl.fieldName} type="text" as="textarea" placeholder={formControl.placeholder} />
            </div>
          }
          {/* DATE */}
          {formControl.type === "date" &&
            <div className={"field-container date-field" + ` ${formControl.fieldName}-field`}>
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage component="span" className="form-error" name="date" />
              }
              <label htmlFor="fullDateControl">{formControl.label}</label>
              <CustomDateMaskInput formikProps={formikProps} />
            </div>
          }

          {/* GENDER MULTI SELECT */}
          {formControl.type === "genderMultiSelect" &&
            <div className={"field-container gender-field" + ` ${formControl.fieldName}-field`}>
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage component="span" className="form-error" name="gender" />
              }
              <label htmlFor="gender">{formControl.label}</label>
              <CustomButtonSelectInput formikProps={formikProps} />
            </div>
          }

          {/* RADIO GROUP */}
          {(formControl.type === "radioGroup" && formControl.optionsArray) &&
            <div className={"field-container radio-field" + ` ${formControl.fieldName}-field`}>
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage component="span" className="form-error" name={formControl.fieldName} />
              }
              <fieldset className="custom-checkbox-group" role="group">
                <legend><p className="label-text">{formControl.label}</p></legend>
                {formControl.optionsArray.map((radio, i) => {
                  return <label key={`radioGroup-${i}`}>
                    <input name={formControl.fieldName} type="radio" value={radio} />
                    <span className="custom-select-box"></span>{radio}
                  </label>
                })}
              </fieldset>
            </div>
          }

          {/* DROPDOWN */}
          {(formControl.type === "dropdown" && formControl.optionsArray) &&
            <div className={"field-container dropdown-field " + ((formControl.dependentOnField && !formikProps.getFieldProps(formControl.dependentOnField).value) ? "field-disabled" : "") + ` ${formControl.fieldName}-field`}>
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage component="span" className="form-error" name={formControl.fieldName} />
              }
              <label htmlFor={formControl.fieldName}>{formControl.label}</label>
              <Field name={formControl.fieldName} as="select" disabled={formControl.dependentOnField && !formikProps.getFieldProps(formControl.dependentOnField).value}>
                <option value="">N/A</option>
                {formControl.optionsArray.map((option, i) => {
                  return <option value={option.toLowerCase()} key={`options-${i}`}>{option.toUpperCase()}</option>
                })}
              </Field>
            </div>
          }

          {/* MULTIPLE CHECKBOX */}
          {(formControl.type === "multipleCheckbox" && formControl.optionsArray) &&
            <div className={"field-container checkbox-field" + ` ${formControl.fieldName}-field`}>
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              {formikProps.errors[formControl.fieldName] && formikProps.touched[formControl.fieldName] &&
                <ErrorMessage component="span" className="form-error" name={formControl.fieldName} />
              }
              <CustomMultipleCheckbox formControl={formControl} />
            </div>
          }

          {/* RESUME UPLOAD */}
          {formControl.type === "resume" &&
            <label htmlFor={formControl.fieldName}>{formControl.label}<input
               id={formControl.fieldName}
               name={formControl.fieldName}
               type="file"
               accept="image/*"
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 if (event.currentTarget.files) {
                   formikProps.setFieldValue("photo", event.currentTarget.files[0]);
                 }
               }}
               className="form-control"
             /></label>
          }

        </div>

      })}
    </Fragment>
  )
}

export default DynamicFormBuilder;