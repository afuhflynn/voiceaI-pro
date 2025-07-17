# AI Voice Agent with RAG and Continuous Learning

A specialized voice agent with advanced domain expertise, featuring Retrieval-Augmented Generation (RAG), continuous learning capabilities, and real-time voice processing.

## Features

### 🎤 Advanced Voice Processing
- Real-time speech-to-text with domain-specific terminology recognition
- Universal-Streaming technology for precise recognition
- Voice visualization and audio level monitoring
- Text-to-speech with natural voice synthesis

### 🧠 RAG-Powered Intelligence
- Vector-based knowledge retrieval
- Domain-specific knowledge base management
- Semantic search capabilities
- Context-aware response generation

### 📚 Continuous Learning
- Conversation history analysis
- Performance metrics tracking
- Knowledge base auto-expansion
- Pattern recognition improvement

### 🎯 Domain Specialization
- Technical Support
- Legal Advisory
- Medical Consultation
- Educational Assistance
- Customer Service

## Architecture

### Frontend Components
- **Voice Interface**: Real-time audio processing and visualization
- **Knowledge Base**: RAG-enabled document management
- **Conversation History**: Learning-focused interaction tracking
- **Agent Metrics**: Performance and learning analytics

### Backend Services
- **Voice Processing API**: Speech-to-text with domain awareness
- **Response Generation**: RAG-enhanced AI responses
- **Knowledge Management**: Vector search and storage
- **Learning Pipeline**: Continuous improvement system

### Database Schema
- Knowledge base with vector embeddings
- Conversation logs for learning
- Performance metrics tracking
- Voice processing analytics

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **AI SDK**: Vercel AI SDK with streaming
- **Voice Processing**: Web Speech API + AssemblyAI integration ready
- **Vector Search**: Embeddings-based semantic search
- **Database**: PostgreSQL with vector extensions
- **Styling**: Tailwind CSS with shadcn/ui components

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL with vector extension
- OpenAI API key
- (Optional) AssemblyAI API key for production voice processing

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/ai-voice-agent.git
cd ai-voice-agent
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your API keys:
\`\`\`env
OPENAI_API_KEY=your_openai_key
ASSEMBLYAI_API_KEY=your_assemblyai_key (optional)
DATABASE_URL=your_postgresql_url
\`\`\`

4. Initialize the database:
\`\`\`bash
npm run db:init
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## Usage

### Voice Interaction
1. Click "Start Listening" to begin voice input
2. Speak your question or request
3. The agent processes your speech with domain-specific recognition
4. Receive AI-generated responses with RAG enhancement
5. Listen to spoken responses or read text output

### Knowledge Base Management
1. Navigate to the Knowledge Base tab
2. Add domain-specific documents and information
3. Use semantic search to find relevant content
4. Monitor knowledge base growth and usage

### Continuous Learning
1. Review conversation history for patterns
2. Monitor agent performance metrics
3. Observe learning progress indicators
4. Analyze domain expertise development

## RAG Implementation

The system uses a sophisticated RAG pipeline:

1. **Document Ingestion**: Knowledge base items are converted to embeddings
2. **Query Processing**: User questions are embedded for similarity search
3. **Retrieval**: Most relevant documents are retrieved based on vector similarity
4. **Generation**: AI responses are enhanced with retrieved context
5. **Learning**: Conversations are analyzed to improve future retrievals

## Voice Processing Pipeline

1. **Audio Capture**: Real-time microphone input
2. **Speech Recognition**: Domain-aware transcription
3. **Intent Analysis**: Understanding user requirements
4. **Response Generation**: RAG-enhanced AI responses
5. **Speech Synthesis**: Natural voice output

## Deployment

### Vercel Deployment
\`\`\`bash
npm run build
vercel deploy
\`\`\`

### Docker Deployment
\`\`\`bash
docker build -t ai-voice-agent .
docker run -p 3000:3000 ai-voice-agent
\`\`\`

## API Endpoints

- `POST /api/voice/process` - Process audio input
- `POST /api/voice/generate` - Generate AI responses
- `GET /api/knowledge` - Retrieve knowledge base
- `POST /api/knowledge` - Add knowledge items
- `POST /api/knowledge/search` - Semantic search

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests and documentation
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Acknowledgments

- Vercel AI SDK for streaming AI responses
- AssemblyAI for voice processing capabilities
- OpenAI for language model integration
- shadcn/ui for component library
