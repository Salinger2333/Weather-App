const getWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&contentType=json&key=KFUQMJVQTXDEU2L9D9ZZT9D9V`,
    );
    if (!response.ok) {
      throw new Error("error: " + response.status);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log("fail:" + error);
  }
};

const btn = document.querySelector("button");
const locationInput = document.querySelector("#location");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const locationValue = locationInput.value;
  getWeather(locationValue);
});
