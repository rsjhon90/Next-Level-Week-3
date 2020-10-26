import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

function OrphanagesMap() {
  useEffect(() => {
    api.get('orphanages').then(response => {
      const orphanages = response.data;
    })
  }, []);

  return (
    <div id="page-map">
      <aside>

        <header>
          <img src={mapMarkerImg} alt="Mapa Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map
        center={[-22.9939708, -43.2522617]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}>

        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer url={`https://www.google.com/maps/search/?api=1/{z}/{x}/{y}?access_token=${process.env.REACT_APP_GOOGLEMAPSTOKEN}`}  /> */}

        <Marker
          icon={mapIcon}
          position={[-22.9939708, -43.2522617]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas
                    <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )
}

export default OrphanagesMap;