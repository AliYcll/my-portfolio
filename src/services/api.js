import axios from 'axios';

// Axios instance oluştur
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor - istek öncesi
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - yanıt sonrası
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// POST isteği fonksiyonu
export const sendPortfolioData = async (data) => {
  try {
    const response = await api.post('/posts', data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      success: false, 
      error: error.response?.data?.message || error.message 
    };
  }
};

export default api;