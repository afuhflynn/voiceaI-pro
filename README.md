# Business Automation Voice Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🚀 Submission Template

* **Challenge**: Business Automation Voice Agent
* **Built With**: AssemblyAI Universal-Streaming, LiveKit (optional), Node.js, Express, TypeScript
* **Repository**:

<embed src="https://github.com/afuhflynn/business-voice-agent" width="100%" height="400px" />

---

## 🎯 Project Overview

A voice-powered agent that automates real-world business processes such as sales outreach, customer support ticket routing, appointment scheduling, and lead qualification. Leveraging AssemblyAI's Universal-Streaming for accurate transcription, entity recognition, and command handling in professional contexts.

### Key Features

* **Real-time Streaming ASR**: High-fidelity transcription of incoming voice streams.
* **Entity & Intent Recognition**: Extracts proper nouns, business terminology, dates, and actions.
* **Workflow Orchestration**: Multi-step conversation flows for tasks like scheduling or support escalation.
* **B2B & B2C Scenarios**:

  * Sales call automation: follow-up, proposal dispatch
  * Customer support: triage tickets based on keywords
  * Appointment booking: interactive calendar integration
  * Lead qualification: ask qualifying questions, score leads

### Technologies

* **Universal-Streaming**: AssemblyAI’s streaming API for transcription & NLP
* **LiveKit**: (Optional) Real-time media orchestration
* **Node.js & Express**: Backend and WebSocket server
* **TypeScript**: Type safety and improved DX
* **Redis**: Session state and workflow management
* **PostgreSQL**: Structured storage of leads, tickets, appointments
* **React**: Demo dashboard for live monitoring (optional)

---

## 📥 Getting Started

### Prerequisites

* Node.js v18+
* Yarn or npm
* Redis
* PostgreSQL
* AssemblyAI API key
* LiveKit credentials (if using LiveKit)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/business-voice-agent.git
   cd business-voice-agent
   ```
2. Install dependencies

   ```bash
   yarn install
   # or npm install
   ```
3. Create a `.env` file at the project root:

   ```dotenv
   ASSEMBLYAI_API_KEY=your_assemblyai_key
   LIVEKIT_API_KEY=your_livekit_key
   LIVEKIT_API_SECRET=your_livekit_secret
   DATABASE_URL=postgres://user:pass@localhost:5432/voice_agent
   REDIS_URL=redis://localhost:6379
   ```
4. Run database migrations (using Prisma)

   ```bash
   npx prisma migrate deploy
   ```
5. Start the server

   ```bash
   yarn dev
   # or npm run dev
   ```

---

## 🎥 Usage

1. **Connect Client**: Use the provided React dashboard or any WebRTC client to join a LiveKit room.
2. **Start Conversation**: Speak into microphone. The voice agent transcribes and processes commands.
3. **Watch Workflow**: Follow logs in the dashboard to see intents, entities, and actions taken.
4. **Customize Flows**: Edit `src/workflows/*.ts` to define new multi-step processes.

---

## 🏗 Architecture

```mermaid
flowchart LR
  A[Client (Mic/WebRTC)] -->|Audio Stream| B[LiveKit Server]
  B -->|Media Stream| C[Node.js ASR Service]
  C -->|Transcripts| D[AssemblyAI Universal-Streaming]
  D -->|Entities & Commands| E[Workflow Engine]
  E -->|Database| F[PostgreSQL/Redis]
  E -->|Actions| G[External APIs]
  E -->|Events| H[React Dashboard]
```

---

## 🛠 Customization

* **Adding Workflows**: Define new flows in `src/workflows/` using the `WorkflowBuilder` API.
* **Language Models**: Swap AssemblyAI endpoints or adjust parameters in `src/config/streaming.ts`.
* **Front-end**: Tweak the React dashboard or build your own monitoring UI.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests against `main`.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 📞 Contact

* Author: Your Name ([your.email@example.com](mailto:your.email@example.com))
* GitHub: [yourusername](https://github.com/yourusername)
* Twitter: [@yourhandle](https://twitter.com/yourhandle)
