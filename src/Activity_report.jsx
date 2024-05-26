import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Dummy data for the line chart
const dummyData = [
  { time: '12:00 AM', usage: 10 },
  { time: '1:00 AM', usage: 20 },
  { time: '2:00 AM', usage: 15 },
  { time: '3:00 AM', usage: 5 },
  { time: '4:00 AM', usage: 10 },
  { time: '5:00 AM', usage: 30 },
  { time: '6:00 AM', usage: 25 },
  { time: '7:00 AM', usage: 20 },
  { time: '8:00 AM', usage: 15 },
  { time: '9:00 AM', usage: 10 },
  { time: '10:00 AM', usage: 10 },
  { time: '11:00 AM', usage: 5 },
  { time: '12:00 PM', usage: 10 },
  { time: '1:00 PM', usage: 20 },
  { time: '2:00 PM', usage: 15 },
  { time: '3:00 PM', usage: 5 },
  { time: '4:00 PM', usage: 10 },
  { time: '5:00 PM', usage: 30 },
  { time: '6:00 PM', usage: 25 },
  { time: '7:00 PM', usage: 20 },
  { time: '8:00 PM', usage: 15 },
  { time: '9:00 PM', usage: 10 },
  { time: '10:00 PM', usage: 10 },
  { time: '11:00 PM', usage: 5 },
];

function ActivityReport() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Activity Report</h3>
      </div>
      <ResponsiveContainer width="80%" height="80%">
        <LineChart data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="usage" stroke="#8884d8" name="Usage" />
        </LineChart>
      </ResponsiveContainer>
    </main>
  );
}

export default ActivityReport;
