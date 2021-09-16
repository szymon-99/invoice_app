# Invoice App

[LIVE DEMO OF THIS APP HERE](https://invoice-app-demo.netlify.app/#/)

This is a fullstack app where user can create, update and delete invoices. 

### Functionallities

User have two options of saving invoice:
- draft, where partial informations could be provided and updated later.
- save, where user can't send invoice without all of the informations, sending invoice with all fields filled will change it's status to pending.

User can change invoice's status to paid only when it's status is pending.

User can toggle between light and dark theme which is then stored in local storage.

### Styling

To style this application i used [tailwind](https://tailwindcss.com/).

### Server

All of the data is stored in [modngoDB](https://www.mongodb.com/) database. 
To communicate with database i created basic [express](http://expressjs.com/) server.
Server is hosted on heroku.

#### Tech stack

- express
- postman
- react
- framer-motion
- tailwindcss
- formik
- yup
- axios
- redux
- react-router

