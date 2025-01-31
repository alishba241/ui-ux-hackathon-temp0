# MARKETPLACE BUILDER HACKATHON 2025 - FURNISPHERE

## Day 1 of Hackathon: Business Planning

- **Chosen Marketplace Type:** General E-commerce
- **Primary Purpose of Marketplace:** To solve the problems of physical shopping by offering a seamless online experience.
- **Business Goals:** Focused on enhancing the user shopping experience with convenience, variety, and customer satisfaction.
- **Created Data Schema**

### Data Schema Diagram
#### [Product]
- ID
- Name
- Price
- Stock
- Category
- Material
- Dimensions

#### [Order] ⟶ [Customer]
- Order ID      ⟶ Customer ID
- Product ID(s) ⟶ Name
- Quantity      ⟶ Email
- Total Price   ⟶ Contact Info
- Order Status  ⟶ Address

#### [Delivery Zone]
- Zone Name
- Coverage Area
- Assigned Drivers

---

## Day 2 of Hackathon: Marketplace Technical Foundation

- Prepared the technical foundation of the marketplace.
- Fulfilled all technical requirements for frontend and backend using Sanity CMS.
- Defined detailed schemas for products, customers, and orders.
- Defined API endpoints with their methods and payloads. Test APIs via Postman.
- Designed system architecture with proper workflow for the marketplace.


---

## Day 3 of Hackathon: API Integration

- Created custom API using route handlers in Next.js.
- Implemented a GET function to fetch products.
- Created an endpoint `/products` for product listings.
- Tested API endpoint using Postman to validate the response.
- Created API: [https://custom-api-nu.vercel.app/api/products]
- Integrated custom API for dynamic product data fetching.
- Migrated fetched data to Sanity CMS using migration scripts.

---

## Day 4 of Hackathon: Dynamic Frontend Components

- Created reusable components: `ProductCard`, `ProductList`, `Category Filter`, `Pagination`.
- Integrated API to dynamically fetch product data from Sanity CMS.
- Implemented dynamic routing for product detail pages using `[id]`.
- Added toast notifications for cart and wishlist actions.
- Followed component reusability principles for cleaner code.
- Used a modular folder structure for scalability.
- Implemented lazy loading to improve performance.

---

## Day 5 of Hackathon: Testing and Backend Refinement

- Conducted functional testing for components.
- Handled API errors with try-catch blocks.
- Displayed fallback messages (e.g., "Failed to fetch products").
- Implemented offline fallback UI.
- Displayed loading states while data is being fetched.
- Used tools like Lighthouse for performance testing.
- Tested responsiveness on multiple browsers and devices using BrowserStack.
- Sanitized inputs to prevent SQL injection and XSS attacks.
- Stored sensitive API keys securely in `.env` file.

---

## Day 6 of Hackathon: Deployment Preparation and Staging Environment Setup

- Linked GitHub repository to hosting platform (e.g., Vercel).
- Created `.env.local` to securely store sensitive data and API keys.
- Verified the build process completed without errors.
- Ensured all features (product listing, filters, cart operations) were functional.
- Analyzed site speed and responsiveness using Lighthouse.

---

## Conclusion

Through meticulous planning, technical implementation, and thorough testing, the team delivered a marketplace solution that is scalable, secure, and user-friendly. The hackathon demonstrated not only technical skills but also the ability to meet deadlines and deliver a functional product within a limited timeframe.

