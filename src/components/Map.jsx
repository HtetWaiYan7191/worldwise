import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";

export default function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([35.6586, 139.7454]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { cities } = useCities();
  
  useEffect(() => {
    if(lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng])

  return (
    <div className="flex-1 bg-gray-600 map-container">
      <MapContainer
        className="h-[100vh]"
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
      >
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
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

function ChangeMapCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick(){
  const navigate = useNavigate()
  useMapEvents({
    click: (e) => {
      console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    }
  })
}
