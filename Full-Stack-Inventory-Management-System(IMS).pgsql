Full-Stack-Inventory-Management-System(IMS)
├── backend(Node.js)
│   ├── src/
│   │   ├── app.js                          
│   │   ├── config/                                     # Database connection, Environment config 
│   │   │   ├── db.js
│   │   │   └── index.js
│   │   │
│   │   ├── models/                                     # Mongoose schemas 
│   │   │   ├── Category.js                              
│   │   │   ├── Supplier.js
│   │   │   ├── Product.js                      
│   │   │   ├── Customer.js
│   │   │   ├── Warehouse.js                                  
│   │   │   ├── Inventory.js
│   │   │   ├── PurchaseOrder.js
│   │   │   ├── PurchaseOrderItems.js
│   │   │   ├── SaleOrder.js
│   │   │   ├── SaleOrderItems.js
│   │   │   ├── StockMovement.js
│   │   │   ├── User.js
│   │   │   ├── AuditLog.js
│   │   │   └── Setting.js
│   │   ├── controllers/                                 # Handle request & response, Call service
│   │   │   ├── authController.js              
│   │   │   ├── ProductController.js
│   │   │   ├── OrderController.js
│   │   │   └── inventoryController.js 
│   │   ├── routes/                                      # API endpoint , Connect to controllers
│   │   │   ├── authRoutes.js              
│   │   │   ├── productRoute.js
│   │   │   ├── orderRoutes.js
│   │   │   └── inventoryRoutes.js 
│   │   ├── services/                                    # Business logic layer , Keeps controller clean     
│   │   │   ├── productService.js              
│   │   │   ├── orderService.js
│   │   │   └── inventoryService.js 
│   │   ├── middlewares/                                 # Authentication(JWT) , Role-based access , Error handling
│   │   │   ├── authMiddleware.js              
│   │   │   ├── roleMiddleware.js
│   │   │   ├── errorMiddleware.js
│   │   │   └── validateMiddleware.js 
│   │   ├── utils/                                       # Helper function, Token generation, Logging
│   │   │   ├── generateToken.js
│   │   │   ├── hashPassword.js
│   │   │   └── logger.js            
│   │   └── validations/                                 # Request body validation(Joi / Express-validator)
│   │       ├── productValidation.js
│   │       ├── userValidation.js
│   │       └── orderValidation.js  
│   │                         
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
│   
├── frontend/ (React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── src/
│   │   ├── components/                                         # Reusable UI & composed components
│   │   │   ├── ui/                            
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Select.jsx                          
│   │   │   │   ├── Badge.jsx                    
│   │   │   │   ├── Modal.jsx                              
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Alert.jsx                      
│   │   │   │   ├── Tooltip.jsx                    
│   │   │   │   ├── Tab.jsx  
│   │   │   │   ├── Accordion.jsx                  
│   │   │   │   ├── Breadcrumb.jsx               
│   │   │   │   ├── Pagination.jsx     
│   │   │   │   ├── Loader.jsx                      
│   │   │   │   └── index.js                     
│   │   │   ├── layout/                            
│   │   │   │   ├── MainLayout.jsx                                    # Wrapper layout (Header + Sidebar + content)
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── Header.jsx                                        
│   │   │   │   ├── Sidebar.jsx                                       
│   │   │   │   ├── Footer.jsx                                        
│   │   │   │   ├── PageContainer.jsx                                
│   │   │   │   └── ProtectedRoute.jsx                               
│   │   │   ├── forms/ 
│   │   │   │   ├── ProductForm.jsx                 
│   │   │   │   ├── CategoryForm.jsx
│   │   │   │   ├── SupplierForm.jsx
│   │   │   │   ├── CustomerForm.jsx
│   │   │   │   ├── WarehouseForm.jsx
│   │   │   │   ├── PurchaseOrderForm.jsx
│   │   │   │   ├── SalesOrderForm.jsx
│   │   │   │   ├── StockAdjustmentForm.jsx
│   │   │   │   └── UserForm.jsx
│   │   │   ├── charts/ 
│   │   │   │   ├── BarChart.jsx                              # Generic Bar Chart
│   │   │   │   ├── LineChart.jsx                             # Generic Line Chart
│   │   │   │   ├── PieChart.jsx                              # Generic Pie / Doughtnut Chart
│   │   │   │   ├── Inventory.jsx                             # Stock levels per product / Category
│   │   │   │   ├── SalesChart.jsx                            # Sales trends over time 
│   │   │   │   ├── PurchaseChart.jsx                         # Purchase trends over time 
│   │   │   │   └── ChartWrapper.jsx                          # Optional wrapper for consistent styling/layout
│   │   │   │       ├── 
│   │   │   │       ├── 
│   │   │   │       └── 
│   │   │   └── styles/
│   │   │       └── globals.css
│   │   │
│   │   ├── pages/                                           # Route-level pages (feature grouped)
│   │   │   ├── auth/    
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   ├── ForgotPassword.jsx     
│   │   │   │   └── ResetPassword.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── products.jsx
│   │   │   ├── Inventory.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── Suppliers.jsx
│   │   │   ├── Customer.jsx
│   │   │   ├── PurchaseOrder.jsx
│   │   │   ├── SalesOrder.jsx
│   │   │   ├── Report.jsx
│   │   │   ├── setting.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── NotFound.jsx 
│   │   │      
│   │   ├── services/                                          # All backend API calls
│   │   │   ├── authService.js    
│   │   │   ├── productService.js     
│   │   │   ├── stockService.js            
│   │   │   ├── salesService.js
│   │   │   ├── purchaseService.js
│   │   │   └── reportService.js
│   │   ├── context/                                           # Global state management (auth, user data)
│   │   │   ├── AuthContext.jsx
│   │   │   ├── ProductContext.jsx
│   │   │   ├── SaleContext.jsx
│   │   │   ├── PurchaseContext.jsx
│   │   │   ├── StockContext.jsx 
│   │   │   └── ReportContext.jsx
│   │   ├── hooks/                                             # Custom reusable logic
│   │   │   ├── useAuth.js
│   │   │   ├── useProduct.js
│   │   │   ├── useSales.js
│   │   │   ├── usePurchase.js
│   │   │   ├── useStock.js 
│   │   │   └── useReports.js
│   │   ├── routes/                                            # React Router cofiguration
│   │   │   ├── productRoutes.js
│   │   │   ├── salesRoutes.js
│   │   │   ├── purchaseRoutes.js
│   │   │   ├── stockRoutes.js
│   │   │   └── reportRoutes.js
│   │   ├── utils/                                             # Helper function (formatting validation)
│   │   │   ├── tokenStorage.js
│   │   │   ├── validators.js
│   │   │   ├── permissions.js
│   │   │   └── constants.js
│   │   ├── App.jsx                       
│   │   └── main.jsx
│   └──                   
├── .env                                        
├── requirements.txt                            
├── docker-compose.json                         
└── README.md                                  