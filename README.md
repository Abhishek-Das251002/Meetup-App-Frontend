# MeetUp App
A full-stack Event Management Web App built using React, Node.js, Express, and MongoDB, featuring dynamic event listings, search, and type-based filtering.<br>
Implements REST APIs, responsive UI, and component-based architecture to manage and display detailed event data efficiently.

---
## Demo Link
[Live Demo](https://meetup-app-frontend-snowy.vercel.app/
)

---
## Quick Start
```
git clone https://github.com/Abhishek-Das251002/Meetup-App-Frontend.git
cd Meetup-App-Frontend
npm install
npm run dev
```
---
## Environment Setup
Create a ```.env``` file in the backend root directory and add the following environment variables:

```
PORT = 3000
MONGODB_URI=your_mongodb_atlas_connection_string
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
Watch a walkthrough (5–7 minutes) of all major features of this app: [Video Link](https://drive.google.com/file/d/1bKuYRrAjRRdaGLEg7gMWZnIkobiDwRVm/view?usp=sharing)

---
## Features
**Event Listing**

- View all events with key details such as title, date, and type
- Search events in real time by title and tags
- Filter events by type including online, offline, or both

**Event Details**

- View a dedicated details page for each event
- Access complete event information including topic, description, timings, speakers, pricing, address, and tags

**UI & Layout**

- Experience a consistent and responsive layout across all pages
- Use a clean, component-based UI for improved usability and scalability

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
