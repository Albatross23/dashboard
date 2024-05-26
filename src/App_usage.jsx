import React, { useState, useEffect } from 'react';

function AppUsage() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    // Use dummy data instead of fetching from API
    const dummyData = [
      { Platform: 'Platform A', UsagePercentage: 30, HoursUsage: 120 },
      { Platform: 'Platform B', UsagePercentage: 20, HoursUsage: 90 },
      { Platform: 'Platform C', UsagePercentage: 25, HoursUsage: 110 },
      { Platform: 'Platform D', UsagePercentage: 15, HoursUsage: 60 },
      { Platform: 'Platform E', UsagePercentage: 10, HoursUsage: 40 },
    ];
    setAppData(dummyData);
  }, []);

  return (
    <div className="app-usage-container">
      <h2>App Usage</h2>
      <table className="app-table">
        <thead>
          <tr>
            <th>App Name</th>
            <th>Hours Used</th>
            <th>Usage Percentage</th>
          </tr>
        </thead>
        <tbody>
          {appData.map((app, index) => (
            <tr key={index}>
              <td>{app.Platform}</td>
              <td>{app.HoursUsage}</td>
              <td>{app.UsagePercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppUsage;
