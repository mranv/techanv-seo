import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

const ModernSEODashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30days');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Custom Arrow Components
  const ArrowUpIcon = () => (
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );

  const ArrowDownIcon = () => (
    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  // Overall Performance Score
  const performanceScore = 87;

  // KPI Data with growth indicators
  const kpiData = {
    organic_traffic: {
      value: 28456,
      change: 24.5,
      trend: "up"
    },
    conversion_rate: {
      value: "3.2%",
      change: 0.8,
      trend: "up"
    },
    avg_position: {
      value: "12.4",
      change: -2.1,
      trend: "down"
    },
    revenue: {
      value: "$142.5K",
      change: 15.7,
      trend: "up"
    },
    pages_indexed: {
      value: 428,
      change: 12,
      trend: "up"
    },
    domain_authority: {
      value: 52,
      change: 3,
      trend: "up"
    }
  };

  // Monthly Performance Data with detailed metrics
  const performanceData = [
    { 
      month: 'Jan-24',
      organic: 2929,
      direct: 637,
      paid: 707,
      referral: 30,
      social: 182,
      conversions: 89,
      revenue: 98500
    },
    { 
      month: 'Feb-24',
      organic: 3150,
      direct: 743,
      paid: 837,
      referral: 40,
      social: 195,
      conversions: 95,
      revenue: 105000
    },
    { 
      month: 'Mar-24',
      organic: 3456,
      direct: 849,
      paid: 873,
      referral: 46,
      social: 210,
      conversions: 108,
      revenue: 122000
    },
    { 
      month: 'Apr-24',
      organic: 3789,
      direct: 916,
      paid: 941,
      referral: 52,
      social: 228,
      conversions: 121,
      revenue: 135000
    },
    { 
      month: 'May-24',
      organic: 4092,
      direct: 1004,
      paid: 1001,
      referral: 59,
      social: 245,
      conversions: 135,
      revenue: 142500
    }
  ];

  // Top Performing Keywords with detailed metrics
  const keywordData = {
    total_keywords: 198,
    ranking_distribution: [
      { position: "1-3", count: 28, change: 5 },
      { position: "4-10", count: 45, change: -2 },
      { position: "11-20", count: 67, change: 8 },
      { position: "21-50", count: 48, change: -3 },
      { position: "51-100", count: 26, change: -8 }
    ],
    top_keywords: [
      { 
        keyword: "enterprise cloud solutions",
        position: 2,
        volume: 4800,
        difficulty: 67,
        intent: "commercial",
        cpc: "$12.50",
        trend: "up"
      },
      { 
        keyword: "cloud migration services",
        position: 3,
        volume: 3900,
        difficulty: 58,
        intent: "commercial",
        cpc: "$15.20",
        trend: "up"
      },
      { 
        keyword: "AWS consulting services",
        position: 4,
        volume: 2900,
        difficulty: 52,
        intent: "commercial",
        cpc: "$18.40",
        trend: "stable"
      },
      { 
        keyword: "enterprise IT solutions",
        position: 5,
        volume: 2400,
        difficulty: 61,
        intent: "commercial",
        cpc: "$14.80",
        trend: "up"
      },
      { 
        keyword: "cloud security consulting",
        position: 6,
        volume: 2100,
        difficulty: 45,
        intent: "commercial",
        cpc: "$16.90",
        trend: "up"
      }
    ]
  };

  // Page Performance with engagement metrics
  const pagePerformanceData = [
    { 
      page: "/enterprise-solutions",
      views: 15678,
      bounce_rate: "28%",
      avg_time: "4:12",
      conversions: 145,
      value: "$24,500"
    },
    { 
      page: "/cloud-migration",
      views: 12456,
      bounce_rate: "32%",
      avg_time: "3:45",
      conversions: 128,
      value: "$21,800"
    },
    { 
      page: "/case-studies",
      views: 9845,
      bounce_rate: "35%",
      avg_time: "5:20",
      conversions: 92,
      value: "$15,600"
    },
    { 
      page: "/aws-consulting",
      views: 8234,
      bounce_rate: "31%",
      avg_time: "3:50",
      conversions: 86,
      value: "$14,200"
    },
    { 
      page: "/security-services",
      views: 7123,
      bounce_rate: "33%",
      avg_time: "4:05",
      conversions: 74,
      value: "$12,500"
    }
  ];

  // Core Web Vitals with historical data
  const webVitalsData = {
    lcp: {
      current: 2.1,
      previous: 2.4,
      status: "good"
    },
    fid: {
      current: 18,
      previous: 22,
      status: "good"
    },
    cls: {
      current: 0.08,
      previous: 0.12,
      status: "good"
    },
    mobile_score: 92,
    desktop_score: 97
  };

  const getTrendIcon = (trend, size = 16) => {
    if (trend === "up") return <ArrowUpIcon />;
    if (trend === "down") return <ArrowDownIcon />;
    return <ArrowRightIcon />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return "text-green-500";
    if (change < 0) return "text-red-500";
    return "text-gray-500";
  };

  const formatChange = (change) => {
    const prefix = change > 0 ? "+" : "";
    return `${prefix}${change}%`;
  };

  // Custom Loading Component
  const LoadingOverlay = () => (
    <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading dashboard data...</p>
      </div>
    </div>
  );

  // Performance Score Gauge
  const ScoreGauge = ({ score }) => {
    const gaugeData = [{
      name: 'score',
      value: score,
      fill: score >= 90 ? '#22c55e' : score >= 70 ? '#f59e0b' : '#ef4444'
    }];

    return (
      <div className="relative h-40">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="60%" 
            outerRadius="80%" 
            barSize={10} 
            data={gaugeData} 
            startAngle={180} 
            endAngle={0}
          >
            <RadialBar
              background
              dataKey="value"
              cornerRadius={30}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold">{score}</span>
          <span className="text-sm text-gray-500">Performance Score</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-50 p-6">
      {isLoading && <LoadingOverlay />}
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">SEO Performance</h1>
          <p className="text-gray-500 mt-1">Last updated: May 24, 2024 09:30 AM</p>
        </div>
        <select 
          className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="90days">Last 90 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* Performance Score Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <ScoreGauge score={performanceScore} />
        </div>
        <div className="md:col-span-3 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="organic" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="#22c55e" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(kpiData).map(([key, data]) => (
          <div key={key} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 capitalize">{key.replace(/_/g, ' ')}</h3>
                <p className="text-2xl font-bold mt-1">{data.value}</p>
              </div>
              <div className="flex items-center">
                {getTrendIcon(data.trend)}
                <span className={`ml-1 ${getChangeColor(data.change)}`}>
                  {formatChange(data.change)}
                </span>
              </div>
            </div>
            <div className="mt-4 h-[60px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData.slice(-7)}>
                  <Area 
                    type="monotone" 
                    dataKey="organic" 
                    stroke="#3b82f6" 
                    fill="#93c5fd" 
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Keyword Performance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Keyword Rankings Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={keywordData.ranking_distribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="position" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6">
                  {keywordData.ranking_distribution.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.change > 0 ? '#22c55e' : '#ef4444'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Top Performing Keywords</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Keyword</th>
                  <th className="py-3 text-center">Position</th>
                  <th className="py-3 text-center">Volume</th>
                  <th className="py-3 text-right">CPC</th>
                  <th className="py-3 text-center">Trend</th>
                </tr>
              </thead>
              <tbody>
                {keywordData.top_keywords.map((keyword, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3">
                      <div>
                        <span className="font-medium">{keyword.keyword}</span>
                        <span className="text-sm text-gray-500 block">
                          Intent: {keyword.intent}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        #{keyword.position}
                      </span>
                    </td>
                    <td className="py-3 text-center">{keyword.volume.toLocaleString()}</td>
                    <td className="py-3 text-right font-medium">{keyword.cpc}</td>
                    <td className="py-3 text-center">{getTrendIcon(keyword.trend)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Page Performance Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Page Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left">Page</th>
                <th className="py-3 text-right">Views</th>
                <th className="py-3 text-right">Bounce Rate</th>
                <th className="py-3 text-right">Avg. Time</th>
                <th className="py-3 text-right">Conversions</th>
                <th className="py-3 text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {pagePerformanceData.map((page, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">
                    <div>
                      <span className="font-medium">{page.page}</span>
                      <div className="h-1 w-full bg-gray-200 mt-1 rounded">
                        <div 
                          className="h-1 bg-blue-500 rounded"
                          style={{ 
                            width: `${(page.views / Math.max(...pagePerformanceData.map(p => p.views))) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-right">{page.views.toLocaleString()}</td>
                  <td className="py-3 text-right">{page.bounce_rate}</td>
                  <td className="py-3 text-right">{page.avg_time}</td>
                  <td className="py-3 text-right">{page.conversions}</td>
                  <td className="py-3 text-right font-medium">{page.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Web Vitals Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Core Web Vitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">LCP</span>
              <span className={`px-2 py-1 rounded text-sm ${
                webVitalsData.lcp.status === 'good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {webVitalsData.lcp.status}
              </span>
            </div>
            <p className="text-2xl font-bold">{webVitalsData.lcp.current}s</p>
            <p className="text-sm text-gray-500 mt-1">
              Previous: {webVitalsData.lcp.previous}s
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">FID</span>
              <span className={`px-2 py-1 rounded text-sm ${
                webVitalsData.fid.status === 'good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {webVitalsData.fid.status}
              </span>
            </div>
            <p className="text-2xl font-bold">{webVitalsData.fid.current}ms</p>
            <p className="text-sm text-gray-500 mt-1">
              Previous: {webVitalsData.fid.previous}ms
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">CLS</span>
              <span className={`px-2 py-1 rounded text-sm ${
                webVitalsData.cls.status === 'good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {webVitalsData.cls.status}
              </span>
            </div>
            <p className="text-2xl font-bold">{webVitalsData.cls.current}</p>
            <p className="text-sm text-gray-500 mt-1">
              Previous: {webVitalsData.cls.previous}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSEODashboard;