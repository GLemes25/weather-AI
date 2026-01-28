import { fetchWeatherData } from "./weather";

export const startVoiceRecognition = () => {
  // API de reconhecimento de voz do navegador
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Reconhecimento de voz não suportado neste navegador.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.start();

  // Evento disparado quando o usuário fala
  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const transcript = event.results[0][0].transcript;
    const input = document.querySelector<HTMLInputElement>(".city-input");
    if (input) {
      input.value = transcript;
      // Busca os dados do clima
      fetchWeatherData();

      recognition.stop();
    }
  };
};
