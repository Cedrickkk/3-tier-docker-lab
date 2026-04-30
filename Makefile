DATABASE_URL:=postgres://postgres:admin@localhost:5432/postgres

.PHONY: run-postgres

run-postgres:
		@echo Starting Postgres Container
		-docker run \
			-e POSTGRES_PASSWORD=admin \
			-v pgdata:/var/lib/postgres/data \
			-p 5433:5432 \
			postgres:18.3-alpine

