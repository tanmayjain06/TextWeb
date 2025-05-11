# 🕸️ TextWeb

**TextWeb** is a full-stack AI-powered web app that turns plain English prompts into fully working websites. Describe your idea, and the app generates HTML/CSS/JS/react code with live previews — all in your browser.

---

## ✨ Features

- 🔤 **Text-to-Website Generation** powered by Groq LLaMA 3
- ⚛️ **Live Code Editing** using Vite + React
- 🧠 **Smart Prompt Handling** (Node.js or React project detection)
- 🗂️ **File Explorer + Viewer** with real file-like structure
- 🚀 **Live Preview** powered by WebContainer (by StackBlitz)

---

## 🛠️ Tech Stack

### Frontend

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [StackBlitz WebContainer](https://webcontainer.io)

### Backend

- [Express](https://expressjs.com/) + TypeScript
- [Groq API (LLaMA 3)](https://console.groq.com)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [axios](https://axios-http.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/textweb.git
cd textweb

cd be
npm install
# Add your Groq API key to .env
echo "GROQ_API_KEY=your_key_here" > .env
npm run dev

cd ../frontend
npm install
npm run dev

🧠 Powered By
Groq LLaMA 3

StackBlitz WebContainer

OpenAI-Compatible APIs

Contributions are welcome! Feel free to:

Fork the repo

Submit pull requests

Open issues for improvements or bugs



