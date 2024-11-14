import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SEODashboard = () => {
  const trafficData = {
    metrics: ['Users', 'New Users', 'Sessions', 'Engaged Sessions'],
    months: ['Dec-23', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24'],
    values: [
      [1940, 2156, 2487, 2843, 3218, 3584, 3892, 4231, 4687, 5124],  // Users
      [1582, 1798, 2089, 2376, 2712, 3016, 3289, 3548, 3912, 4298],  // New Users
      [2234, 2489, 2863, 3247, 3684, 4127, 4489, 4873, 5412, 5928],  // Sessions
      [1542, 1723, 1986, 2284, 2598, 2912, 3187, 3456, 3842, 4216]   // Engaged Sessions
    ]
  };

  const rankingData = {
    months: ['Initial', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24'],
    rankings: {
      top10: [12, 15, 23, 31, 42, 56, 68, 75, 82, 89],
      secondPage: [45, 52, 58, 63, 67, 72, 76, 79, 83, 86],
      thirdToFifth: [156, 142, 127, 112, 98, 84, 71, 62, 54, 47]
    }
  };

  const sourceData = {
    organic: [2480, 2829, 3256, 3742, 4216, 4687, 5134, 5623, 6187, 6842],
    direct: [891, 967, 1087, 1234, 1387, 1523, 1678, 1845, 2034, 2256],
    referral: [324, 378, 456, 523, 587, 645, 712, 789, 867, 945],
    paid: [463, 527, 612, 698, 783, 856, 934, 1023, 1124, 1235]
  };

  return (
    <div className="flex flex-col space-y-8 p-4">
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
                <td className="p-2 text-right">4298</td>
              </tr>
              <tr>
                <td className="p-2">(direct) / (none)</td>
                <td className="p-2 text-right">2256</td>
              </tr>
              <tr>
                <td className="p-2">bing / cpc</td>
                <td className="p-2 text-right">945</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SEODashboard;