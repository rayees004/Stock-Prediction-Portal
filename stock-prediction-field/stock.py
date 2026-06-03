import numpy as np
import matplotlib.pyplot as plt
import yfinance as yf
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from xgboost import XGBRegressor

import pandas as pd
import requests

# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
url = 'https://www.alphavantage.co/query?function=WTI&interval=monthly&apikey=demo'
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

print("df====================",df)


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

print(results)


# Plot graph

plt.figure(figsize=(12,6))
plt.plot(y_test.values, label='Actual')
plt.plot(predictions, label='Predicted')
plt.title('Actual vs Predicted Stock Values')
plt.xlabel('Time')
plt.ylabel('Stock Value')
plt.legend()
plt.grid(True)


plt.savefig("data.png")

# Predict next value

latest_data = X.tail(1)
next_prediction = model.predict(latest_data)

print("Next Predicted Value:", next_prediction[0])

latest_30 = results.sort_values('Date').tail(30)



formatted_data = {
    "data": [
        {
            "date": row["Date"].strftime("%Y-%m-%d"),
            "actual": float(row["Actual"]),
            "predicted": round(float(row["Predicted"]), 2)
        }
        for _, row in latest_30.iterrows()
    ]
}
print("row data",formatted_data)