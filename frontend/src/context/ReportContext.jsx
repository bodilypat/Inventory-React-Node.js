//src/context/ReportContext.jsx

import React, { createContext, useState } from 'react';
import {
    getSalesReport,
    getPurchaseReport,
    getInventoryReport,
    getProfitLossReport,
} from '../services/reportService';

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
    const [report, setReport] = useState({
        sale: [],
        purchase: [],
        inventory: [],
        profitLoss: []
    });

    const fetchSalesReport = async (filters) => {
        const data = await getSalesReport(filters);
        setReport(prev => ({ ...prev, sale: data }));
    };

    const fetchPurchaseReport = async (filters) => {
        const data = await getPurchaseReport(filters);
        setReport(prev => ({ ...prev, purchase: data }));
    };

    const fetchInventoryReport = async (filters) => {
        const data = await getInventoryReport(filters);
        setReport(prev => ({ ...prev, inventory: data }));
    };

    const fetchProfitLossReport = async (filters) => {
        const data = await getProfitLossReport(filters);
        setReport(prev => ({ ...prev, profitLoss: data }));
    };

    return (
        <ReportContext.Provider 
        value={{
            report,
            fetchSalesReport,
            fetchPurchaseReport,
            fetchInventoryReport,
            fetchProfitLossReport
        }}>
            {children}
        </ReportContext.Provider>
    );
};

