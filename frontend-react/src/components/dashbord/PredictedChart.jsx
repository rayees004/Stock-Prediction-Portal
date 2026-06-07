import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axiosInstence from "../../axiosInstance";

const PredictedChart = ({ stockid }) => {
  const [stockdata, setstockdata] = useState({});
  const [loadchart, setLoadchart] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstence(`predictedstock/${stockid}/`);
        setstockdata(response.data);
        setLoadchart(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      {loadchart ? (
        <>
        <p className="text-warning mt-4">
        Predicted The Next Interval Value : {stockdata.next_prediction}
      </p>
      <h2 className="text-light text-center">Previos Predictions</h2>
          <LineChart
            style={{
              width: "100%",
              aspectRatio: 1.618,
              maxWidth: 1800,
              height: "500px",
              margin: "20px 0px 0px 0px",
            }}
            responsive
            data={stockdata.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 50,
              left: 10,
            }}
          >
            <CartesianGrid stroke="#5d605de9" strokeDasharray="5 5" />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#38c27d"
              strokeWidth={2}
              name="Actual"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#bada1c"
              strokeWidth={2}
              name="Predicted"
            />
            <XAxis
              dataKey="date"
              angle={-90}
              textAnchor="end"
              interval={0}
              height={100}
              height={120}
              label={{ angle: -90 }}
            />
            <YAxis
              width="auto"
              label={{ value: "Price", position: "insideLeft", angle: -90 }}
            />
            <Legend align="right" />
            <Tooltip
              itemStyle={{ color: "#385dc2" }}
              labelStyle={{
                color: "#385dc2", // Date/Label text color
              }}
            />
          </LineChart>
          <p className="text-danger text-center p1">Stock price predictions are based on historical data may not be fully accurate.</p>
        </>
      ) : (
        <div className="loadchart1 container text-light">
          <h2 className="pleasewait">
            Fetching
            <div className="dotloader">
              <span>. . .</span>
            </div>
          </h2>
        </div>
      )}
      
    </>
  );
};

export default PredictedChart;
