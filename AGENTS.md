# Clean Express API Governance

Project-local governance for the clean-express-api repository.

## 1. Technical Standards
- Node.js, TypeScript, Express.
- Architecture: Clean Architecture with decoupled layers (Domain, Use Cases, Presentation, Infrastructure).
- Tooling: ESLint (`npm run lint`), Prettier (`npm run format`), Jest (`npm test`), and `tsc` (`npm run build`).

## 2. Quality & Validation
- Testing: All unit and integration tests must pass via `npm test`.
- Strict typing: Strict null checks and zero `any` usage.
- Security: Dependency hygiene via `npm audit`.
