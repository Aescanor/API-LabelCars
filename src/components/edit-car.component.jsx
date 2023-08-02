import axios from "axios";
import React, { useEffect } from "react";
import CarForm from "./CarForm";

export const EditCar = (props) => {
  const [formValues, setFormValues] = useState({
    brand: "",
    model: "",
    date: "",
    type: "",
    motor: "",
    picture: "",
    kilometer: "",
    clutch: false,
    climatisation: false,
    gps: false,
    pricePerDay: 0,
  });

  const onSubmit = (carObject) => {
    axios
      .put(`http://localhost:3001/cars/${props.match.params._id}`, carObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Car modifié avec succès !");
          props.history.push("/car-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Erreur !"));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/cars/${props.match.params._id}`)
      .then((res) => {
        const {
          brand,
          model,
          date,
          type,
          motor,
          picture,
          kilometer,
          clutch,
          climatisation,
          gps,
          pricePerDay,
        } = res.data;
        setFormValues({
          brand,
          model,
          date,
          type,
          motor,
          picture,
          kilometer,
          clutch,
          climatisation,
          gps,
          pricePerDay,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CarForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      MAJ Car
    </CarForm>
  );
};

export default EditCar;
