import React, { useState, useEffect } from 'react';
import styles from './listPins.module.css';
import PinCard from "../pinCard/pinCard.view";
import {Link, useHistory, useLocation} from "react-router-dom";
import {PIN} from "../../routes/routes";

const ListPins = () => {

  const [pins, setPins] = useState([]);
  const { history } = useHistory();
  const { location } = useLocation();

  const goToPin = (id) => {
    history.push(PIN + id);
  }

  useEffect(() => {
    const url = 'https://sheetdb.io/api/v1/4mueuudmwry9n';
    const options = {
      method: 'GET',
      headers: new Headers(),
    };

    fetch(url, options)
      .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          return Promise.reject(response.status);
        }
      )
      .then(payload => {
          console.log("saved");
          setPins(payload);
        }
      )
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      {pins && pins.map(pin => {
        return (
          <>
            <div onClick={() => goToPin(pin.id)}>
              <PinCard
                name={pin.name}
                description={pin.description}
                image_url={pin.img_url}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ListPins;

