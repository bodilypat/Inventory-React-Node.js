//src/context/StockContext.jsx 

import React, { createContext, useState, useEffect } from 'react';
import { getStock } from '../services/stockService';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        fetchStock();
    }, []);

    const fetchStock = async () => {
        const data = await getStock();
        setStockData(data);
    };

    return (
        <StockContext.Provider value={{ stockData, fetchStock }}>
            {children}
        </StockContext.Provider>
    );
};

