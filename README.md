# Stock Prediction Portal

## Overview

Stock Prediction Portal is a web application that allows users to view stock market data, analyze trends, and access stock predictions through an interactive dashboard.

## Features

* User Authentication (Login & Registration)
* Interactive Stock Charts
* Real-time Stock Data Visualization
* Responsive Dashboard
* Protected Routes
* Stock Price Analysis
* Modern User Interface

## Technologies Used

### Frontend

* React.js
* React Router DOM
* Axios
* Recharts
* Bootstrap
* Font Awesome

### Backend

* Django
* Django REST Framework
* JWT Authentication

### Database

* SQLite (Development)
* PostgreSQL (Production Ready)

## Installation

### Clone the Repository

```bash
git clone https://github.com/rayees004/Stock-Prediction-Portal.git
cd stock_prediction_portal
python -m venv env
```

### Frontend Setup

```bash
cd frontend-react
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Project Structure

```text
stock_prediction_portal/
│
├── frontend-react/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── api/
│   ├── users/
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

## API Integration

The application uses external stock market APIs to fetch and display stock data for analysis and prediction.
>stock data api provider - [alphavantage](https://www.alphavantage.co/)

## Future Enhancements

* AI-based Stock Prediction
* Portfolio Management
* Watchlist Feature
* Email Notifications
* Advanced Analytics Dashboard

## Author

**Mohammed Rayees**

Full Stack Developer

## License

This project is created for educational and portfolio purposes.
