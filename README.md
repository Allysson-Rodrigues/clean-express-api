# Clean Express API

[![CI](https://github.com/Allysson-Rodrigues/clean-express-api/actions/workflows/ci.yml/badge.svg)](https://github.com/Allysson-Rodrigues/clean-express-api/actions/workflows/ci.yml)

Reference API built with Express and TypeScript, organized around Clean Architecture boundaries and a small but testable HTTP surface.

## What this repository demonstrates

- Domain, presentation, and main layers with inward-facing dependencies
- Express adapters that keep controllers framework-independent
- Sample endpoints for health checks and welcome responses
- Jest + Supertest coverage for domain and HTTP behavior
- ESLint + Prettier quality baseline

## Technical stack

- Runtime: Node.js
- Framework: Express 4
- Language: TypeScript
- Security: Helmet, CORS
- Testing: Jest, Supertest
- Tooling: ESLint, Prettier, `tsx`

## Architecture snapshot

```text
.
├── src/
│   ├── domain/        Entities and use cases
│   ├── presentation/  Controllers and HTTP protocols
│   ├── main/          App setup, route wiring, and adapters
│   └── server.ts      Runtime entry point
├── .env.example
├── eslint.config.js
├── jest.config.cjs
├── tsconfig.json
└── package.json
```

Current public routes:

- `GET /health`
- `GET /api/welcome`

## Local setup

1. Install dependencies:

```bash
npm ci
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Start the API in development:

```bash
npm run dev
```

4. Run the quality gate:

```bash
npm run lint
npm run build
npm test
```

## Environment contract

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | HTTP port for the Express server |
| `NODE_ENV` | `development` | Runtime mode |

The repository ships with [`.env.example`](./.env.example) as the baseline contract.

## Testing and CI

The automated test suite currently covers:

- domain use cases
- server integration with Supertest

GitHub Actions now runs on pushes and pull requests to `main` with:

- install via `npm ci`
- `npm run lint`
- `npm run build`
- `npm test`

## Delivery notes

This repository is intentionally infrastructure-agnostic. `npm run build` emits the compiled server to `dist/`, which can be deployed to any Node-compatible runtime or wrapped in your own container/platform pipeline.

## License

ISC
