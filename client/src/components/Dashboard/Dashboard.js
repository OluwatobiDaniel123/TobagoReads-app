import React, { useState } from "react";
import "./Dashboard.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Link } from "react-router-dom";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import Customers from "./Customers";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useEffect } from "react";
import { getComments, getOrders } from "../Dashboard/API";
import Inventory from "./Inventory";

export const Donors = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="headerToggle">
          <div className="logo">TobagoReads</div>

          {isMobile && (
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <IoClose />
            </div>
          )}
        </div>
        <ul className="nav-links">
          <Link to="/dashboard">
            <li>Overview</li>
          </Link>
          <Link to="/campaigns">
            <li>Campaigns</li>
          </Link>
          <Link to="/donors">
            <li>Donors</li>
          </Link>
          <Link to="/reports">
            <li>Reports</li>
          </Link>
        </ul>
      </div>
      <div className="main-content">
        <div className="topbar">
          {isMobile && (
            <IoMenuOutline className="sidebar-toggle" onClick={toggleSidebar} />
          )}
          <h1 className="dashboard-title">TobagoReads Admin</h1>
          <Space>
            <Badge count={comments.length} dot>
              <MailOutlined
                style={{ fontSize: 24 }}
                onClick={() => {
                  setCommentsOpen(true);
                }}
              />
            </Badge>
            <Badge count={orders.length}>
              <BellFilled
                style={{ fontSize: 24 }}
                onClick={() => {
                  setNotificationsOpen(true);
                }}
              />
            </Badge>
          </Space>
          <Drawer
            title="Comments"
            open={commentsOpen}
            onClose={() => {
              setCommentsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={comments}
              renderItem={(item) => {
                return <List.Item>{item.body}</List.Item>;
              }}
            ></List>
          </Drawer>
          <Drawer
            title="Notifications"
            open={notificationsOpen}
            onClose={() => {
              setNotificationsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={orders}
              renderItem={(item) => {
                return (
                  <List.Item>
                    <Typography.Text strong>{item.title}</Typography.Text> has
                    been ordered!
                  </List.Item>
                );
              }}
            ></List>
          </Drawer>
        </div>
        <Customers />
      </div>
    </div>
  );
};

export const Campaigns = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="headerToggle">
          <div className="logo">TobagoReads</div>

          {isMobile && (
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <IoClose />
            </div>
          )}
        </div>
        <ul className="nav-links">
          <Link to="/dashboard">
            <li>Overview</li>
          </Link>
          <Link to="/campaigns">
            <li>Campaigns</li>
          </Link>
          <Link to="/donors">
            <li>Donors</li>
          </Link>
          <Link to="/reports">
            <li>Reports</li>
          </Link>
        </ul>
      </div>
      <div className="main-content">
        <div className="topbar">
          {isMobile && (
            <IoMenuOutline className="sidebar-toggle" onClick={toggleSidebar} />
          )}
          <h1 className="dashboard-title">TobagoReads Admin</h1>
          <Space>
            <Badge count={comments.length} dot>
              <MailOutlined
                style={{ fontSize: 24 }}
                onClick={() => {
                  setCommentsOpen(true);
                }}
              />
            </Badge>
            <Badge count={orders.length}>
              <BellFilled
                style={{ fontSize: 24 }}
                onClick={() => {
                  setNotificationsOpen(true);
                }}
              />
            </Badge>
          </Space>
          <Drawer
            title="Comments"
            open={commentsOpen}
            onClose={() => {
              setCommentsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={comments}
              renderItem={(item) => {
                return <List.Item>{item.body}</List.Item>;
              }}
            ></List>
          </Drawer>
          <Drawer
            title="Notifications"
            open={notificationsOpen}
            onClose={() => {
              setNotificationsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={orders}
              renderItem={(item) => {
                return (
                  <List.Item>
                    <Typography.Text strong>{item.title}</Typography.Text> has
                    been ordered!
                  </List.Item>
                );
              }}
            ></List>
          </Drawer>
        </div>
        <Inventory />
      </div>
    </div>
  );
};

const donationData = [
  { name: "Education", value: 400 },
  { name: "Food", value: 300 },
  { name: "Healthcare", value: 300 },
  { name: "Others", value: 200 },
];

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"];

const recentActivities = [
  { id: 1, name: "John Doe", activity: "Donated $200", date: "2025-01-20" },
  {
    id: 2,
    name: "Jane Smith",
    activity: "Volunteered 5 hours",
    date: "2025-01-18",
  },
  { id: 3, name: "Acme Corp", activity: "Sponsored $1000", date: "2025-01-15" },
  { id: 3, name: "Acme Corp", activity: "Sponsored $1000", date: "2025-01-15" },
  { id: 3, name: "Acme Corp", activity: "Sponsored $1000", date: "2025-01-15" },
  { id: 3, name: "Acme Corp", activity: "Sponsored $1000", date: "2025-01-15" },
];

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="headerToggle">
          <div className="logo">TobagoReads</div>

          {isMobile && (
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <IoClose />
            </div>
          )}
        </div>
        <ul className="nav-links">
          <Link to="/dashboard">
            <li>Overview</li>
          </Link>
          <Link to="/campaigns">
            <li>Campaigns</li>
          </Link>
          <Link to="/donors">
            <li>Donors</li>
          </Link>
          <Link to="/reports">
            <li>Reports</li>
          </Link>
        </ul>
      </div>

      <div className="main-content">
        <div className="topbar">
          {isMobile && (
            <IoMenuOutline className="sidebar-toggle" onClick={toggleSidebar} />
          )}
          <h1 className="dashboard-title">TobagoReads Admin</h1>
          <Space>
            <Badge count={comments.length} dot>
              <MailOutlined
                style={{ fontSize: 24 }}
                onClick={() => {
                  setCommentsOpen(true);
                }}
              />
            </Badge>
            <Badge count={orders.length}>
              <BellFilled
                style={{ fontSize: 24 }}
                onClick={() => {
                  setNotificationsOpen(true);
                }}
              />
            </Badge>
          </Space>
          <Drawer
            title="Comments"
            open={commentsOpen}
            onClose={() => {
              setCommentsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={comments}
              renderItem={(item) => {
                return <List.Item>{item.body}</List.Item>;
              }}
            ></List>
          </Drawer>
          <Drawer
            title="Notifications"
            open={notificationsOpen}
            onClose={() => {
              setNotificationsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={orders}
              renderItem={(item) => {
                return (
                  <List.Item>
                    <Typography.Text strong>{item.title}</Typography.Text> has
                    been donated!
                  </List.Item>
                );
              }}
            ></List>
          </Drawer>
        </div>

        <div className="dashboard-main">
          <section className="overview-section grid">
            <div className="card">
              <h2>Total Donations</h2>
              <p className="value">$15,200</p>
            </div>
            <div className="card">
              <h2>Active Campaigns</h2>
              <p className="value">8</p>
            </div>
            <div className="card">
              <h2>Volunteer Hours</h2>
              <p className="value">540</p>
            </div>
          </section>

          <section className="chart-section">
            <div className="section-header">
              <h2>Donation Distribution</h2>
            </div>
            <div className="chart-wrapper">
              <PieChart width={353} height={400}>
                <Pie
                  data={donationData}
                  cx="50%"
                  cy="53%"
                  labelLine={true}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={120}
                  width="100%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {donationData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </section>

          <section className="activity-section">
            <div className="section-header">
              <h2>Recent Activities</h2>
            </div>
            <table className="activity-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Activity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.name}</td>
                    <td>{activity.activity}</td>
                    <td>{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <footer className="dashboard-footer">
          <p>© {new Date().getFullYear()} TobagoReads. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
