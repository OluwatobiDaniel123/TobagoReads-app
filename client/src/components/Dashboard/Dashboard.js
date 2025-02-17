import React, { useState } from "react";
import {
  CircleDollarSign,
  Users,
  Heart,
  TrendingUp,
  Calendar,
  Home,
  PieChart,
  Settings,
  Mail,
  Menu,
  X,
} from "lucide-react";

import {
  PieChart as ReChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

const CustomCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CustomCardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b border-gray-100 ${className}`}>{children}</div>
);

const CustomCardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 ${
      isOpen ? "w-64" : "w-0"
    } overflow-hidden z-50`}
  >
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Charity Admin</h2>
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white hover:text-gray-300"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      {[
        { icon: Home, label: "Dashboard" },
        { icon: PieChart, label: "Analytics" },
        { icon: Calendar, label: "Events" },
        { icon: Mail, label: "Messages" },
        { icon: Settings, label: "Settings" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-3 rounded hover:bg-gray-800 cursor-pointer mb-2 transition-colors duration-200"
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const StatCard = ({ title, value, icon: Icon, description, trend }) => (
  <CustomCard className="h-full">
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <Icon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
      {trend && (
        <div className="flex items-center mt-2">
          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
          <span className="text-xs text-green-500">{trend}</span>
        </div>
      )}
    </div>
  </CustomCard>
);

const DonationDistribution = () => {
  const data = [
    { name: "Education", value: 35 },
    { name: "Healthcare", value: 25 },
    { name: "Environment", value: 20 },
    { name: "Food Security", value: 20 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const colorIndex = data ? data.name : 0;
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
          <p
            className="font-semibold"
            style={{ color: COLORS[data ? data.index : 0] }}
          >
            {data.name}
          </p>
          <p className="text-gray-600">{data.value}% of donations</p>
        </div>
      );
    }
    return null;
  };

  return (
    <CustomCard className="h-full">
      <CustomCardHeader>
        <CustomCardTitle>Donation Distribution</CustomCardTitle>
      </CustomCardHeader>
      <div className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ReChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={90}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(value) => (
                <span className="text-sm text-gray-700">{value}</span>
              )}
            />
          </ReChart>
        </ResponsiveContainer>
      </div>
    </CustomCard>
  );
};

const MonthlyTrend = () => {
  const data = [
    { name: "Jan", amount: 15000 },
    { name: "Feb", amount: 18000 },
    { name: "Mar", amount: 22000 },
    { name: "Apr", amount: 21000 },
    { name: "May", amount: 25000 },
    { name: "Jun", amount: 28000 },
  ];

  return (
    <CustomCard className="h-full">
      <CustomCardHeader>
        <CustomCardTitle>Monthly Donations Trend</CustomCardTitle>
      </CustomCardHeader>
      <div className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CustomCard>
  );
};

const RecentDonations = () => (
  <CustomCard className="h-full">
    <CustomCardHeader>
      <CustomCardTitle>Recent Donations</CustomCardTitle>
    </CustomCardHeader>
    <div className="p-4">
      <div className="space-y-4">
        {[
          {
            name: "Anonymous",
            amount: "$500",
            date: "2 hours ago",
            cause: "Education",
          },
          {
            name: "Sarah Wilson",
            amount: "$1,200",
            date: "5 hours ago",
            cause: "Healthcare",
          },
          {
            name: "James Brown",
            amount: "$750",
            date: "1 day ago",
            cause: "Environment",
          },
          {
            name: "Emily Chen",
            amount: "$2,000",
            date: "2 days ago",
            cause: "Food Security",
          },
        ].map((donation, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0"
          >
            <div>
              <div className="font-medium text-gray-900">{donation.name}</div>
              <div className="text-sm text-gray-500">{donation.cause}</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-900">{donation.amount}</div>
              <div className="text-sm text-gray-500">{donation.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </CustomCard>
);

const UpcomingEvents = () => (
  <CustomCard className="h-full">
    <CustomCardHeader>
      <CustomCardTitle>Upcoming Events</CustomCardTitle>
    </CustomCardHeader>
    <div className="p-4">
      <div className="space-y-4">
        {[
          {
            name: "Annual Fundraising Gala",
            date: "March 15, 2025",
            location: "Grand Hotel",
          },
          {
            name: "Community Outreach Day",
            date: "March 20, 2025",
            location: "City Park",
          },
          {
            name: "Volunteer Training",
            date: "March 25, 2025",
            location: "Main Office",
          },
        ].map((event, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 border-b border-gray-100 pb-2 last:border-0"
          >
            <Calendar className="h-8 w-8 text-blue-500" />
            <div>
              <div className="font-medium text-gray-900">{event.name}</div>
              <div className="text-sm text-gray-500">
                {event.date} • {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </CustomCard>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 ">
                Charity Dashboard
              </h1>
            </div>
            <div className="text-sm text-gray-500">Last updated: Just now</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Donations"
              value="$245,678"
              icon={CircleDollarSign}
              description="Total donations this year"
              trend="+12.3% from last month"
            />
            <StatCard
              title="Active Donors"
              value="1,234"
              icon={Users}
              description="Regular monthly donors"
              trend="+5.8% from last month"
            />
            <StatCard
              title="Lives Impacted"
              value="45,678"
              icon={Heart}
              description="People helped this year"
              trend="+15.2% from last month"
            />
            <StatCard
              title="Success Rate"
              value="94%"
              icon={TrendingUp}
              description="Project completion rate"
              trend="+2.1% from last month"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <DonationDistribution />
            <MonthlyTrend />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <RecentDonations />
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
