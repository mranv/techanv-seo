import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const ComprehensiveSEODashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30days');

  // KPI Data
  const kpiData = {
    organic_traffic: 28456,
    bounce_rate: "42.3%",
    avg_session_duration: "2m 45s",
    pages_per_session: 2.8,
    conversion_rate: "3.2%",
    year_over_year_growth: "+24.5%"
  };

  // Performance Data
  const performanceData = [
    { month: 'Dec-23', organic: 2480, direct: 591, paid: 463, referral: 24, social: 156 },
    { month: 'Jan-24', organic: 2929, direct: 637, paid: 707, referral: 30, social: 182 },
    { month: 'Feb-24', organic: 2750, direct: 743, paid: 537, referral: 40, social: 195 },
    { month: 'Mar-24', organic: 2656, direct: 649, paid: 873, referral: 26, social: 210 },
    { month: 'Apr-24', organic: 2489, direct: 716, paid: 741, referral: 19, social: 178 },
    { month: 'May-24', organic: 2292, direct: 704, paid: 401, referral: 29, social: 165 },
    { month: 'Jun-24', organic: 1917, direct: 538, paid: 289, referral: 55, social: 143 },
    { month: 'Jul-24', organic: 1150, direct: 787, paid: 322, referral: 45, social: 134 },
    { month: 'Aug-24', organic: 960, direct: 909, paid: 174, referral: 42, social: 128 },
    { month: 'Sep-24', organic: 1115, direct: 787, paid: 155, referral: 25, social: 112 }
  ];

  // Keyword Data
  const keywordData = {
    total_keywords: 198,
    ranking_distribution: [
      { position: "1-3", count: 12 },
      { position: "4-10", count: 45 },
      { position: "11-20", count: 67 },
      { position: "21-50", count: 48 },
      { position: "51-100", count: 26 }
    ],
    top_keywords: [
      { keyword: "IT consulting services", position: 3, volume: 2900, difficulty: 67 },
      { keyword: "technology infrastructure consulting", position: 5, volume: 1800, difficulty: 58 },
      { keyword: "IT optimization services", position: 7, volume: 1200, difficulty: 52 },
      { keyword: "enterprise IT consulting", position: 12, volume: 890, difficulty: 61 },
      { keyword: "tech stack optimization", position: 15, volume: 720, difficulty: 45 }
    ]
  };

  // Page Performance Data
  const pagePerformanceData = [
    { page: "/services", views: 12456, bounce_rate: "38%", avg_time: "3:24" },
    { page: "/about", views: 8234, bounce_rate: "45%", avg_time: "2:15" },
    { page: "/contact", views: 6789, bounce_rate: "41%", avg_time: "1:45" },
    { page: "/blog", views: 5432, bounce_rate: "35%", avg_time: "4:12" },
    { page: "/case-studies", views: 4321, bounce_rate: "32%", avg_time: "5:30" }
  ];

  // Device Data
  const deviceData = [
    { name: "Desktop", value: 58 },
    { name: "Mobile", value: 36 },
    { name: "Tablet", value: 6 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="flex flex-col space-y-8 p-4 bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">SEO Performance Dashboard</h1>
        <select 
          className="p-2 border rounded"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="90days">Last 90 Days</option>
        </select>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(kpiData).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 capitalize">{key.replace(/_/g, ' ')}</h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      {/* Traffic Overview */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Traffic Overview</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="organic" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="direct" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="paid" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="referral" stackId="1" stroke="#ff7300" fill="#ff7300" />
              <Area type="monotone" dataKey="social" stackId="1" stroke="#0088FE" fill="#0088FE" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Keyword Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Keyword Rankings Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={keywordData.ranking_distribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="position" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Top Performing Keywords</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Keyword</th>
                  <th className="p-2">Position</th>
                  <th className="p-2">Volume</th>
                  <th className="p-2">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {keywordData.top_keywords.map((keyword, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{keyword.keyword}</td>
                    <td className="p-2">{keyword.position}</td>
                    <td className="p-2">{keyword.volume}</td>
                    <td className="p-2">{keyword.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Page Performance */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Page Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Page</th>
                <th className="p-2">Views</th>
                <th className="p-2">Bounce Rate</th>
                <th className="p-2">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {pagePerformanceData.map((page, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{page.page}</td>
                  <td className="p-2">{page.views}</td>
                  <td className="p-2">{page.bounce_rate}</td>
                  <td className="p-2">{page.avg_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Device Distribution */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Device Distribution</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({name, value}) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSEODashboard;