# Clean Express API 🏗️

A production-ready Node.js API developed with **Express** and **TypeScript**, following strict **Clean Architecture** and **Clean Code** principles. This repository serves as a reference for scalable backend design, testability, and separation of concerns.

---

### 🏛️ Architecture Overview

The project is structured into concentric layers where dependencies always point inward toward the Domain:

- **Domain Layer**: Contains Entities and Use Cases (Pure Business Logic). Zero dependencies on external frameworks.
- **Presentation Layer**: Contains Controllers and Protocols that translate Web requests for the Domain.
- **Main Layer**: Handles Dependency Injection, Framework configuration (Express), and Server bootstrap.

#### Project Structure
```text
├── src/
│   ├── domain/        # Entities and Use Cases
│   ├── presentation/  # Controllers and Interface Adapters
│   ├── main/          # Infrastructure, Configuration, and Adapters
│   └── server.ts      # Application Entrypoint
├── dist/              # Compiled output (Gitignored)
├── .env               # Infrastructure secrets (Gitignored)
└── package.json       # Scripts and dependencies
```

---

### 🛠️ Technical Stack

- **Runtime**: [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Static Typing & Safety)
- **Security**: [Helmet](https://helmetjs.github.io/) (Secure Headers)
- **Testing**: [Jest](https://jestjs.io/) & [Supertest](https://github.com/ladjs/supertest) (Unit & Integration)

---

### 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Infrastructure Configuration**
   ```bash
   cp .env.example .env
   ```

3. **Development Mode**
   ```bash
   npm run dev
   ```

4. **Testing Suite**
   ```bash
   npm test
   ```

---

**Allysson Rodrigues**
Backend Infrastructure & AI Engineering
