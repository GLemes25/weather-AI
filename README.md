# 🌤️ Previsão do Tempo IA - DevClub

![Banner do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-green?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap&logoColor=white)

O **Previsão do Tempo IA** é uma aplicação web moderna que não apenas informa o clima em tempo real, mas utiliza Inteligência Artificial para sugerir o que vestir. Integrando comandos de voz e processamento de linguagem natural via Groq API, o projeto oferece uma experiência de usuário fluida e inteligente.

---

## 📱 Funcionalidades

- **Busca por Cidade:** Consulta instantânea de temperatura, umidade e condições climáticas.
- **Comando de Voz:** Interface mãos-livres utilizando a Web Speech API para busca de cidades.
- **Consultoria de Moda via IA:** Sugestões personalizadas de roupas baseadas nos dados climáticos atuais.
- **Interface Responsiva:** Design limpo e adaptável para diferentes tamanhos de tela.
- **Localização:** Dados e respostas configurados totalmente em Português do Brasil (PT-BR).

---

## 🛠️ Tecnologias e Ferramentas

| Categoria               | Tecnologia                                                                        |
| :---------------------- | :-------------------------------------------------------------------------------- |
| **Ferramenta de Build** | [Vite](https://vitejs.dev/)                                                       |
| **Linguagem**           | [TypeScript](https://www.typescriptlang.org/)                                     |
| **IA Engine**           | [Groq API (Llama 4)](https://groq.com/)                                           |
| **Clima Engine**        | [OpenWeatherMap SDK](https://openweathermap.org/)                                 |
| **Voz Engine**          | [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) |

---

## 📁 Estrutura do Projeto

A organização segue o princípio de modularização para separar a lógica de negócio das APIs:

```text
src/
 ├── ai.ts          # Lógica de integração com a API Groq
 ├── config.ts      # Gerenciamento de chaves e variáveis de ambiente
 ├── main.ts        # Ponto de entrada e manipulação de eventos do DOM
 ├── voice.ts       # Configuração da Web Speech API para voz
 ├── weather.ts     # Integração com SDK do OpenWeatherMap
 └── style.css      # Estilização visual do projeto
```

## 🔐 Configuração das APIs

Este projeto depende de duas chaves externas. Crie um arquivo `.env` na raiz do projeto:

OpenWeather: Obtenha sua chave gratuita no [portal do desenvolvedor.](https://openweathermap.org/api)

Groq Cloud: Gere sua API Key no [Groq Console.](https://console.groq.com)

```Snippet de código
VITE_OPEN_WEATHER_API_KEY=sua_chave_openweather
VITE_GROQ_API_KEY=sua_chave_groq
```

## ▶️ Como Rodar o Projeto

### Pré-requisitos

- Node.js

- Gerenciador de pacotes (npm ou yarn).

### Instalação

Clone o repositório:

```Bash
git clone [https://github.com/GLemes25/weather-AI.git](https://github.com/GLemes25/weather-AI.git)
```

Instale as dependências:

```Bash
npm install
```

Inicie o servidor de desenvolvimento:

```Bash
npm run dev
```

## 🧠 Detalhes Técnicos da IA

**- Modelo:** meta-llama/llama-4-maverick-17b

**- Contexto:** A IA recebe os dados exatos de temperatura e umidade para gerar uma recomendação prática.

**- Prompt Engineering:** Instruído para responder em apenas duas frases curtas, mantendo a objetividade e utilidade para o usuário.

## 📌 Boas Práticas Adotadas

- Tipagem Estática: Uso de TypeScript para garantir a consistência dos dados das APIs.

- Módulos ES6: Separação clara de funções para facilitar testes e manutenção.

- Segurança: Variáveis de ambiente protegidas via Vite `import.meta.env.`

- Tratamento de Erros: Feedback visual caso uma cidade não seja encontrada

## 👨‍💻 Autor

**Gabriel Lemes de Oliveira**

Desenvolvedor de Software focado em soluções modernas e IA.
