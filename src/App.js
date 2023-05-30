import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./modules/context";
import { Layout } from "antd";
import HeaderComponent from "./component/HeaderComponent";
import HomeComponent from "./component/HomeComponent";
import LoginComponent from "./component/LoginComponent";
import NotificationComponent from "./component/NotificationComponent";

const { Content } = Layout;

const ProtectedRoute = ({ element, path }) => {
  const user = !!localStorage.getItem("user");

  return user ? element : <Navigate to="/login" />;
};
function App() {
  return (
    <Router basename="/">
      <AppContextProvider>
        <Layout>
          <HeaderComponent />
          <Layout>
            <Content>
              <Routes>
                <Route
                  path="/"
                  element={<ProtectedRoute element={<HomeComponent />} />}
                />
                <Route
                  path="/notifications"
                  element={
                    <ProtectedRoute element={<NotificationComponent />} />
                  }
                />
                <Route path="/login" element={<LoginComponent />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </AppContextProvider>
    </Router>
  );
}

export default App;
