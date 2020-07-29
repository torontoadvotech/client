import React, { ReactElement } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "../../lib/API";
import { UserType } from "../../lib/types";
import { User } from "../../containers/user.container";

interface Props {
  endEditProfile: () => void;
}

export default function EditProfile({ endEditProfile }: Props): ReactElement {
  const { user, setUser } = User.useContainer();
  // Initial form values
  const initialValues: UserType = {
    name: user!.name,
    photo: undefined,
    email: user!.email,
    bio: user!.bio,
    pronouns: user!.pronouns,
    location: user!.location,
  };

  // Validate user inputs before submission (will also be validated by the server)
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    photo: Yup.mixed(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    bio: Yup.string(),
    pronouns: Yup.string(),
  });

  // Send request to update user
  const onSubmit = async (values: UserType) => {
    // Update user in the database and save the returned updated version to update the user stored in memory
    const formData = new FormData();

    for (const field in values) {
      formData.append(field, values[field]);
    }

    const res = await API.editMyProfile(formData, user!.token);

    if (res.data) {
      // Update user saved in memory & end editing
      setUser({ token: user!.token, ...res.data.data });
      endEditProfile();
    } else {
      // TODO: Add UX for error handling
      console.log("Update failed");
    }
  };

  return (
    <div className="form-container form-container__edit-profile">
      <button className="back" onClick={endEditProfile}>
        Back
      </button>

      <h1>Edit Profile</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          const { setFieldValue } = props;
          return (
            <Form>
              <div className="field-container profile-image">
                <label htmlFor="photo">File upload</label>
                <img
                  src={user?.photo}
                  alt={`${user?.name}'s profile image`}
                  className="profile-summary--img"
                />
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.currentTarget.files) {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }
                  }}
                  className="form-control"
                />
              </div>
              <div className="field-container">
                <label htmlFor="name">Full Name</label>
                <ErrorMessage
                  component="span"
                  className="form-error"
                  name="name"
                />
                <Field name="name" type="text" />
              </div>
              <div className="field-container">
                <label htmlFor="pronouns">Pronouns</label>
                <ErrorMessage
                  component="span"
                  className="form-error"
                  name="pronouns"
                />
                <Field name="pronouns" type="text" />
              </div>
              <div className="field-container">
                <label htmlFor="email">Email</label>
                <ErrorMessage
                  component="span"
                  className="form-error"
                  name="email"
                />
                <Field name="email" type="email" />
              </div>
              <div className="field-container">
                <label htmlFor="Bio">Bio</label>
                <ErrorMessage
                  component="span"
                  className="form-error"
                  name="Bio"
                />
                <Field name="Bio" component="textarea" />
              </div>

              <button type="submit" className="button-primary">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
