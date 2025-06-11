# 🛠️ Home Service App

A cross-platform mobile application built using **React Native** and **Expo**, designed to connect users with trusted home service providers for everyday needs like cleaning, plumbing, electrical work, and more.

---

## 📱 Features

- 🔐 User Authentication (Sign Up / Login)
- 🏠 Home Screen with Trending and Listed Services
- 📄 Service Details with Descriptions and Pricing
- 📅 Booking System with Date and Time Selection
- 💳 Payment Gateway Integration (Razorpay / Stripe)
- ✅ Order Confirmation and Booking Summary
- 🎯 Smooth and User-Friendly UI/UX

---

## 🧰 Tech Stack

| Layer          | Technology                  |
|----------------|-----------------------------|
| Frontend       | React Native + Expo         |
| Navigation     | React Navigation            |
| State Mgmt     | React Hooks / Context API   |
| Payment        | Razorpay / Stripe (Optional)|
| Backend (opt.) | Firebase / Node.js + Express|
| Styling        | Tailwind CSS (NativeWind)   |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/DAV027/GVA-Home_Services.git
cd GVA-Home_Services
```
```Install Dependencies
npm install
npx expo install
```
```Required Packages
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-safe-area-context
npm install react-native-screens react-native-gesture-handler react-native-reanimated
npm install @expo/vector-icons
npm install @react-native-community/datetimepicker
```
```Start the Development Server
npx expo start
```

## 🧪 Testing Features

Register or login as a new user
Select a service from home screen
Fill booking details → Confirm Booking
Mock Payment → Payment success/failure simulation
View previous bookings in History screen

## 📌 Notes

This project uses mock payment for demo/testing purposes.
No real backend is connected yet (can be extended with Firebase/Auth/DB).
Local state management using Context API.









