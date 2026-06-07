# Stock Prediction Portal

A full-stack web app that fetches stock data, shows interactive charts, and provides stock prediction endpoints.

**Stack:** Django + Django REST Framework (backend), React + Vite (frontend), SQLite (dev), XGBoost for prediction models.

**Quick links:**
- Backend: [backend-drf](backend-drf)
- Frontend: [frontend-react](frontend-react)

## Table of contents
- Overview
- Prerequisites
- Local setup (backend)
- Local setup (frontend)
- API reference
- Development notes
- Contributing
- License

## Overview

This repository contains a Django REST backend and a React (Vite) frontend. The backend exposes endpoints for user registration, JWT authentication, stock listings, and predicting stocks by ID. The frontend consumes these endpoints and provides an interactive dashboard.

## Prerequisites

- Python 3.11+ (project was developed with Python 3.11)
- Node.js (18+) and npm
- Git

## Backend — Local setup

1. Open a terminal and go to the backend folder:

```bash
cd backend-drf
```

2. (Recommended) Create and activate a virtual environment:

Windows PowerShell:

```powershell
python -m venv env
.\env\Scripts\Activate.ps1
```

Windows cmd:

```cmd
python -m venv env
.\env\Scripts\activate.bat
```

macOS / Linux:

```bash
python3 -m venv env
source env/bin/activate
```

3. Install Python dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in `backend-drf/` with at least the following values:

```env
SECRET_KEY=replace-with-a-secret-key
DEBUG=True
```

5. Run database migrations and (optionally) create a superuser:

```bash
python manage.py migrate
python manage.py createsuperuser  # optional
```

6. Start the development server:

```bash
python manage.py runserver
```

By default the API will be available at `http://127.0.0.1:8000/api/v1/`.

## Frontend — Local setup

1. Open a separate terminal and go to the frontend folder:

```bash
cd frontend-react
```

2. Create a `.env` file in `frontend-react/` with the backend base URL used by the frontend (`axiosInstance.js` reads `import.meta.env.VITE_BACKEND_BASE_API`):

```env
VITE_BACKEND_BASE_API=http://127.0.0.1:8000/api/v1/
```

3. Install node dependencies and run the dev server:

```bash
npm install
npm run dev
```

Vite will serve the frontend (by default) at `http://localhost:5173/`. The backend settings already allow CORS from `http://localhost:5173`.

## API reference (examples)

Base URL: `http://127.0.0.1:8000/api/v1/`

- Register a new user

	POST `/register/`
	Body: `{ "username": "alice", "email": "a@a.com", "password": "mypassword" }`

- Obtain JWT tokens

	POST `/token/`
	Body: `{ "username": "alice", "password": "mypassword" }`
	Response: `{ "access": "<token>", "refresh": "<token>" }`

- Refresh access token

	POST `/token/refresh/`
	Body: `{ "refresh": "<refresh-token>" }`

- Check protected endpoint

	GET `/permited_access/` — requires header `Authorization: Bearer <access>`

- List available stocks (authenticated)

	GET `/stock/`

- Get predicted stock data (authenticated)

	GET `/predictedstock/<id>/`

Examples (curl):

```bash
curl -X POST http://127.0.0.1:8000/api/v1/register/ \
	-H "Content-Type: application/json" \
	-d '{"username":"test","email":"t@example.com","password":"secret123"}'

curl -X POST http://127.0.0.1:8000/api/v1/token/ \
	-H "Content-Type: application/json" \
	-d '{"username":"test","password":"secret123"}'

# Use the returned access token for requests that require authentication
curl -H "Authorization: Bearer <access>" http://127.0.0.1:8000/api/v1/stock/
```

## Development notes

- CORS: `CORS_ALLOWED_ORIGINS` in `backend-drf/stock_prediction_main/settings.py` includes `http://localhost:5173` by default for local development.
- Frontend expects `VITE_BACKEND_BASE_API` to point to the backend API; include the trailing slash (e.g. `/api/v1/`).
- The backend uses `python-decouple` to load `SECRET_KEY` and `DEBUG` from a `.env` file.

## Running tests

Run backend tests with:

```bash
cd backend-drf
python manage.py test
```

## Contributing

- Create feature branches and open a pull request.
- Run tests and linters before submitting.

## License

This project is provided for educational and portfolio purposes.

---
If you'd like, I can also:
- add a `.env.example` for backend and frontend,
- add a short script to make local setup commands easier.
Just tell me which you prefer.
