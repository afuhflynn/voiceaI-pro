-- Initialize database schema for voice agent
-- This script creates tables for knowledge base, conversations, and learning data

-- Knowledge Base table
CREATE TABLE IF NOT EXISTS knowledge_base (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100),
    domain VARCHAR(100) NOT NULL,
    tags TEXT[],
    embedding VECTOR(1536), -- For vector similarity search
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conversations table for learning
CREATE TABLE IF NOT EXISTS conversations (
    id SERIAL PRIMARY KEY,
    user_input TEXT NOT NULL,
    agent_response TEXT NOT NULL,
    domain VARCHAR(100) NOT NULL,
    confidence_score FLOAT,
    feedback_score INTEGER, -- User feedback (1-5)
    session_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Learning metrics table
CREATE TABLE IF NOT EXISTS learning_metrics (
    id SERIAL PRIMARY KEY,
    domain VARCHAR(100) NOT NULL,
    metric_name VARCHAR(100) NOT NULL,
    metric_value FLOAT NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Voice processing logs
CREATE TABLE IF NOT EXISTS voice_logs (
    id SERIAL PRIMARY KEY,
    audio_duration FLOAT,
    transcription_confidence FLOAT,
    processing_time FLOAT,
    domain VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_knowledge_domain ON knowledge_base(domain);
CREATE INDEX IF NOT EXISTS idx_knowledge_category ON knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_conversations_domain ON conversations(domain);
CREATE INDEX IF NOT EXISTS idx_conversations_session ON conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_learning_metrics_domain ON learning_metrics(domain);

-- Insert sample knowledge base entries
INSERT INTO knowledge_base (title, content, category, domain, tags) VALUES
('API Authentication Best Practices', 'Use OAuth 2.0 or JWT tokens for secure API authentication. Implement rate limiting and token expiration.', 'Security', 'Technical Support', ARRAY['api', 'authentication', 'security']),
('Database Performance Tuning', 'Optimize database queries using proper indexing, query analysis, and connection pooling strategies.', 'Performance', 'Technical Support', ARRAY['database', 'performance', 'optimization']),
('Server Monitoring Setup', 'Implement comprehensive server monitoring with alerts for CPU, memory, disk usage, and network performance.', 'Monitoring', 'Technical Support', ARRAY['server', 'monitoring', 'alerts']),
('Troubleshooting Network Issues', 'Diagnose network problems by checking connectivity, DNS resolution, firewall rules, and bandwidth usage.', 'Networking', 'Technical Support', ARRAY['network', 'troubleshooting', 'connectivity']);
