import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import'../styles/pages/orphanages-map.css';

function OrphanagesMap () {
    return(
        <div id="page-map">
            <aside>

                <header>
                    <img src={ mapMarkerImg } alt="Mapa Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map 
                center={[-22.9939708,-43.2522617]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}>

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <TileLayer url={`https://www.google.com/maps/search/?api=1/{z}/{x}/{y}?access_token=${process.env.REACT_APP_GOOGLEMAPSTOKEN}`}  /> */}

            </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    )
}

export default OrphanagesMap;