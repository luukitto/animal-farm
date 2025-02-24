# Animal Farm

Hi, Old Georgie here,

This is a story of Napoleon, his superiors and slaves and pseudo-masters in between.

The repository contains frontend (Angular@17) and api (nestjs) dirs.

Tech stack:
- Angular 17
- NestJs 11
- PostgreSQL
And all the relevant libraries.

P.S. We need Docker to run PostgreSQL in container or locally.

## How to
We have a couple of ways to run the project, but the simplest is to use root level `packages.json`.

1. Install all packages and run migrations
`npm run install:all`
2. Run all services, including PostgreSQL
`npm run start:all`

Otherwise, we can be more specific:
## Available Commands for running the system locally
- `npm run install:all` - Installs all dependencies and runs migrations (frontend, API, and database)
- `npm run install:frontend` - Installs frontend dependencies
- `npm run install:api` - Installs API dependencies and runs database migrations
- `npm run migrate` - Runs database migrations
- `npm run start:frontend` - Starts the frontend development server
- `npm run start:api` - Starts the API server in development mode
- `npm run build:frontend` - Builds the frontend for production
- `npm run build:api` - Builds the API for production
- `npm run build:all` - Builds both API and Frontend for production 
- `npm run start:db` - Starts the PostgreSQL database using Docker
- `npm run start:app` - Starts both frontend and API servers concurrently
- `npm run start:all` - Starts the complete application (database, API, and frontend)
- `npm run start:prod` - Start the complete application (database, API, and frontend) in production
- `npm run start:docker:prod` - Build and start animal farm with production profile in Docker
- `npm run start:docker:dev` - Build and start animal farm with dev profile in Docker

## A few words about Docker
If Docker is your piece of cake, please read ahead.

First and foremost, we can run database with the following command:
- `docker compose up postgres`
Which creates new database, user and grants all privileges to the user.

Next, our docker compose file relies on profiles:
- dev
  - api and frontend dev environments
- prod
  - api-prod and frontend-prod environments

### Run docker locally
- `docker compose --profile dev up` or simply `npm run start:docker:dev`
### Run production mode
- `docker compose --profile prod up --build` or `npm run start:docker:prod`
Build command is important here to force building sources before deployment.

---
That's all for the moment.