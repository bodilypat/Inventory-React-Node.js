//src/context/PurchaseContext.jsx 

import React, { createContext, useState, useEffect } from 'react';
import { getPurchases } from '../services/purchaseService';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        const data = await getPurchases();
        setPurchases(data);
    };

    return (
        <PurchaseContext.Provider value={{ purchases, fetchPurchases }}>
            {children}
        </PurchaseContext.Provider>
    );
};

