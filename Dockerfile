FROM node:18 AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./

RUN npm install
COPY frontend/ ./


FROM node:18 AS backend-build

WORKDIR /app/backend
COPY backend/package*.json ./

RUN npm install
COPY backend/ ./


FROM node:18
RUN npm install -g concurrently

WORKDIR /app

COPY --from=backend-build /app/backend ./backend
COPY --from=frontend-build /app/frontend ./frontend

EXPOSE 5173 3000

CMD concurrently "cd frontend && npm run dev" "cd backend && npm run dev"