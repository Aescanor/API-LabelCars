import axios from "axios";
import CarForm from "./CarForm";
import { useState } from "react";

const CreateCar = () => {
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
    // Make sure the URL and method are correct for your server's API.
    axios
      .post("http://localhost:4000/cars/create-car", carObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Car a été ajouté avec succès");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert("Erreur durant l'ajout de car"));
  };

  return (
    <CarForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create Car
    </CarForm>
  );
};

export default CreateCar;
