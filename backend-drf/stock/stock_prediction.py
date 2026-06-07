import numpy as np
import matplotlib.pyplot as plt
import yfinance as yf
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from xgboost import XGBRegressor

import pandas as pd
import requests

def predicted_stock(url=''):
# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    try :
        r = requests.get(url)
        data = r.json()

        datafameset = {"date":[],"value":[]}
            
        datafameset['date']=list(map(lambda x: x['date'],data['data']))
        datafameset['value']=list(map(lambda x: x['value'],data['data']))

        tableData =pd.DataFrame(datafameset)

        # Convert date column to datetime
        tableData['date'] = pd.to_datetime(tableData['date'])

        # Filter from year 2000 onwards
        df_2000 = tableData[tableData['date'].dt.year >= 2000]


        df= df_2000.sort_values(by='date')

        # Create previous 30 month features
        for i in range(1, 31):
            df[f'prev_{i}'] = df['value'].shift(i)

        # Features
        X = df[[f'prev_{i}' for i in range(1, 31)]]
        X = X.astype(float)

        df['value'] = pd.to_numeric(df['value'], errors='coerce')

        # Target
        y = df['value']
        dates = df['date']

        # Train Test Split

        X_train, X_test, y_train, y_test , date_train, date_test= train_test_split(
            X,
            y,
            dates,
            test_size=0.2,
            shuffle=False
        )


        # XGBoost Model

        model = XGBRegressor(
            n_estimators=300,
            learning_rate=0.05,
            max_depth=5,
            subsample=0.8,
            colsample_bytree=0.8,
            random_state=42
        )

        # Train Model

        model.fit(X_train, y_train)

        # Predictions

        predictions = model.predict(X_test)

        # Metrics

        mse = mean_squared_error(y_test, predictions)
        r2 = r2_score(y_test, predictions)


        # Show predictions

        results = pd.DataFrame({
            'Date': date_test.values,
            'Actual': y_test.values,
            'Predicted': predictions
        })


        # Predict next value

        latest_data = X.tail(1)
        next_prediction = model.predict(latest_data)

        

        latest_30 = results.sort_values('Date').tail(30)
        latest_30['date'] = latest_30['Date'].dt.strftime('%Y-%m-%d')
        latest_30['actual'] = latest_30['Actual'].astype(float)
        latest_30['predicted'] = latest_30['Predicted'].round(2)


        formatted_data = {
            'next_prediction':next_prediction,
            "data": latest_30[['date', 'actual', 'predicted']].to_dict(orient='records')
        }
        return formatted_data
    except:
        return dict()

