# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Common Development Commands

### Running the Application

# Development with hot-reload

npm run start:dev

# Production mode

npm run start:prod

### Testing

npm test
npm run test:e2e
npm run test:cov

### Code Quality

npm run format
npm run lint
npm run build

## Architecture Overview

This is a NestJS + TypeScript application with a modular architecture.

- AppModule — root module, imports all feature modules
- ClaudeModule — wraps the Anthropic SDK, exports ClaudeService

## REST Endpoints

POST /claude/chat — single-turn chat with Claude
POST /claude/chat/history — multi-turn chat with message history

## Environment Variables

ANTHROPIC_API_KEY=your-api-key-here

## Code Conventions

- Use TypeScript strict mode, avoid any types
- Keep controllers thin, business logic belongs in services
- Use async/await over raw Promises
- All services must be @Injectable()
- Model in use: claude-sonnet-4-6
