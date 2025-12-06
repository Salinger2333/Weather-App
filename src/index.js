const getWeather = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&contentType=json&key=KFUQMJVQTXDEU2L9D9ZZT9D9V`,
  );
  if (!response.ok) {
    console.log("error: " + response.status);
  }
  const json = await response.json();
  console.log(json);
};

getWeather("changsha")
