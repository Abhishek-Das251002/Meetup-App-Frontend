# MeetUp App
A full-stack Event Management Web App built using React, Node.js, Express, and MongoDB, featuring dynamic event listings, search, and type-based filtering.<br>
Implements REST APIs, responsive UI, and component-based architecture to manage and display detailed event data efficiently.

---
## Demo Link
[Live Demo](https://meetup-app-frontend-snowy.vercel.app/)

---
## Quick Start
```
git clone https://github.com/Abhishek-Das251002/Meetup-App-Frontend.git
cd Meetup-App-Frontend
npm install
npm run dev
```

---
## Technologies
**Frontend Technologies**

- React.js
- React Router DOM
- JavaScript (ES6+)
- Bootstrap 5
- HTML5 & CSS3

**Backend Technologies**

- Node.js
- Express.js
- RESTful APIs

**Database**

- MongoDB

---
## Demo Video
Watch a walkthrough (5–7 minutes) of all major features of this app: [Video Link]()

---
## Features
**Event Listing**

- Displays all events with key details (title, date, type)
- Real-time search by event title and tags
- Filter events by type (Online, Offline, Both)

**Event Details**

- Dedicated page for each event
- View complete event information including topic, description, timings, speakers, pricing, address, and tags

**UI & Layout**

- Consistent, responsive layout across all pages
- Clean, component-based UI for better usability and scalability

---
## API Reference

### **GET /events**

Fetch all available events.
Returns a list of all events stored in the database.

Sample Response:
```
[{ _id, title, date, ...}, ...]
```
### **GET /events/:id**

Fetch details of a single event by ID.
Returns complete details for a specific event.

Sample Response:
```
{ _id, title, date, ...}
```

---
## Contact
For bugs or feature requests, please reach out to abhishekgautam1966@gmail.com
