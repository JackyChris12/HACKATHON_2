# AgroAI Prompts to GPT

## 1. Overview
1. I want to build an AI-powered website for an agrovet shop. It should:  
   - Help farmers find the right pesticide for a specific pest.  
   - Track and generate reports on sold stock.  
   - Analyze soil samples to suggest suitable crops.  

2. I want this website to function like a full AI assistant for farmers. Users should be able to ask questions and get AI-generated answers with recommendations, treatments, or prevention tips.  

## 2. Frontend
3. Can you help me design a Diagnosis Section? I want it to:  
   - Show thumbnails with images and descriptions.  
   - Let users click a thumbnail to go to a detailed page.  
   - Include a search bar for symptoms or issues.  
   - Separate crops and livestock.  
   - Allow users to upload images of affected crops or animals.  
   - Generate AI responses based on the search or uploaded image.  

4. I also want a Crops page. It should:  
   - Show crop recommendation slides.  
   - Include a seasonal crop calendar.  
   - Give fertilizer and irrigation guides.  
   - Show market trends.  
   - Distinguish between small-scale and large-scale crops.  
   - Give AI-powered crop recommendations based on the season/month.  
   - Display attractive images and full crop descriptions.  

5. I want a Livestock page similar to the Crops page, with AI-powered livestock health recommendations.  

6. Can you help me create an Equipment page? It should:  
   - List farm equipment with images, names, and descriptions.  
   - Allow searching or filtering by type or use.  
   - Show availability if possible.  

7. I want the website design to use farming-themed colors (greens, browns, earthy tones) and include images, videos, and animations. Keep the UI clean and modern.  

## 3. Backend
8. My tech stack should be:  
   - Database: MySQL  
   - Backend: Node.js with Express  
   - Templating: EJS  
   - Frontend: HTML, CSS, JavaScript  
   - Authentication: Bcrypt, Express-session  

9. Can you generate a full folder/file structure for this website project using this tech stack and all features?  

10. Can you write the initial backend setup for Node.js + Express + MySQL + EJS and connect it to the database?  

11. Can you write the front-end template for the Diagnosis page with thumbnails, search bar, and AI response placeholders?  

12. Can you write the Crops page front-end with recommendation slides, seasonal calendar, and fertilizer/irrigation guide?  

13. Can you write the Equipment page front-end with image display, search/filter, and availability?  

## 4. Database / SQL
14. For the database, can you help me design tables and relationships to:  
    - Store crop, livestock, and equipment data.  
    - Store user accounts with hashed passwords and sessions.  
    - Store AI-generated recommendations, diagnosis queries, and results.  
    - Track subscriptions, trial periods, and upgrade payments.  
    - Make sure queries are secure against SQL injection.  

15. Can you write the SQL queries for creating tables for crops, livestock, equipment, users, AI queries, and subscriptions?  

## 5. AI / Backend Logic
16. Can you implement secure session-based authentication with login, registration, and password hashing using Bcrypt?  

17. Can you write the AI-powered backend logic for handling diagnosis queries and returning recommendations?  

18. Can you help me integrate frontend, backend, database, AI, and payment flows so the website is fully functional?  

19. Can you suggest ways to make the website visually appealing with farming-themed colors, animations, and responsive design for mobile and desktop?  

## 6. Subscription & Payments
20. Can you implement the subscription system logic so that trials expire after a set period and users are redirected to upgrade?  

21. Can you integrate Daraja M-Pesa payment flow with the subscription upgrade page?
