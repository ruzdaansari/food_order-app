# 🍽️ Food Order App

## 📌 Overview

The **Food Order App** is a simple and efficient online food ordering system where users can browse available items, add them to their cart, and proceed to checkout. The app provides an interactive and seamless user experience.

## 🚀 Features

- 🛒 **Cart Management** – Add, remove, and clear items from the cart dynamically.
- 🔄 **User Progress Handling** – Tracks user progress between cart and checkout views.
- 💰 **Price Calculation** – Automatically calculates total prices based on selected items.
- 🛋 **Order Submission** – Users can fill in their details and place an order.
- ✅ **Success Confirmation** – A confirmation message is displayed after a successful order submission.

## 🏭️ Project Structure

The project uses **React Context API** to manage state across components. Here are the key files:

### 1️⃣ `CartContext.jsx`

- Manages the cart state using `useReducer`.
- Provides functions to:
  - Add items to the cart.
  - Remove items from the cart.
  - Clear the cart after checkout.

### 2️⃣ `UserProgressContext.jsx`

- Tracks user progress through different views (`cart` and `checkout`).
- Provides functions to:
  - Show and hide the cart.
  - Show and hide the checkout screen.

### 3️⃣ `Cart.jsx`

- Displays the shopping cart with a list of selected items.
- Users can increase/decrease item quantity.
- Shows the total price of items.
- Includes a "Go to Checkout" button for order completion.

### 4️⃣ `Checkout.jsx`

- Displays a form for the user to enter their details.
- Sends order details to the backend (`http://localhost:3000/orders`).
- Shows a success message upon successful order placement.

## 🛠️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ruzdaansari/food_order-app.git
cd food-order-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm start
```

### 4️⃣ Run the backend

Navigate to the backend folder and run:

```bash
backend>npm start
```

To run on localhost, use:

```bash
npm run dev
```

Ensure the backend is running at `http://localhost:3000/orders` for order submission.

## 📌 Technologies Used

- **React** – Frontend framework
- **Context API** – State management
- **Hooks** – `useReducer`, `useContext`, `useState`
- **CSS** – UI styling
- **Fetch API** – Sending HTTP requests

## 💎 Contact

For any issues or suggestions, feel free to reach out!

