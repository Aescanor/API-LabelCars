import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Corrected import
import axios from "axios";

const CarTableRow = (props) => {
  const { _id, brand, model, date, type, motor, picture, kilometer, clutch, climatisation, gps, pricePerDay } =
    props.obj;

  const deleteCar = () => {
    axios
      .delete("http://localhost:4000/cars/delete-car/" + _id) // Use delete method for delete request
      .then((res) => {
        if (res.status === 200) {
          alert("Car a bien été supprimé");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Erreur !"));
  };

  return (
    <tr>
      <td>{brand}</td>
      <td>{model}</td>
      <td>{date}</td>
      <td>{type}</td>
      <td>{motor}</td>
      <td>{picture}</td>
      <td>{kilometer}</td>
      <td>{clutch}</td>
      <td>{climatisation}</td>
      <td>{gps}</td>
      <td>{pricePerDay}</td>
      <td>
        <Link className="edit-link" to={"/edit-car/" + _id}>
          Modifier
        </Link>
        <Button onClick={deleteCar} size="sm" variant="danger">
          Supprimer
        </Button>
      </td>
    </tr>
  );
};

export default CarTableRow;
