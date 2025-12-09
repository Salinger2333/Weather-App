import createBreif from "./component/weatherBrief.js";
import './style.css'
const getWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=conditions%2Cdatetime%2Cdescription%2Cfeelslike%2Cicon%2Cname%2Coffset%2Cpm2p5%2Csource%2CsunriseEpoch%2CsunsetEpoch%2Ctemp%2Ctempmax%2Ctempmin%2Cuvindex&key=KFUQMJVQTXDEU2L9D9ZZT9D9V&contentType=json`,
    );
    if (!response.ok) {
      throw new Error("error: " + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("fail:" + error);
  }
};
// const query = document.querySelector(".query");
// const container = document.querySelector(".container");
const breif = document.querySelector('.breif')
const btn = document.querySelector("button");
const locationInput = document.querySelector("#location");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const locationValue = locationInput.value;
  const data = await getWeather(locationValue);
  breif.replaceChildren()
  const { days } = data;
  days.forEach(async (day) => {
    const breifComponent = await createBreif(day);
    breif.append(breifComponent);
  });
});
