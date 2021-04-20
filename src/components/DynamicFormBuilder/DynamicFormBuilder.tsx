import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { UserProfileForm, UserType, FormControl } from '../../lib/types';
import CustomDateMaskInput from './CustomDateMaskInput/CustomDateMaskInput';
import CustomButtonSelectInput from './CustomButtonSelectInput/CustomButtonSelectInput';
import CustomMultipleCheckbox from './CustomMultipleCheckbox/CustomMultipleCheckbox';

import "./dynamicFormBuilder.scss";

import uploadImage from "../../assets/images/upload-image.svg";

interface AccountProfileInitialValues {
  initialValues: any,
  onSubmit: any,
  user: UserType | null,
  formControlList: FormControl[],
  validationSchema: any
  buttons?: {prev?: {text: string, url: string}, submitText?: string}
}

const DynamicFormBuilder: React.FC<AccountProfileInitialValues> = (props) => {

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        return (
          <Form>
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
                  <div className="field-container">
                    <label htmlFor={formControl.fieldName}>{formControl.label}</label>
                    <ErrorMessage
                      component="span"
                      className="form-error"
                      name={formControl.fieldName}
                    />
                    <Field className="input-height-50" name={formControl.fieldName} type="text" id={formControl.fieldName} placeholder={formControl.placeholder} />
                  </div>
                }
                {/* DATE */}
                {formControl.type === "date" &&
                  <div className="field-container">
                    <ErrorMessage component="span" className="form-error" name="date" />
                    <label htmlFor="fullDateControl">{formControl.label}</label>
                    <CustomDateMaskInput formikProps={formikProps} />
                  </div>
                }

                {/* GENDER MULTI SELECT */}
                {formControl.type === "genderMultiSelect" &&
                  <div className="field-container">
                    {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
                    <ErrorMessage component="span" className="form-error" name="gender" />
                    <label htmlFor="gender">{formControl.label}</label>
                    <CustomButtonSelectInput formikProps={formikProps}/>
                  </div>
                }
                
                {/* RADIO GROUP */}
                {(formControl.type === "radioGroup" && formControl.optionsArray) &&
                  <div className="field-container">
                    {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
                    <ErrorMessage component="span" className="form-error" name={formControl.fieldName} />
                    <fieldset className="custom-checkbox-group" role="group">
                      <legend><p className="label-text">{formControl.label}</p></legend>
                      {formControl.optionsArray.map((radio, i)=> {
                        return <label key={`radioGroup-${i}`}>
                          <input name={formControl.fieldName} type="radio" value={radio}/>
                          <span className="custom-select-box"></span>{radio}
                        </label>
                      })}
                    </fieldset>
                  </div>
                }

                {/* DROPDOWN */}
                {(formControl.type === "dropdown" && formControl.optionsArray) &&
                  <div className={"field-container field-dropdown " + ((formControl.dependentOnField && !formikProps.getFieldProps(formControl.dependentOnField).value) && "field-disabled")}>
                    {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
                    <ErrorMessage component="span" className="form-error" name={formControl.fieldName} />                    
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
                  <div className="field-container">
                    {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
                    <ErrorMessage component="span" className="form-error" name={formControl.fieldName} />
                    <CustomMultipleCheckbox formikProps={formikProps} formControl={formControl}/>
                    {/* <fieldset className="custom-checkbox-group multiple-checkbox" role="group">
                     <legend><p className="label-text">{formControl.label}</p></legend>
                      {formControl.optionsArray.map((radio, i)=> {
                        return ( radio.toLowerCase() === 'other' 
                          ? <label key={`multipleCheckbox-${i}`}>
                              <input name={formControl.fieldName} type="checkbox" value={radio}/>
                              <span className="custom-select-box"></span>{radio}
                            </label>
                          : <label key={`multipleCheckbox-${i}`}>
                              <input name={formControl.fieldName} type="checkbox" value={radio}/>
                              <span className="custom-select-box"></span>{radio}
                            </label>
                        )
                      })}
                    </fieldset> */}
                  </div>
                }

              </div>
            })}

            <div className={"button-container " + (props.buttons?.prev ? 'flex-j-space-between' : 'flex-j-center' )}>
              { props.buttons
                ? <>
                  {props.buttons.prev && 
                    <a type="button" className="button previous-button" href={props.buttons.prev.url}>Back</a>
                  }
                  {props.buttons.submitText 
                    ? <button type="submit" className="button-primary submit-button">
                        {props.buttons.submitText}
                      </button>
                    : <button type="submit" className="button-primary submit-button" >Submit</button>
                  }
                  </>
                : <button type="submit" className="button-primary submit-button" >Submit</button>
              }
            </div>
          </Form >
        );
      }}
    </Formik >
  )
}

export default DynamicFormBuilder;