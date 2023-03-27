

autocomplete.addListener("place_changed", () => {
  const place = autocomplete.getPlace();
  console.log(place.name);
});

input.addEventListener("input", () => {
  const inputText = input.value;
  if (inputText.length > 0) {
    const service = new google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      {
        input: inputText,
        types: ["(cities)"],
        componentRestrictions: { country: country }
      },
      (predictions, status) => {
        if (status === "OK") {
          const cities = predictions.map(prediction => prediction.description);
          console.log(cities);
        } else {
          console.log(status);
        }
      }
    );
  }
});