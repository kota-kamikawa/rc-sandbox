# Variables
COMPOSE=docker-compose

# Targets
.PHONY: build up down

# Build the Docker image
build:
	$(COMPOSE) build

# Run the Docker container
up:
	$(COMPOSE) up -d

# Stop and remove the Docker container
down:
	$(COMPOSE) down

# Clean up Docker images
clean:
	$(COMPOSE) down --rmi all
