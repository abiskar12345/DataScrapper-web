import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./modules/context";
import { Layout } from "antd";
import HeaderComponent from "./component/HeaderComponent";
const { Content } = Layout;

function App() {
  return (
    <Router basename="/">
      <Layout>
        <HeaderComponent />
        <Layout>
          <Content>
            <AppContextProvider>{/* <Routes></Routes> */}</AppContextProvider>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
