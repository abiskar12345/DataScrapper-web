import React, { useContext, useEffect } from "react";
import { Row, Col, List, Layout } from "antd";
import { AppContext } from "../modules/context";
const { Content } = Layout;
const NotificationComponent = () => {
  const { notifications, getNotifications, refresh } = useContext(AppContext);

  useEffect(() => {
    const id = localStorage.getItem("user");
    if (!id) return;
    getNotifications(id);
  }, [getNotifications, refresh]);

  return (
    <Layout>
      <Content>
        <Row justify="center">
          <Col span={12}>
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              renderItem={(data) => (
                <List.Item
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e8e8e8",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    padding: "16px",
                  }}
                >
                  <List.Item.Meta title={data.message} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default NotificationComponent;
