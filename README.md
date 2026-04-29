# 3-Tier Web App with Docker

This is my hands-on activity from a Docker tutorial I'm following to learn containers.

> Tutorial: [Complete Docker Course - From BEGINNER to PRO! (Learn Containers)](https://www.youtube.com/watch?v=RqTEHSBrYFw) by [DevOps Directive](https://www.youtube.com/@DevOpsDirective)

## Getting Started

Clone the repository and start all services with Docker Compose:

```bash
docker compose up --build
```

This will build and start all three containers: the client, the Node.js server, and the Spring Boot server.

To stop everything:

```bash
docker compose down
```

## Project Structure

| Folder            | Tech        | Type        | Description                |
| ----------------- | ----------- | ----------- | -------------------------- |
| `client/`         | HTML/JS/CSS | Frontend    | Static frontend client     |
| `server-node/api` | Node.js     | Interpreted | REST API (no build step)   |
| `server-java/api` | Spring Boot | Compiled    | REST API (compiled to JAR) |

## Key Docker Concepts Demonstrated

- **Multi-stage builds** — used in `server-java` to compile the app in one stage and run the JAR in a minimal image
- **Interpreted vs compiled containers** — Node.js runs source directly; Spring Boot requires a build step first
- **Docker Compose networking** — all services communicate over a shared internal network
- **Port mapping** — each service exposes its own port to the host
