MARKETPLACE BUILDER HACKATHON 2025 - FURNISPHERE

Here is a quick overview of all 6 days of hackathon:

Day 1 of Hackathon:
Business planing

-> Chooses a marketplace type [General E-commerce].
-> Primary purpose of marketplace.
-> Define business goals that how the marketplace aims to solve the problems of physical shopping..
-> Created data schemma

DATA SCHEMA DIAGRAM

[Product]
- ID
- Name
- Price
- Stock
- Category
- Material
- Dimensions
   |
   |
[Order] ---------> [Customer]
- Order ID        - Customer ID
- Product ID(s)   - Name
- Quantity        - Email
- Total Price     - Contact Info
- Order Status    - Address
   |
   |
[Delivery Zone]
- Zone Name
- Coverage Area
- Assigned Drivers


Day 2 of Hackathon:
Marketplace Technical Foundation

-> Prepared Marketplace Technical Foundation .
-> fullfilled all technical requirements like frontend and backend [Sanity CMS].
-> Defined deatil schemas for products, customers and orders.
 -> Defined API endpoints with their methods and payloads and test APIs through postman.
-> Designed system architechture with showing proper and detail workflow of marketplace.

• System Architecture:
┌────────────────────────┐
│ User Enters Marketplace │
└───────────┬────────────┘
 ▼
 ┌────────────────┐
 │ Login / Signup │
 └───────┬────────┘
 ▼
┌────────────────────────┐
│ Clerk API Authentication │
└───────────┬────────────┘
 ▼
 ┌──────────────┐
 │ User Home Page │
 └──────┬────────┘
 ▼
 ┌──────────────────────┐
 │ Browse Products (CMS) │
 └──────────┬───────────┘
 ▼
┌──────────────────────────┐
│ Product Details Page Open │
└────────────┬─────────────┘
 ▼
 ┌───────────────┐
 │ Add to Cart │
 └───────┬───────┘
 ▼
┌─────────────────────────────┐
│ Place Order (API to CMS) │
└────────────┬────────────────┘
 ▼
 ┌───────────────┐
 │ Checkout Page │
 └───────┬───────┘
 ▼
 ┌────────────────────┐
 │ Payment Gateway API │
 └───────┬────────────┘
 ▼
 ┌──────────────────────────┐
 │ Order Confirmation (CMS) │
 └───────────┬──────────────┘
 ▼
 ┌──────────────────────┐
 │ Track Shipment (API) │
 └──────────┬───────────┘
 ▼
 ┌────────────────────┐
 │ Create Label (API) │ - - - - -> SUCESSFULLY PLACED ORDER!
 └────────────────────┘

 
Day 3 of Hackathon:
API Integration 

-> Created custom API using route handlers in Next js. 
-> Uses GET function for fetching products. 
-> Created Endpoint /products for product listings. 
-> Tested API Endpoint using Postman to validate API response. 
-> Created API: [https://custom-api-nu.vercel.app/api/products]
-> Integrated my custom API for fetching product data into the Next.js frontend. 
-> Created Migration script to migrate data into Sanity CMS. 
-> Migrated fetched data into Sanity CMS for backend management.
-> Integrated API through the migration script into the Next.js frontend and Sanity CMS.

Day 4 of Hackathon:
Dynamic Frontend Components

-> Created reusable components (e.g., ProductCard, ProductList, Category filter, Pagination). 
-> Integrated API to fetch product data dynamically from sanity CMS. 
-> Implemented dynamic routing for individual product detail pages using [id].
-> Added toast notifications for cart and wishlist for better user experience.
-> Followed component reusability principles for cleaner code. 
-> Used a modular folder structure for better scalability. 
-> Implemented lazy loading to enhance performance and reduce initial page load time.

Day 5 of Hackathon:
Testing and Backend Refinement 

-> Performed functional testings for multiple compoenents.
-> Used try-catch blocks to handle API errors. 
->  Displayed fallback messages, e.g., "Failed to fetch products."
-> Displayed alternative fallback UI if the data is unavailable such as "Product not 
found". 
-> Displayed offline fallback UI when the network is not available a user-friendly 
message will dispalyed on screen.
-> Displayed loaders while data is fetching for better user experience.
-> Used tools like lighthouse to test the performance of website.
-> Tested responsivness on different browsers to ensure compatability. 
-> Used tool like BrowserStack to verify responsivness on several devices and browsers. 
-> Ensures that all components rendered and functioned consistently across tested 
browsers and devices.
-> Sanitized inputs to prevent SQL injection and XSS attacks. 
-> Stored sensitive API secret keys in .env file securely.

Day 6 of Hackathon:
Deployment Preparation and Staging Environment Setup 

-> Linked GitHub repository to the hosting platform.
-> Use platforms like Vercel for quick deployment.
-> Created .env.local file to save sensitive data and API keys securely. 
-> Used the hosting platform’s dashboard to securely add environment variables
-> Ensures the build process completes without error
->  Verified all features, such as product listing, filter, and cart operations.
-> Uses Lighthouse analyze speed and responsiveness.

CONCLUSION:

Through careful planning, technical precision, and iterative testing, the team achieved a well-rounded marketplace solution that is scalable, secure, and user-friendly. This hackathon not only showcased technical expertise but also demonstrated an ability to deliver a market-ready product within a constrained timeline.