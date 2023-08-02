import axios from "axios";
import React, { useEffect, useState } from "react";
import CarTableRow from "./CarTableRow"; // Import the CarTableRow component

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/")
      .then(({ data }) => {
        setCars(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    
    return cars.map((res, i) => {
      return <CarTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Model</th>
            <th>Date</th>
            <th>Type</th>
            <th>Motor</th>
            <th>Kilometrage</th>
            <th>Embrayage</th>
            <th>Climatisation</th>
            <th>G.P.S</th>
            <th>Forfait Journalier</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default CarList;
