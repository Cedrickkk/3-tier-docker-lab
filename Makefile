DATABASE_URL:=postgres://postgres:admin@localhost:5432/postgres

.PHONY: run-postgres

run-postgres:
		@echo Starting Postgres Container
		-docker run \
			-e POSTGRES_PASSWORD=admin \
			-v pgdata:/var/lib/postgres/data \
			-p 5433:5432 \
			postgres:18.3-alpine

.PHONY: run-api-node
run-api-node:
		@echo Starting Node API
		cd server-node/api && npm run dev

.PHONY: run-api-java
run-api-java:
		@echo Starting Java API
		cd server-java/api && mvnw spring-boot:run

.PHONY: run-client-react
run-client-react:
	@echo Starting react client
	cd client && npm run dev