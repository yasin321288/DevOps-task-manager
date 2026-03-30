# 🚀 DevOps Task Manager

A production-ready full-stack application demonstrating **Docker containerization, backend architecture, and CI/CD pipeline concepts**.

---

# 📌 Phase 1: Basic Setup

### ✅ Implementations
- Built frontend using Next.js
- Built backend using Node.js (Express)
- Created REST API for task management
- Connected frontend with backend

### 📸 Screenshots

#### Frontend Running
![Frontend](docs/phase1/frontend-running.png)

#### Backend Running
![Backend](docs/phase1/backend-running.png)

#### API Test
![API](docs/phase1/api-test.png)

#### Full App Working
![App](docs/phase1/full-app-working.png)

---

# 📌 Phase 2: Backend Refactoring & Persistence

### ✅ Implementations
- Refactored backend into MVC structure (controllers, routes)
- Implemented file-based persistence using JSON
- Ensured tasks persist after server restart

### 📸 Screenshots

#### Backend Structure
![Structure](docs/phase2/backend-structure.png)

#### Data Persistence
![Data](docs/phase2/data-persistence.png)

#### Persistent App State
![App](docs/phase2/app-persistent.png)

---

# 📌 Phase 3: Dockerization 🐳

### ✅ Implementations
- Containerized frontend and backend using Docker
- Created separate Dockerfiles for both services
- Built Docker images and ran containers locally

### 📸 Screenshots

#### Backend Container Running
![Backend Container](docs/phase3/backend-container.png)

#### Frontend Container Running
![Frontend Container](docs/phase3/frontend-container.png)

---

# ⚠️ Challenges Faced & Fixes

## ❌ Issue: Node.js Version Mismatch

While building the frontend Docker image, the build failed due to incompatible Node.js version.

### 📸 Error Screenshot
![Docker Build Error](docs/phase3/frontend-error.png)

---

## 🔍 Root Cause

The Dockerfile was using an outdated base image:

```Dockerfile
FROM node:18
```
However, the installed Next.js version required:
Node.js >= 20.9.0

## Fix Applied

Updated the Docker base image:

```Dockerfile
FROM node:20
```

After rebuilding the Docker image, the application built and ran successfully.

---

# 📌 Phase 4: Docker Compose (Multi-Container Setup)

### ✅ Implementations
- Created docker-compose.yml to manage multiple services
- Connected frontend and backend containers using Docker network
- Enabled inter-service communication using service names
- Ran full application using a single command

### 📸 Screenshots

#### Docker Compose Running
![Compose](docs/phase4/docker-compose-running.png)

#### Full System Working
![System](docs/phase4/full-system-working.png)

#### Containers Running
![Containers](docs/phase4/containers.png)

