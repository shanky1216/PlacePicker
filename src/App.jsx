import React, { useState, useRef, useEffect, useCallback } from "react";
import Header from "./Components/Header";
import Places from "./Components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./Components/Modal";
import DeleteConfirmation from "./Components/DeleteConfirmation";
import { sortPlacesByDistance } from "./loc";

const App = () => {
  const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
  const storedPlaces = storedIds.map((id) =>
    AVAILABLE_PLACES.find((place) => place.id === id)
  );

  const [pikedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // const modal = useRef();
  const [openModal, setOpenModal] = useState(false);
  const SelectedPlace = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handlePick(id) {
    setPickedPlaces((prevState) => {
      const updatePickedPlace = [...prevState];
      const existingPlaceIndex = updatePickedPlace.findIndex(
        (place) => place.id === id
      );
      const existingPlace = updatePickedPlace[existingPlaceIndex];
      if (existingPlace) {
        return prevState;
      }

      const newPlace = AVAILABLE_PLACES.find((place) => place.id === id);
      return [newPlace, ...prevState];
    });
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  const handleDelete = useCallback(function handleDelete(id) {
    setPickedPlaces((prevState) =>
      prevState.filter((place) => place.id !== SelectedPlace.current)
    );
    setOpenModal(false);
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((item) => item.id !== id))
    );
  },[]);

  function handleStartDelete(id) {
    setOpenModal(true);
    SelectedPlace.current = id;
  }
  function handleStopDelete() {
    setOpenModal(false);
  }
  return (
    <div>
      <Modal open={openModal} onClose={handleStopDelete}>
        <DeleteConfirmation
          handleStopDelete={handleStopDelete}
          handleDelete={handleDelete}
        />
      </Modal>
      <Header />
      <Places
        label="I'd like to visit..."
        places={pikedPlaces}
        fallbackText="Select the place you would like to visit below"
        handleSelect={handleStartDelete}
      />
      <Places
        label="Available Places"
        places={availablePlaces}
        fallbackText="Sorting places by distance"
        handleSelect={handlePick}
      />
    </div>
  );
};

export default App;
