import { GROQ_API_KEY } from "./config";

export const generateClothingSuggestion = async () => {
  // Dados do clima
  const city = document.querySelector(".city-name")?.textContent;
  const temp = document.querySelector(".temperature")?.textContent;
  const humidity = document.querySelector(".humidity")?.textContent;
  const aiResponse = document.querySelector(".ai-response");

  if (!city || !temp || !humidity || !aiResponse) return;

  aiResponse.textContent = "Pensando na melhor roupa...";

  try {
    // Requisição para a API da Groq
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: `Sugira uma roupa para ${city} com temperatura ${temp} e umidade ${humidity}. Duas frases curtas.`,
            },
          ],
        }),
      },
    );

    // Resposta da API em JSON
    const data = await response.json();

    // VERIFICAÇÃO DE ERRO: Se a resposta não for 200 OK, lançamos o erro
    if (!response.ok) {
      console.error("Erro detalhado da Groq:", data);
      throw new Error(
        data.error?.message || "Erro desconhecido na API da Groq",
      );
    }

    // Exibe o resultado da IA na tela
    aiResponse.textContent = data.choices[0].message.content;
  } catch (error) {
    console.error("Falha ao gerar sugestão:", error);
    aiResponse.textContent =
      "Desculpe, não consegui gerar uma sugestão no momento. ❌";
  }
};
