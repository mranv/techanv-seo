import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SEODashboard = () => {
  // Website Traffic Overview Data
  const trafficData = {
    metrics: ['Users', 'New Users', 'Sessions', 'Engaged Sessions'],
    months: ['Dec-23', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24'],
    values: [
      [1940, 2100, 1950, 2200, 1800, 1600, 1400, 1200, 1100, 1000],  // Users
      [1800, 1950, 1800, 2050, 1700, 1500, 1300, 1100, 1000, 900],   // New Users
      [2200, 2400, 2300, 2500, 2100, 1900, 1700, 1500, 1400, 1300],  // Sessions
      [1500, 1700, 1600, 1800, 1400, 1200, 1000, 800, 700, 600]      // Engaged Sessions
    ]
  };

  // Ranking Snapshot Data
  const rankingData = {
    months: ['Initial', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24'],
    rankings: {
      top10: [56, 61, 65, 76, 84, 87, 87, 65, 66, 79],
      secondPage: [10, 7, 8, 7, 8, 10, 11, 8, 6, 6],
      thirdToFifth: [12, 24, 19, 18, 30, 30, 31, 19, 20, 10]
    }
  };

  // Traffic Sources Data
  const sourceData = {
    organic: [2480, 2929, 2750, 2656, 2489, 2292, 1917, 1150, 960, 1115],
    direct: [591, 637, 743, 649, 716, 704, 538, 787, 909, 787],
    referral: [24, 30, 40, 26, 19, 29, 55, 45, 42, 25],
    paid: [463, 707, 537, 873, 741, 401, 289, 322, 174, 155]
  };

  return (
    <div className="flex flex-col space-y-8 p-4">
      {/* Website Traffic Overview */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 bg-orange-500 text-white p-2">Website Traffic Overview</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData.months.map((month, i) => ({
              month,
              Users: trafficData.values[0][i],
              'New Users': trafficData.values[1][i],
              Sessions: trafficData.values[2][i],
              'Engaged Sessions': trafficData.values[3][i]
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Users" fill="#1e40af" />
              <Bar dataKey="New Users" fill="#f97316" />
              <Bar dataKey="Sessions" fill="#64748b" />
              <Bar dataKey="Engaged Sessions" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ranking Snapshot */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 bg-blue-500 text-white p-2">Ranking Snapshot</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2">Position</th>
                {rankingData.months.map(month => (
                  <th key={month} className="p-2">{month}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-bold">Top 10</td>
                {rankingData.rankings.top10.map((val, i) => (
                  <td key={i} className="p-2 text-center">{val}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-bold">2nd Page</td>
                {rankingData.rankings.secondPage.map((val, i) => (
                  <td key={i} className="p-2 text-center">{val}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-bold">3rd to 5th Page</td>
                {rankingData.rankings.thirdToFifth.map((val, i) => (
                  <td key={i} className="p-2 text-center">{val}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 bg-orange-500 text-white p-2">Traffic Sources Overview</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData.months.map((month, i) => ({
              month,
              Organic: sourceData.organic[i],
              Direct: sourceData.direct[i],
              Referral: sourceData.referral[i],
              Paid: sourceData.paid[i]
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Organic" fill="#1e40af" />
              <Bar dataKey="Direct" fill="#f97316" />
              <Bar dataKey="Referral" fill="#64748b" />
              <Bar dataKey="Paid" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4">
          <h3 className="font-bold mb-2">Top Traffic Sources</h3>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Source / Medium</th>
                <th className="p-2 text-right">New Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">google / organic</td>
                <td className="p-2 text-right">1069</td>
              </tr>
              <tr>
                <td className="p-2">(direct) / (none)</td>
                <td className="p-2 text-right">787</td>
              </tr>
              <tr>
                <td className="p-2">bing / cpc</td>
                <td className="p-2 text-right">87</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SEODashboard;