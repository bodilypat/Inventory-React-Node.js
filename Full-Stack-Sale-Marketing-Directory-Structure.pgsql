Full-Stack-Store-Management-System(SMS)
│   
├── backend(SMS Node.js)
│   ├── app/
│   │   ├── controllers/                          
│   │   │   ├── authController.js
│   │   │   ├── productController.js
│   │   │   ├── categoryController.js
│   │   │   └── orderController.js
│   │   ├── models/                          
│   │   │   ├── user.js
│   │   │   ├── Product.js
│   │   │   ├── Category.js
│   │   │   └── Order.js
│   │   ├── routes/                          
│   │   │   ├── authRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   ├── categoryRoutes.js
│   │   │   └── orderRoutes.js
│   │   ├── middleware/                          
│   │   │   ├── authMiddleware.js
│   │   │   └── errorMiddleware.js             
│   │   ├── utils/                          
│   │   │   ├── helpers.js
│   │   │   └──   
│   │   ├── config/                          
│   │   │   ├── db.js
│   │   │   └──  
│   │   ├── server.js                          
│   │   └── package.json 
│	├── main.py
│	├── tests/
│   └── providers/
│   
├── Frontend(SMS with React.js)
│   │
│   ├── src/
│   │   ├── assets/  
│   │	│	├── images/     
│   │	│	├── icon/                                     
│   │	│   └── styles/
│   │   │       ├── variables.css
│   │   │       ├── global.css
│   │   │   	└── theme.css
│   │   ├── components/                                            
│   │	│   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │	└── Loader.jsx
│   │	│   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │	└── Breadcrumb.jsx
│   │	│   └── protected/
│   │   │       ├── ProtectedRoute.jsx
│   │   │   	└── RoleBaseRoute.jsx
│   │	│ 
│   │   ├── features/                                             
│   │	│	├── auth/
│   │   │   │   ├── pages/
│   │   │   │   ├── authSlice.js
│   │   │   │	└── auth.api.js
│   │	│   ├── dashboard/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │	└── widgets/
│   │	│   ├── products/
│   │   │   │   ├── page/
│   │   │   │   ├── components/
│   │   │   │	└── product.api.js
│   │	│   ├── inventory/
│   │   │   │   ├── pages/
│   │   │   │   ├── components/
│   │   │   │	└── inventory.api.js
│   │	│   ├── sales/
│   │   │   │   ├── pages/
│   │   │   │   ├── components
│   │   │   │   │   ├── PaymentModal.jsx
│   │   │   │	│   └── inventory.api.js
│   │   │   │	└── sales.api.js
│   │	│   ├── customers/
│   │   │   │   ├── CustomerList.jsx
│   │   │   │   ├── AddCustomer.jsx
│   │   │   │   ├── EditCustomer.jsx
│   │   │   │	└── CustomerDetials.jsx
│   │	│   ├── suppliers/
│   │   │   │   ├── SupplierList.jsx
│   │   │   │   ├── AddSupplier.jsx
│   │   │   │   ├── EditSupplier.jsx
│   │   │   │	└── SupplierDetials.jsx
│   │	│   └── reports/
│   │   │       ├── Dashbord.jsx
│   │   │       ├── SaleReport.jsx
│   │   │       ├── InventoryReport.jsx
│   │   │       ├── CustomerReport.jsx
│   │   │   	└── SupplierReport.jsx
│   │   ├── context/
│   │	│   ├── AuthContext.jsx                            
│   │	│   ├── StoreContext.jsx                                
│   │	│   ├── NotificationContext.jsx                            
│   │   │   └── index.js    
│   │   ├── services/                                          # API call
│   │	│   ├── api.js                                         # Central Axios Instance
│   │	│   ├── authService.js                                
│   │	│   ├── productService.js      
│   │	│   ├── inventoryService.js                  
│   │	│   ├── saleService.js                         
│   │	│   ├── customerService.js
│   │	│   ├── staffApi.js   
│   │   │   └── index.js                                      # Optional , export all service
│   │   ├── hooks/
│   │	│   ├── useAuth.js                                
│   │	│   ├── useFetch.js            
│   │	│   ├── useDebounce.js   
│   │	│   ├── useTable.js                         
│   │	│   ├── useForm.js                            
│   │   │   └── index.js           
│   │   ├── utils/
│   │	│   ├── constants.js                    
│   │	│   ├── helper.js                             
│   │	│   ├── validators.js                           
│   │	│   ├── formatters.js 
│   │	│   ├── apiHelpers.js 
│   │   │   └── index.js
│   │   ├── App.jsx                                   
│   │   └── main.jsx                                           
│   │   
│   └── data/                     
│       ├── 
│       └── 
├── static/                                     
│   └──    
├── .gitignore 
└── README.md
