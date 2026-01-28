import { generateClothingSuggestion } from "./ai";
import { startVoiceRecognition } from "./voice";
import { fetchWeatherData } from "./weather";

// Referência aos elementos pelo ID
const voiceButton = document.getElementById("voiceButton");
const weatherResult = document.getElementById("weatherResult");
const weatherForm = document.getElementById("weatherForm");

// Evento do formulário (ENTER ou submit)
weatherForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchWeatherData();
});

// Evento do botão de voz
voiceButton?.addEventListener("click", () => {
  startVoiceRecognition();
});

// Evento do botão de IA
weatherResult?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;

  // Verifica se clicou no botão IA
  if (target.id === "aiButton") {
    generateClothingSuggestion();
  }
});
