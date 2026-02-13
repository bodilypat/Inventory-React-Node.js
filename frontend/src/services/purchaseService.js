//src/services/purchaseService.js

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getPurchases = async () => {
    const response = await axios.get(`${API_URL}/purchases`);
    return response.data;
};

export const getPurchase = async (id) => {
    const response = await axios.get(`${API_URL}/purchases/${id}`);
    return response.data;
}

export const createPurchase = async (purchase) => {
    const response = await axios.post(`${API_URL}/purchases`, purchase);
    return response.data;
};

export const updatePurchase = async (id, purchase) => {
    const response = await axios.put(`${API_URL}/purchases/${id}`, purchase);
    return response.data;
};

export const deletePurchase = async (id) => {
    await axios.delete(`${API_URL}/purchases/${id}`);
};

export const getPurchasesByUser = async (userId) => {
    const response = await axios.get(`${API_URL}/purchases/user/${userId}`);
    return response.data;
};

export const getPurchasesByProduct = async (productId) => {
    const response = await axios.get(`${API_URL}/purchases/product/${productId}`);
    return response.data;
};

export const getPurchasesByDateRange = async (startDate, endDate) => {
    const response = await axios.get(`${API_URL}/purchases/date-range`, {
        params: { startDate, endDate }
    });
    return response.data;
};

export const getPurchasesByStatus = async (status) => {
    const response = await axios.get(`${API_URL}/purchases/status/${status}`);
    return response.data;
};

export const getPurchasesByAmountRange = async (minAmount, maxAmount) => {
    const response = await axios.get(`${API_URL}/purchases/amount-range`, {
        params: { minAmount, maxAmount }
    });
    return response.data;
};

export const getPurchasesByPaymentMethod = async (paymentMethod) => {
    const response = await axios.get(`${API_URL}/purchases/payment-method/${paymentMethod}`);
    return response.data;
};

export const getPurchasesByShippingMethod = async (shippingMethod) => {
    const response = await axios.get(`${API_URL}/purchases/shipping-method/${shippingMethod}`);
    return response.data;
};

export const getPurchasesByCategory = async (category) => {
    const response = await axios.get(`${API_URL}/purchases/category/${category}`);
    return response.data;
};

export const getPurchasesByBrand = async (brand) => {
    const response = await axios.get(`${API_URL}/purchases/brand/${brand}`);
    return response.data;
};

export const getPurchasesByRating = async (rating) => {
    const response = await axios.get(`${API_URL}/purchases/rating/${rating}`);
    return response.data;
};

export const getPurchasesByReview = async (review) => {
    const response = await axios.get(`${API_URL}/purchases/review/${review}`);
    return response.data;
};

