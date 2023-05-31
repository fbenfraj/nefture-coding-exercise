# Nefturian Heroes Project

This project is a web app for tracking heroes on the Ethereum blockchain.

## Prerequisites

To run this project locally, you will need:

- Node.js
- Docker and Docker-compose
- PostgreSQL (through Docker)

## Configuration

### Environment Variables

You will need to setup some environment variables for the application.

For the root of the project, create a `.env` file with the following configuration:

```bash
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=root
```

In the /frontend/ directory, create a .env file with the following configuration:
```bash
NEXT_PUBLIC_ALCHEMY_ID=[YOUR_ALCHEMY_API_KEY_HERE]
```

In the /backend/ directory, create a .env file with the following configuration:
```bash
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

### Docker Setup
This project uses Docker to run PostgreSQL and pgAdmin. You can start the Docker containers using the command:
```bash
docker-compose up -d
```

This will start the PostgreSQL server

## Running the Project
To start the project, navigate to the project root and run the following commands:
```bash
cd backend
npm install
npm run dev
```

In another terminal:
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 with your browser to see the result.





