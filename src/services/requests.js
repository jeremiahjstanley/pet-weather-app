
export const fetchWeather = async (latitude, longitude) => {
  const url = `${process.env.PROXY}https://api.darksky.net/forecast/${process.env.SECRET}/${latitude},${longitude}`;
  const response = await fetch(url);
  return await response.json();
};     