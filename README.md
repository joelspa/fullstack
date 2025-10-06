
# Proyecto Fullstack

Este repositorio contiene un proyecto Fullstack con una API desarrollada en Node.js (Express + MongoDB) en la carpeta `backend` y una aplicación cliente en React + Vite en la carpeta `frontend`.

## Estructura

- `backend/` - Servidor REST con Express y Mongoose.
- `frontend/` - Cliente React (Vite) que consume la API.

## Requisitos

- Node.js (v16+ recomendado)
- npm
- MongoDB (local o servicio en la nube)

## Instalación

1. Clonar el repositorio:

```powershell
git clone <URL_DEL_REPOSITORIO>
cd fullstack
```

2. Instalar dependencias del backend:

```powershell
cd backend
npm install
```

3. Instalar dependencias del frontend:

```powershell
cd ../frontend
npm install
```

## Variables de entorno (backend)

El backend requiere al menos la variable de entorno `MONGO_URI`. Opcionalmente puede definirse `PORT` (por defecto `4000`).

Crear un archivo `.env` en la carpeta `backend` con el siguiente contenido de ejemplo:

```
MONGO_URI=mongodb://localhost:27017/fullstack
PORT=4000
```

El proyecto valida estas variables al iniciar; si faltan o son inválidas, el servidor no arranca.

## Ejecución

Backend (desarrollo):

```powershell
cd backend
npm run dev
```

Backend (producción / inicio):

```powershell
cd backend
npm start
```

Comando para ejecutar el script de ejemplo (seed):

```powershell
cd backend
npm run seed
```

Frontend (desarrollo):

```powershell
cd frontend
npm run dev
```

Frontend (build / preview):

```powershell
cd frontend
npm run build
npm run preview
```

## Endpoints principales

- `GET /api/health` - Health check.
- `GET /api/courses` - Obtener lista de cursos.
- `POST /api/courses` - Crear un nuevo curso.

Nota: la configuración por defecto del cliente está en `frontend/src/api.js` con `baseURL` apuntando a `http://localhost:4000/api`. Si el backend se ejecuta en otro host o puerto, actualice `baseURL` o configure un proxy apropiado.

## Notas adicionales

- Los scripts disponibles en `backend/package.json` son: `dev`, `start`, `seed`.
- Los scripts disponibles en `frontend/package.json` son: `dev`, `build`, `lint`, `preview`.
- Para desarrollo local asegúrese de que MongoDB esté accesible en la URI indicada.

## Contribuciones

Las contribuciones se deben realizar mediante Pull Requests. Mantenga cambios pequeños y documentados.

## Licencia

Este proyecto no incluye una licencia explícita. Añada un archivo `LICENSE` si desea establecer términos de uso.

