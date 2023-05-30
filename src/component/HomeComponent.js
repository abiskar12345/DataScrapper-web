import React, { useContext, useEffect, useState } from "react";
import {
  Row,
  Col,
  List,
  Layout,
  Typography,
  Tag,
  Button,
  Modal,
  Input,
} from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../modules/context";
const { Content } = Layout;
const ListComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getLiveData, liveData, refresh, addWatchList, search } =
    useContext(AppContext);
  const [highPrice, setHighPrice] = useState("");
  const [lowPrice, setLowPrice] = useState("");
  const [code, setCode] = useState("");
  const showModal = (data) => {
    setCode(data);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddToWatchlist = async (data) => {
    try {
      let userId = localStorage.getItem("user");
      await addWatchList({ lowPrice, highPrice, code: code, userId });
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };
  console.log(search);

  useEffect(() => {
    let query = {};
    if (search) query = { search };
    getLiveData(query);
  }, [getLiveData, refresh, search]);

  return (
    <Layout>
      <Content>
        <Row justify="center">
          <Col span={12}>
            <Modal
              title="Are you sure to add to the watchlist?"
              visible={isModalOpen}
              onOk={handleAddToWatchlist}
              okText="Add"
              onCancel={handleCancel}
            >
              <div>
                <label>High Price:</label>
                <Input
                  placeholder="Enter high price"
                  allowClear
                  size="large"
                  type="number"
                  value={highPrice}
                  onChange={(e) => setHighPrice(e.target.value)}
                />
              </div>
              <div>
                <label>Low Price:</label>
                <Input
                  placeholder="Enter low price"
                  allowClear
                  size="large"
                  value={lowPrice}
                  type="number"
                  onChange={(e) => setLowPrice(e.target.value)}
                />
              </div>
            </Modal>

            <List
              itemLayout="horizontal"
              dataSource={liveData}
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
                  <List.Item.Meta
                    title={
                      <div style={{ display: "flex", direction: "row" }}>
                        <span
                          style={{ marginLeft: "8px", alignItems: "start" }}
                        >
                          {data?.cryptoCurrency.name}
                        </span>
                        <span
                          style={{ marginLeft: "8px", alignItems: "flex-end" }}
                        >
                          price: $ {data?.marketCap}
                        </span>
                      </div>
                    }
                    description={
                      <div>
                        <div>{data?.cryptoCurrency.code}</div>
                        <div style={{ marginTop: "8px" }}>
                          <Tag color={data?.dayData > "done" ? "green" : "red"}>
                            {data?.dayData}
                          </Tag>
                        </div>
                      </div>
                    }
                  />
                  <List.Item
                    actions={[
                      <Button
                        onClick={() => showModal(data?.cryptoCurrency.code)}
                      >
                        Add To watchList
                      </Button>,
                    ]}
                  ></List.Item>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ListComponent;
