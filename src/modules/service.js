import axios from "axios";
import qs from "qs";
const API_BASE_URL = "http://127.0.0.1:5000";
export const getLiveData = (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_BASE_URL}/api/v1/livedata?${qs.stringify(query)}`, {})
      .then((res) => resolve(res?.data?.data))
      .catch((err) => reject(err?.response?.data));
  });
};

export const addWatchList = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_BASE_URL}/api/v1/watchlist`, payload, {})
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err?.response?.data));
  });
};
export const login = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_BASE_URL}/api/v1/login`, payload, {})
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
};

export const getNotifications = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_BASE_URL}/api/v1/notifications/user/${id}`, {})
      .then((res) => resolve(res?.data?.data))
      .catch((err) => reject(err?.response?.data));
  });
};
