Full-Stack-Inventory-Management-System(IMS)
├── backend(Node.js)
│   ├── src/
│   │   ├── app.js                          
│   │   ├── server.js
│   │   │
│   │   ├── config/                             
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   └── index.js
│   │   │
│   │   ├── controllers/                                
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   └── session.controller.js                    
│   │   │   ├── user/
│   │   │   │   ├── user.controller.js
│   │   │   │   ├── role.controller.js
│   │   │   │   └── permission.controller.js
│   │   │   ├── masters/
│   │   │   │   ├── product.controller.js
│   │   │   │   ├── category.controller.js
│   │   │   │   └── supplier.controller.js
│   │   │   ├── inventory/
│   │   │   │   ├── stock.controller.js
│   │   │   │   ├── batch.controller.js
│   │   │   │   └── serial.controller.js
│   │   │   ├── purchasing/
│   │   │   │   ├── purchase.controller.js
│   │   │   │   ├── grn.controller.js
│   │   │   │   └── purchaseReturn.controller.js
│   │   │   ├── sales/
│   │   │   │   ├── sales.controller.js
│   │   │   │   └── saleReturn.controller.js
│   │   │   ├── analytics/
│   │   │   │   ├── salesAnalytics.controller.js
│   │   │   │   ├── inventoryAnalytics.controller.js
│   │   │   │   └── profitAnalytics.controller.js
│   │   │   └── audit/
│   │   │       ├── report.controller.js
│   │   │       ├── dashboard.controller.js
│   │   │       └── activityLog.controller.js   
│   │   │   
│   │   ├── services/                                       # Business Logic
│   │   │   ├── auth/
│   │   │   │   ├── auth.service.js
│   │   │   │   └── session.service.js                      
│   │   │   ├── users/
│   │   │   │   ├── user.service.js
│   │   │   │   ├── role.service.js
│   │   │   │   └── permission.service.js
│   │   │   ├── masters/
│   │   │   │   ├── product.service.js                       
│   │   │   │   ├── category.service.js                      
│   │   │   │   └── supplier.service.js    
│   │   │   ├── inventorys/             
│   │   │   │   ├── stock.service.js                         
│   │   │   │   ├── batch.service.js                        
│   │   │   │   └── serial.service.js                                   
│   │   │   ├── purchasing/
│   │   │   │   ├── purchase.service.js                      
│   │   │   │   ├── grn.service.js                           
│   │   │   │   └── purchaseReturn.service.js
│   │   │   ├── sales/
│   │   │   │   ├── sales.service.js                         
│   │   │   │   └── saleReturn.service.js
│   │   │   ├── analytics/
│   │   │   │   ├── salesAnalytics.sevice.js
│   │   │   │   ├── inventorAnalytics.service.js
│   │   │   │   └── financeAnalytics.service.js
│   │   │   └── audit/
│   │   │       ├── report.service.js
│   │   │       ├── dashboard.service.js
│   │   │       └── activityLog.service.js                         
│   │   ├── models/                                           
│   │   │   ├── auth/
│   │   │   │   └── session.model.js                          
│   │   │   ├── user/
│   │   │   │   ├── user.model.js
│   │   │   │   ├── role.model.js
│   │   │   │   └── permission.model.js
│   │   │   ├── inventorys/                    
│   │   │   │   ├── stock.model.js                         
│   │   │   │   ├── batch.model.js                         
│   │   │   │   └── serial.model.js                        
│   │   │   ├── purchasing/
│   │   │   │   ├── purchase.model.js                      
│   │   │   │   ├── grn.model.js                           
│   │   │   │   └── purchaseReturn.model.js
│   │   │   ├── sales/
│   │   │   │   ├── sales.model.js                         
│   │   │   │   └── saleReturn.model.js
│   │   │   ├── audit/
│   │   │   │   └── activityLog.model.js
│   │   │   └── index.js
│   │   ├── routes/                                           
│   │   │   ├── auth/
│   │   │   │   └── auth.routes.js                          
│   │   │   ├── user/
│   │   │   │   ├── user.routes.js
│   │   │   │   ├── role.routes.js
│   │   │   │   └── permission.routes.js
│   │   │   ├── inventory/                    
│   │   │   │   ├── stock.routes.js                         
│   │   │   │   ├── batch.routes.js                         
│   │   │   │   └── serial.routes.js                        
│   │   │   ├── purchasing/
│   │   │   │   ├── purchase.routes.js                      
│   │   │   │   ├── grn.routes.js                           
│   │   │   │   └── purchaseReturn.routes.js
│   │   │   ├── sales/
│   │   │   │   ├── sales.routes.js                         
│   │   │   │   └── saleReturn.routes.js
│   │   │   ├── audit/
│   │   │   │   └── activityLog.routes.js
│   │   │   └── index.js
│   │   │       
│   │   ├── middleware/     
│   │   │   ├── auth.middleware.js                         
│   │   │   ├── permission.middleware.js                 
│   │   │   ├── validate.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   ├── notFound.middleware.js
│   │   │   └── activity.middleware.js
│   │   │ 
│   │   ├── utils/                             
│   │   │   ├── jwt.js
│   │   │   ├── logger.js
│   │   │   └── constants.js                  
│   │   └── docs/    
│   │       └── api.md        
│   │                         
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── requirements.txt
│   ├── alembic.ini
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