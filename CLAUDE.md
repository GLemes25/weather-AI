# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar com o código deste repositório.

## Comandos

```bash
npm run dev       # Inicia o servidor de desenvolvimento Vite
npm run build     # Verifica os tipos com tsc e gera o build de produção
npm run preview   # Pré-visualiza o build de produção localmente
```

Não há testes nem script de lint configurados.

## Configuração do Ambiente

Copie `.env.example` para `.env` e preencha as duas chaves antes de rodar:

```
VITE_OPEN_WEATHER_API_KEY=   # Chave da API do openweathermap.org
VITE_GROQ_API_KEY=           # Chave da API do console.groq.com
```

O Vite expõe essas variáveis via `import.meta.env.VITE_*`. Elas são centralizadas em `src/config.ts` — todos os módulos importam de lá.

## Arquitetura

Esta é uma SPA vanilla com TypeScript + Vite. Não há framework; o DOM é manipulado diretamente.

**Fluxo de dados:**

1. `main.ts` conecta os eventos do DOM aos três módulos — `weather.ts`, `voice.ts`, `ai.ts`.
2. `weather.ts` usa o SDK `openweathermap-ts` para buscar o clima pelo nome da cidade e renderiza um bloco HTML no `#weatherResult`. O HTML renderizado inclui o botão `#aiButton`.
3. `ai.ts` lê os valores do clima diretamente do DOM renderizado (`.city-name`, `.temperature`, `.humidity`) e chama a API REST do Groq (`meta-llama/llama-4-maverick-17b-128e-instruct`) para gerar uma sugestão de roupa em duas frases, escrevendo o resultado em `.ai-response`.
4. `voice.ts` usa a Web Speech API do navegador (locale `pt-BR`) para preencher o campo de cidade e então dispara `fetchWeatherData()`.

**Acoplamento crítico:** `ai.ts` extrai dados do DOM em vez de recebê-los como argumentos. Se os nomes de classe em `renderWeather()` (`weather.ts`) forem alterados, `generateClothingSuggestion()` (`ai.ts`) falhará silenciosamente.

**Estilos:** `public/style.css` é carregado globalmente via `index.html`. As imagens de fundo em `public/img/backgrounds/` correspondem a condições climáticas, mas ainda não estão conectadas programaticamente.
