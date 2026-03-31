# 🚀 DevOps Task Manager

A production-ready full-stack application demonstrating **end-to-end DevOps practices**, including containerization, cloud deployment, reverse proxy configuration, and CI/CD automation.

---

## 🧠 Project Overview

This project showcases how a modern application is built, containerized, deployed to the cloud, and automated using CI/CD pipelines.

It follows a **phase-wise DevOps approach**, covering:

- Application Development (Frontend + Backend)
- Docker Containerization
- Multi-container orchestration (Docker Compose)
- Cloud Deployment (AWS EC2)
- Reverse Proxy (NGINX)
- CI/CD Pipeline (Jenkins)
- Docker Hub Integration
- Production Optimization & Cleanup

---

## ⚙️ Tech Stack

Frontend:
- Next.js

Backend:
- Node.js (Express)

DevOps:
- Docker
- Docker Compose
- Jenkins
- Docker Hub
- NGINX
- AWS EC2

---

## 🚀 Final Architecture
User
↓
NGINX (Reverse Proxy)
↓
Docker Containers (Frontend + Backend)
↓
Jenkins (CI/CD Pipeline)
↓
Docker Hub (Image Registry)
↓
GitHub (Source Code)

![App](docs/phase9/final-architecture.png)


---

## 🔁 CI/CD Workflow
Developer → git push
↓
GitHub Repository
↓
Jenkins Pipeline
↓
Docker Build
↓
Docker Hub Push
↓
Docker Compose Deployment
↓
Application Running 🚀


![App](docs/phase9/ci-cd-flow.png)

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

---

# 📌 Phase 6: NGINX Reverse Proxy (Production Routing)

### objective

Convert the application from a development setup (multiple exposed ports) into a production-ready architecture using NGINX as a reverse proxy, providing a single public entry point.

### Implementations

-Installed and configured NGINX on EC2 instance
-Set up reverse proxy to route:
/ → Frontend (Next.js running on port 3000)
/api → Backend (Node.js running on port 5000)
-Eliminated direct exposure of backend service
-Updated frontend API calls to use /api instead of hardcoded backend URL
-Enabled clean URL access via port 80 (no port in browser)
-Verified end-to-end communication through NGINX

### 🌐 Live Application

http://3.110.41.183

### 📸 Screenshots

####🔹 NGINX Installed
![NGINX](docs/phase6/nginx-installed.png)

####🔹 NGINX Welcome Page
![NGINX](docs/phase6/nginx-welcome.png)

####🔹 NGINX Configuration
![NGINX](docs/phase6/nginx-config.png)

####🔹 API Working via NGINX
![NGINX](docs/phase6/api-working.png)

####🔹 Final Application (No Port Access)
![NGINX](docs/phase6/final-app-nginx.png)

### ⚠️ Challenges Faced

-Faced issue where frontend could not fetch data due to incorrect API base URL
-Encountered environment variable conflicts in Docker setup
-Observed Cannot GET /api confusion due to missing root route in backend

### 🔍 Fixes Applied

-Replaced API base URL with:
const API_BASE = "/api";
-Removed unnecessary environment variables from docker-compose.yml
-Configured NGINX reverse proxy correctly for / and /api routes
-Used git reset --hard to resolve EC2 vs GitHub sync issues

-Rebuilt containers using:

    docker-compose down
    docker-compose up --build -d

### 💡 Key Learnings

-Understanding of reverse proxy architecture using NGINX
-Difference between development vs production deployments
-Importance of routing and API abstraction (/api)
-Handling environment variables in containerized applications
-Real-world debugging of deployment, networking, and Git conflicts
-Separation of application layer and infrastructure layer

### 🧠 Architecture After Phase 6

![NGINX](docs/phase6/architechture.png)

---

# 📌 Phase 7: Jenkins CI/CD with Docker Hub

### Objective

Automate the build and deployment process using Jenkins by integrating Docker and Docker Hub to achieve a complete CI/CD pipeline.

### Implementation

-Installed Jenkins locally using Docker
-Configured Jenkins pipeline for CI/CD
-Connected Jenkins with GitHub repository
-Built Docker images for frontend and backend services
-Tagged images using Docker Hub naming conventions
-Pushed Docker images to Docker Hub
-Deployed application using docker-compose via Jenkins
-Enabled Jenkins to access Docker using docker.sock
-Installed docker-compose inside Jenkins container
-Handled container lifecycle during deployment

### ⚙️ CI/CD Flow

GitHub → Jenkins → Build → Docker Hub → Deploy Containers

### 📸 Screenshots

#### 🔹 Docker Installed inside Jenkins

####🔹 Docker Hub Login
![DockerHub](docs/phase7/docker-login.png)

####🔹 Docker Hub Repository Created
![DockerHub](docs/phase7/dockerhub-repo-created.png)

####🔹 Docker Images Pushed
![DockerHub](docs/phase7/dockerhub-push-done.png)

####🔹 Jenkins Getting Started
![Jenkins](docs/phase7/jenkins-getting-started.png)

####🔹 Jenkins Container Running
![Jenkins](docs/phase7/jenkins-container-running.png)

####🔹 Jenkins UI
![Jenkins](docs/phase7/jenkins-ui.png)

####🔹 Jenkins Pipeline Success
![Jenkins](docs/phase7/jenkins-pipeline-success.png)

####🔹 Final Running Containers After Jenkins Build
![Jenkins](docs/phase7/final-running-containers-after-jenkins-build.png)

### ⚠️ Challenges Faced

-Jenkins could not connect to Docker daemon
-docker-compose command not found inside Jenkins container
-Permission denied error while accessing docker.sock
-Port conflicts due to already running containers
-Git branch mismatch issue (master vs main)
-Docker images not tagged correctly for Docker Hub

### 🔍 Fixes Applied

-Connected Jenkins to host Docker using docker.sock:
-v /var/run/docker.sock:/var/run/docker.sock

-Installed docker-compose inside Jenkins container:
apt update
apt install docker-compose -y

-Fixed permission issues:
chmod 666 /var/run/docker.sock

-Resolved branch issue:
git branch: 'main', url: 'repo-url'

-Handled port conflicts:
docker stop $(docker ps -q)
docker rm $(docker ps -aq)

-Improved deployment step in pipeline:
docker-compose down --remove-orphans || true
docker-compose up -d --build

### 💡 Key Learnings

-Understanding of CI/CD pipeline using Jenkins
-Integration of Docker with Jenkins using docker.sock
-Difference between building locally vs inside CI environment
-Importance of container cleanup in deployment pipelines
-Handling real-world DevOps issues like permissions and networking
-Docker image lifecycle (build → tag → push → deploy)
-Debugging pipeline failures step-by-step

### 🚀 Outcome

-A fully automated CI/CD pipeline
-Docker images built and pushed to Docker Hub
-Application deployed automatically using Jenkins
-Production-like workflow achieved locally

---

# 📌 Phase 8: Production Polish (AWS Cleanup & Finalization)

### objective
Finalize the project by cleaning cloud resources, securing the deployment, and ensuring a production-ready architecture while optimizing cost.

### Implementations
-Deployed application on AWS EC2 for testing and validation
-Configured NGINX as reverse proxy for production routing
-Restricted access to only required ports (80, 22)
-Removed exposure of development ports (3000, 5000)
-Validated application accessibility via public IP
-Cleaned up AWS resources after successful testing
-Terminated EC2 instance to avoid unnecessary costs

### ⚠️ Challenges Faced
-Understanding which ports should remain open in production
-Ensuring backend is not directly exposed
-Maintaining deployment stability after multiple rebuilds
-Deciding when to terminate cloud resources without losing project proof

### 🔍 Fixes Applied
-Updated AWS Security Group:

Allowed:

  Port 80 (HTTP)
  Port 22 (SSH)

Removed:

  Port 3000
  Port 5000

-Ensured NGINX handled routing:

  / → Frontend  
  /api → Backend  

-Verified deployment before cleanup:

  docker ps  
  curl http://localhost  

-Stopped and removed containers:

   docker-compose down  

-Terminated EC2 instance after validation

### 💡 Key Learnings
-Importance of securing production deployments
-Difference between development and production environments
-Role of reverse proxy in real-world systems
-Cloud cost optimization and resource management
-Validating deployments before cleanup
-Understanding when to decommission infrastructure

### 🚀 Outcome
-A secure and production-ready deployment architecture
-Cleaned cloud environment with no unnecessary resources
-Cost-optimized infrastructure usage
-Fully documented deployment process for reproducibility

---

---

# 🎯 Final Outcome

This project demonstrates a **complete DevOps lifecycle**, including:

- Application development and structuring
- Docker-based containerization
- Multi-container orchestration
- Cloud deployment using AWS EC2
- Reverse proxy setup using NGINX
- CI/CD automation using Jenkins
- Docker Hub integration for image management
- Production-level debugging and issue resolution

---

# 💼 Key Highlights

- Built and deployed a full-stack application using Docker
- Implemented CI/CD pipeline with Jenkins
- Integrated Docker Hub for image registry
- Configured NGINX for production routing
- Deployed application on AWS EC2
- Handled real-world DevOps issues like:
  - Docker permission errors
  - Missing tools in CI environment
  - Port conflicts
  - Git branch issues

---

# 🧠 What Makes This Project Strong

- Covers complete DevOps pipeline (not just one tool)
- Demonstrates real-world debugging experience
- Follows industry practices (CI/CD, reverse proxy, containerization)
- Shows understanding of both development and deployment

---




