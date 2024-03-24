Live Demo: https://hotelroomfinder.netlify.app/
## Brief Intro
This is a MERN Stack App. i.e. 
- Frontend: React
- Backend: Express, Node
- Database: MongoDB

Features: 
 1) Search Rooms based on Check-in, Check-out dates and room type
 2) Add Each rooms to Cart through their respective modals (by clicking on book now on their cards)
 3) Cart Page where all the cart items, their total and if applicable discount is subtracted and total is shown
 4) Further after entering payment details the room is booked.


# Running Instructions

# STEP 1
# Start Backend
cd backend

## Install dependencies
npm install

## Run node app
npm start

<hr/>

# Step 2
# Frontend

cd frontend
## Install dependencies
npm install
## Run vite + react app
npm run dev

# Steps
## 1 Enter Check-in , Check-out Date, select Room Type and click on search button to get available room
![image](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/8c3b5363-5e61-4851-9676-b8b25442b381)

## 2 Add Room to Cart through the Modal
![image](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/01bf31f5-d1b2-44c2-8117-6f6692f94663)

## 3 Finally go to Cart Page by clicking on Cart Icon in the top right
![Screenshot 2024-01-27 205640](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/c1f95cb5-94ae-4d48-bbf8-d2c8a2c8ffeb)

## 4 Proceed to checkout & fin

<hr/>

# API Endpoints (http://localhost:7000/)

# METHOD GET
## Get All Rooms
api/rooms
## Room by roomno
api/rooms/:roomno
## Get all bookings
api/bookings

# METHOD POST
## Create new room
api/rooms

## Find Available Rooms
api/search

## Add new booking
api/bookings

<hr/>

# Database Schema
![image](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/845c754c-2a60-465f-829a-fc916aebcfcf)

# Working Diagram
![image](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/01b4b38d-654b-4240-9395-82d99af23d33)
