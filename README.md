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
## 1 Enter Check-in , Check-out Date & select Room Type to get available room
![image](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/8c3b5363-5e61-4851-9676-b8b25442b381)

## 2 Add Room to Cart through the Modal
![image](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/01bf31f5-d1b2-44c2-8117-6f6692f94663)

## 3 Finally go to Cart Page by clicking on Cart Icon in the top right
![Screenshot 2024-01-27 205640](https://github.com/Chris-Grg/hotel-room-booking-app-aqore/assets/121335744/c1f95cb5-94ae-4d48-bbf8-d2c8a2c8ffeb)

## 4 Proceed to checkout & fin

<hr/>
# API Endpoints (http://localhost:7000/)

# GET
## All Rooms
api/rooms
## Room by roomno
api/rooms/:roomno

# POST
## Create new room
api/rooms

## Find Available Rooms
api/search



