**Description:**
- A full-stack E-Commerce platform that allows users to browse products, view detailed product information, submit reviews, manage their shopping experience, and complete purchases through a responsive web interface.

**Tools Used:**
- Django backend exposing REST APIs
- React frontend
- Postgres database for persistent storage
- Administrative dashboard for product and user management

**Features:**
  *Customer Features:*
- Browse available products
- View detailed product information
- Read and submit product reviews
- User authentication and authorization
- Shopping cart functionality
- Order placement and tracking
- Responsive user interface
  
  *Administrative Feature*s
- Product management (Create, Read, Update, Delete)
- User management
- Order monitoring and management
- Review moderation
- Inventory updates through the admin dashboard

**Recent Changes:**
  *Added Product Reviews:*
- Implemented product review functionality
- Users can submit and view reviews for products
- Reviews are linked to individual products and users
  
  *Added Detailed Product Descriptions:*
- Provided comprehensive product information

**Past Changes:**
  *Frontend Integration:*
- Replaced pages with a React frontend
- Connected React application to Django REST APIs
- Implemented client-side routing using React Router
  
  *Database Integration:*
Configured database models for:
- Products
- Users
- Orders
- Reviews
- Switched the database to Postgresql from railway after uploading
  
  *Admin Dashboard:*
- Configured Django Admin panel
- Added product management capabilities
- Added user management functionality
- Added order monitoring
- Tested administrative functions
  
  *Backend Development:*
- Implemented REST API endpoints
- Added authentication and authorization
- Developed product related APIs
- Added validation and error handling
- Frontend-Backend Communication
- Implemented JWT-based authentication flow
- Fixed API communication and data synchronization issues
- Added protected routes for authenticated users
- Uploaded backend to railway

**How to run:**
- create a virtual environment 
- install dependencies in the requirements.txt file
- install react dependencies 
- npm create vite@latest frontend -- --template react
- npm install axios react-router-dom jwt-decode   
- then run backend using python manage.py runserver 
- and run frontend using npm run dev  
