import { secret, proxy} from "../secret"

export const fetchWeather = async (latitude, longitude) => {
  const url = `${proxy}https://api.darksky.net/forecast/${secret}/${latitude},${longitude}`;
  const response = await fetch(url);
  return await response.json();
};     