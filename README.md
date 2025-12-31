# BiteHub – Local Food Lovers Network 🍔

## Live Site
🔗 https://bitehub2.web.app/

---

## About the Project

**BiteHub (Local Food Lovers Network)** is a community-driven MERN stack web application where food lovers can share their experiences with local restaurants, street food, and homemade meals.  
The platform allows users to explore reviews, post ratings with photos, and save favorite food experiences in a secure and user-friendly environment.

---

## Key Features

- 🍔 Add & share food reviews with images and ratings  
- 🏙️ Discover local restaurants, street food, and homemade meals  
- ❤️ Favorite system to save and manage liked reviews  
- 🔐 Secure authentication using Firebase (Login & Register)  
- 🔍 Search and filter reviews by food name, restaurant, or reviewer  
- 📱 Fully responsive design for all devices  

---

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- DaisyUI
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- Firebase Authentication

---

## How to Run the Project Locally

Follow the steps below to run **BiteHub** on your local machine.

---

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm or yarn
- MongoDB (Local or MongoDB Atlas)
- Git

---

### Step 1: Clone the Repositories

```bash
git clone https://github.com/romanakhatun/bitehub-client.git
git clone https://github.com/romanakhatun/bitehub-server.git
```
### Step 2: Install Dependencies

#### Client Side

```bash
cd bitehub-client
npm install
```
#### Server Side

```bash
cd bitehub-server
npm install
```
### Step 3: Environment Variables Setup

Create a `.env` file in both client and server directories.

#### Client `.env`

```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

#### Server `.env`

```bash
PORT=5000
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
FB_SERVICE_KEY=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
SITE_DOMAIN=http://localhost:5173
```

### Step 4: Run the Project

#### Start the Backend Server

```bash
nodemon index.js
```

#### Start the Frontend Client

```bash
npm run dev
```
### Step 5: Open in Browser

```bash
Open your browser and visit:
http://localhost:5173
```
