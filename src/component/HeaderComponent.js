import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Input } from "antd";

const { Header } = Layout;
const { Search } = Input;

const navbar = [
  { label: "Cryptos", link: "/" },
  { label: "Watchlist", link: "/watchlist" },
];

const HeaderComponent = () => {
  const onSearch = () => {
    // Functionality for handling search
  };

  return (
    <Layout>
      <Header>
        <div className="logo" style={{ float: "left" }} />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ display: "inline-block" }}
        >
          {navbar.map((nav, i) => (
            <Menu.Item key={i}>
              <Link to={nav?.link}>{nav.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Search
          style={{ float: "right", marginTop: "10px", width: 304 }}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
