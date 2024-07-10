# Makefile for FastAPI with GraphQL and Docker Compose

.PHONY: help build up down logs sh

help:
	@echo "Usage:"
	@echo "  make build   - Build the Docker images"
	@echo "  make up      - Start the Docker containers"
	@echo "  make down    - Stop the Docker containers"
	@echo "  make logs    - Show logs of the running containers"
	@echo "  make sh      - Get a shell inside the running container"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

sh:
	docker-compose exec fastapi /bin/sh
