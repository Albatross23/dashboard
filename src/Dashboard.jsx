// Dashboard.jsx

import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#7a1117', '#FF8042', '#CEB01E'];

function Dashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Use dummy data instead of fetching from API
    const dummyData = [
      { Platform: 'Platform A', UsagePercentage: 30, HoursUsage: 120 },
      { Platform: 'Platform B', UsagePercentage: 20, HoursUsage: 90 },
      { Platform: 'Platform C', UsagePercentage: 25, HoursUsage: 110 },
      { Platform: 'Platform D', UsagePercentage: 15, HoursUsage: 60 },
      { Platform: 'Platform E', UsagePercentage: 10, HoursUsage: 40 },
    ];
    setChartData(dummyData);
  }, []);

  return (
    <main className="main-container">
      <div className="charts-container">
        <div className="pie-chart">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="UsagePercentage"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x =
                    cx + (radius + 45) * Math.cos(-midAngle * (Math.PI / 180));
                  const y =
                    cy + (radius + 45) * Math.sin(-midAngle * (Math.PI / 180));
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#fff"
                      textAnchor="middle"
                      dominantBaseline="central"
                    >
                      {(percent * 100).toFixed(0)}%
                    </text>
                  );
                }}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label width={30} position="center">
                  Usage Percentage
                </Label>
              </Pie>
            </PieChart>
            <div
              className="legend"
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {chartData.map((entry, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '5px',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: COLORS[index % COLORS.length],
                      marginRight: '5px',
                    }}
                  ></div>
                  <span>{entry.Platform}</span>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </div>
        <div className="spacer" style={{ width: '50px', height: '50px' }}></div>
        <div className="bar-chart">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Platform" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="HoursUsage" fill="#8884d8" name="Hours Usage" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
