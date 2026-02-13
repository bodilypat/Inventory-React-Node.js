//src/hooks/useProduct.js 

import { useContext } from 'react';
import { productContext } from '../context/productContext';

export const useProduct = () => {
    const context = useContext(productContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
};

