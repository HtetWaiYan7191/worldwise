import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeoLocation } from "../hooks/useGeoLocation";
import Button from "./Button";
import useSearchUrl from "../hooks/useSearchUrl";
import LogOut from "./LogOut";



export default function Map() {
  const [mapPosition, setMapPosition] = useState([35.6586, 139.7454]);
  const {lat, lng} = useSearchUrl();
  const { cities } = useCities();
  const {
    isLoading: isLoadingGeo,
    position: positionGeo,
    getPosition,
  } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if(positionGeo) setMapPosition([positionGeo.lat, positionGeo.lng])
  }, [positionGeo])

  return (
    <div className="relative flex-1 bg-gray-600 map-container">
      <MapContainer
        className="h-[100vh]"
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
      >
        {
          !positionGeo && <div className="absolute p-8 bottom-10 z-[10000] flex justify-center w-full">
          <Button onClick={() => getPosition()}>{isLoadingGeo ? 'Loading' : 'Use Current Location'}</Button>
        </div>
        }
        <LogOut/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities?.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.emoji} {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeMapCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeMapCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
