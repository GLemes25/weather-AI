import OpenWeatherMap from "openweathermap-ts";
import type { CurrentResponse } from "openweathermap-ts/dist/types";
import { OPEN_WEATHER_API_KEY } from "./config";

const cityInput = document.querySelector<HTMLInputElement>(".city-input");
const weatherResult = document.getElementById("weatherResult");

// Mapeia a condição principal do OpenWeather para a imagem de fundo local
const backgroundMap: Record<string, string> = {
  Clear: "/img/backgrounds/sunny.jpg",
  Clouds: "/img/backgrounds/cloudy.jpg",
  Rain: "/img/backgrounds/rain.png",
  Drizzle: "/img/backgrounds/rain.png",
  Snow: "/img/backgrounds/snow.jpg",
  Thunderstorm: "/img/backgrounds/thunderstorm.png",
};

// Atualiza o background do body com transição suave via opacity
const updateBackground = (weatherCondition: string): void => {
  const imagePath =
    backgroundMap[weatherCondition] ?? "/img/backgrounds/default.png";

  document.body.classList.add("is-changing");
  setTimeout(() => {
    document.body.style.backgroundImage = `url('${imagePath}')`;
    document.body.classList.remove("is-changing");
  }, 300);
};

// Função responsável por buscar os dados do clima
export const fetchWeatherData = async () => {
  if (!cityInput || !weatherResult) return;

  const cityName = cityInput.value.trim();
  if (!cityName) return;

  // Instancia a SDK do OpenWeather
  const owm = new OpenWeatherMap({
    apiKey: OPEN_WEATHER_API_KEY,
    units: "metric",
    language: "pt_br",
  });

  try {
    // Busca o clima atual usando o SDK (já tipado)
    const data = await owm.getCurrentWeatherByCityName({ cityName });

    renderWeather(data);
    // Atualiza o fundo de acordo com a condição climática retornada
    updateBackground(data.weather[0].main);
  } catch (error) {
    // Em caso de erro (ex: cidade não encontrada)
    weatherResult.innerHTML = `<h2 class="city-name">Cidade não encontrada ❌</h2>`;
    console.error(error);
  }
};

// Exibir os dados do clima na interface
const renderWeather = (data: CurrentResponse) => {
  weatherResult!.innerHTML = `
    <h2 class="city-name">${data.name}</h2>
    <p class="temperature">${Math.floor(data.main.temp)} °C</p>

    <img
      class="weatherIcon"
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
      alt="${data.weather[0].description}"
    />

    <p class="humidity">Humidade: ${data.main.humidity}%</p>

    <button class="ai-button" id="aiButton">Sugestão de Roupa</button>
    <p class="ai-response">

    </p>
  `;
};
