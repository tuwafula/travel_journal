import React from 'react';

import { GeoAltFill } from 'react-bootstrap-icons';
import './Card.css';

const Card = (props) => {
  console.log(props);

  return (
    <section className="card">
      <div className="card--container">
        <div className="card--image">
          <img
            src={require(`./images/${props.data.imageUrl}`)}
            alt="something"
          />
        </div>
        <div className="card--text">
          <p className="card--text-location">
            <GeoAltFill className="location" />
            {props.data.location}
            <span className="map--link">
              <a href={props.data.googleMapsUrl} target="_blank">
                View on Google Maps
              </a>
            </span>
          </p>
          <h1>{props.data.title}</h1>
          <h3>
            {props.data.startDate} - {props.data.endDate}
          </h3>
          <p>{props.data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
