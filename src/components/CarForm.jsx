import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const CarForm = (props) => {
  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    type: Yup.string().required("Required"),
    motor: Yup.string().required("Required"),
    picture: Yup.string().required("Required"),
    kilometer: Yup.number().required("Required"),
    clutch: Yup.bool().required("Required"),
    climatisation: Yup.bool().required("Required"),
    gps: Yup.boolean().required("Required"),
    pricePerDay: Yup.number(),
  });

  console.log(props);

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label htmlFor="brand">Marque:</label>
            <Field name="brand" type="text" className="form-control" />
            <ErrorMessage
              name="brand"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="model">Model:</label>
            <Field name="model" type="text" className="form-control" />
            <ErrorMessage
              name="model"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="date">Date de mise en service:</label>
            <Field name="date" type="date" className="form-control" />
            <ErrorMessage
              name="date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="type">Type:</label>
            <Field name="type" as="select" className="form-control">
              <option value="">Select a type</option>
              <option value="sedan">Berline</option>
              <option value="suv">SUV</option>
              <option value="monospace">Monospace</option>
              <option value="4*4">4*4</option>
              <option value="sport">Sport</option>
            </Field>
            <ErrorMessage
              name="type"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="motor">Motorisation:</label>
            <Field name="motor" as="select" className="form-control">
              <option value="">Select a type</option>
              <option value="diesel">Diesel</option>
              <option value="essence">Essence</option>
              <option value="gpl">G.P.L</option>
              <option value="electric">Électrique</option>
              <option value="hybrid">Hybride</option>
            </Field>
            <ErrorMessage
              name="motor"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="picture">Picture:</label>
            <Field name="picture">
              {({ field, form }) => (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      form.setFieldValue(
                        "picture",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <ErrorMessage
                    name="picture"
                    className="d-block invalid-feedback"
                    component="span"
                  />
                </div>
              )}
            </Field>
          </FormGroup>
          <FormGroup>
            <label htmlFor="kilometer">Kilometrage</label>
            <Field name="kilometer" type="number" className="form-control" />
            <ErrorMessage
              name="kilometer"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Embrayage : </label>
            <div>
              <label>
                <Field type="radio" name="clutch" value="automatic" />
                Automatique
              </label>
              <label>
                <Field type="radio" name="clutch" value="manual" />
                Manuel
              </label>
            </div>
            <ErrorMessage
              name="type"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>G.P.S : </label>
            <div>
              <label>
                <Field type="radio" name="gps" value="yes" />
                Oui
              </label>
              <label>
                <Field type="radio" name="gps" value="no" />
                Non
              </label>
            </div>
            <ErrorMessage
              name="gps"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="pricePerDay">Tarif journalier</label>
            <Field name="pricePerDay" type="number" className="form-control" />
            <ErrorMessage
              name="pricePerDay"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>{" "}
        </Form>
      </Formik>
    </div>
  );
};

export default CarForm;
