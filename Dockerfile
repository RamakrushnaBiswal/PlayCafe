
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

WORKDIR /app

COPY --from=backend-build /app/backend ./backend
COPY --from=frontend-build /app/frontend ./frontend

COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/
RUN npm install --prefix frontend && npm install --prefix backend


COPY start.sh ./

RUN chmod +x start.sh

EXPOSE 5173 3000


CMD ["sh", "start.sh"]
