import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/cluj-img.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Cluj Napoca, Romania</PText>
          <a
            href="https://www.google.com/maps/place/Cluj-Napoca/@46.7793035,23.4702492,11z/data=!4m5!3m4!1s0x47490c1f916c0b8b:0xbbc601c331f148b!8m2!3d46.7712101!4d23.6236353"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in google map{' '}
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
