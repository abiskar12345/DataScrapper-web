import React from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
const navbar = [
  { label: "Cryptos", link: "/" },
  { label: "Watchlist", link: "/watchlist" },
];

const HeaderComponent = () => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {navbar.map((nav, i) => {
            return (
              <Menu.Item key={i}>
                <Link to={nav?.link}>{nav.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
