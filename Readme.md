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

---

# 📌 Phase 5: AWS EC2 Deployment (Cloud Setup)

### 🎯 Objective
Deploy the containerized full-stack application to a cloud environment and make it accessible over the internet.

---

### ✅ Implementations

- Created an AWS EC2 instance (Ubuntu, t3.micro - Free Tier)
- Configured security group with required ports:
  - 22 (SSH)
  - 80 (HTTP)
  - 3000 (Frontend)
  - 5000 (Backend)
- Established secure SSH connection using key pair (.pem)
- Installed Docker and Docker Compose on EC2 instance
- Pushed complete project to GitHub repository
- Resolved Git submodule issue (frontend nested repo fix)
- Cloned project from GitHub into EC2
- Built and deployed multi-container application using Docker Compose
- Verified inter-container communication (frontend ↔ backend)
- Exposed application via EC2 public IP

---

### 🌐 Live Application

http://13.232.56.252:3000



### 📸 Screenshots

#### 🔹 EC2 Instance Running
![EC2](docs/phase5/ec2-running.png)

#### 🔹 Docker Installed
![Docker](docs/phase5/docker-installed.png)

#### 🔹 Docker Compose Installed
![Compose](docs/phase5/docker-compose-installed.png)

#### 🔹 Repository Cloned
![Repo](docs/phase5/repo-cloned.png)

#### 🔹 Security Group Configuration
![Security](docs/phase5/security-group-fixed.png)

#### 🔹 Key Pair Setup
![KeyPair](docs/phase5/keypair.png)

#### 🔹 Running Containers
![Containers](docs/phase5/containers-running.png)

#### 🔹 Live Application
![Live](docs/phase5/live-app.png)


### ⚠️ Challenges Faced

- Faced Docker build failure due to missing frontend Dockerfile
- Encountered Git submodule issue where frontend was treated as a separate repository
- Resolved by removing nested `.git` and re-adding frontend as a normal directory
- Handled OS-specific command differences (Linux vs PowerShell)
b

### 💡 Key Learnings

- Real-world cloud deployment using AWS EC2
- Dockerized application deployment in production-like environment
- Importance of correct Git structure (avoiding submodules unintentionally)
- Networking concepts (ports, security groups, public access)
- Debugging deployment issues in remote environments