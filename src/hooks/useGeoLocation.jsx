import { useState } from "react";

export function useGeoLocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [position, setPosition] = useState(null);

  function getPosition() {
    setIsLoading(true);

    if(!navigator.geolocation) {
        throw new Error('You browser does not support navigator geolocation ! 😞')
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
      setIsLoading(false);
    } , (error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
    });
  }

  return { position, isLoading, errorMessage, getPosition };
}
