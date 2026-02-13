//src/context/SaleContext.jsx 

import React, { createContext, useState, useEffect } from 'react';
import { getSales } from '../services/saleService';

export const SaleContext = createContext();

export const SaleProvider = ({ children }) => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetchSales();
    }, []);

    const fetchSales = async () => {
        try {
            const data = await getSales();
            setSales(data);
        } catch (error) {
            console.error('Error fetching sales:', error);
        }
    };

    return (
        <SaleContext.Provider value={{ sales, fetchSales }}>
            {children}
        </SaleContext.Provider>
    );
}

