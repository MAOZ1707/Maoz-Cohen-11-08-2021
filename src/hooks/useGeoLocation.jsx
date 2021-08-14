import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    error: null,
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: Math.round(location.coords.latitude),
        lon: Math.round(location.coords.longitude),
      },
      error: null,
    });
  };

  const onError = (error) => {
    setLocation((state) => ({
      ...state,
      loaded: true,
      error,
    }));
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        message: "GeoLocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};
export default useGeoLocation;
