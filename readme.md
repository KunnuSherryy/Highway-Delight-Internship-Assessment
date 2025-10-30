# 🧭 Experience Booking Platform

<div align="center">

[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

[Live Demo](https://highway-delight-internship-git-20ee9b-kunals-projects-ee673d20.vercel.app/) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Overview

A complete booking experience platform where users can browse experiences, view details, select time slots, apply promo codes, and confirm their bookings. This project showcases rapid full-stack development with modern technologies and clean architecture.

### ✨ Key Highlights

- 🎯 Full-stack implementation from scratch
- 🛡️ Prevents double bookings
- 📱 Fully responsive design
- 🚀 Production-ready deployment

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🔍 **Browse Experiences** | View all available experiences with beautiful cards |
| 📅 **Time Slot Selection** | Choose from available booking slots |
| 🎟️ **Promo Codes** | Apply discount codes (`SAVE10`, `FLAT100`) |
| ✅ **Smart Booking** | Prevents conflicts and double bookings |
| 💾 **Persistent Storage** | All bookings stored in MongoDB |
| 📱 **Responsive Design** | Works seamlessly on all devices |

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM library

### Deployment
- **Vercel** - Hosting platform

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas account)
- Git

### Installation

1. **Clone the repository**
   ```bash
   https://github.com/KunnuSherryy/Highway-Delight-Internship-Assessment.git
   cd Highway-Delight-Internship-Assessment.git
   ```

2. **Backend Setup** - refer to backend repo
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Configuration

Create a `.env` file in the **backend** folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Running the Application

**Start the backend server:**
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5000`

**Start the frontend:**
```bash
cd frontend
npm start
```
Frontend runs on `http://localhost:3000`

---

## 📡 API Documentation

### Experiences

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/experiences` | Retrieve all experiences |
| `GET` | `/experiences/:id` | Get specific experience details |

### Bookings

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/bookings` | Create a new booking |

**Request Body:**
```json
{
  "experienceId": "string",
  "slot": "string",
  "customerName": "string",
  "customerEmail": "string",
  "promoCode": "string (optional)"
}
```

### Promo Codes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/promo/validate` | Validate promo code |

**Available Promo Codes:**
- `SAVE10` - 10% discount
- `FLAT100` - ₹100 flat discount

---

## 🌐 Deployment

This project is configured for automatic deployment on **Vercel**:

1. Push to the `main` branch
2. Vercel automatically rebuilds and deploys
3. Both frontend and backend are deployed separately

### Deployment URLs
- Frontend: `your-frontend-url.vercel.app`
- Backend: `your-backend-url.vercel.app`

---

## 📂 Project Structure

```
experience-booking-platform/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   └── server.js        # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── App.js       # Main app component
│   └── public/
│
└── README.md
```

---

## 💡 Lessons Learned

- ⏱️ **Rapid Development**: Demonstrated ability to build full-stack applications under time constraints
- 🤖 **AI-Assisted Development**: Leveraged AI tools for optimization and problem-solving
- 🏗️ **Clean Architecture**: Maintained code quality despite time pressure
- 🚀 **DevOps**: Implemented CI/CD with Vercel for seamless deployment

---

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment gateway integration
- [ ] Email notifications for bookings
- [ ] Admin dashboard for experience management
- [ ] Review and rating system
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Kunal Sharma**

B.Tech in Computer Science | Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://linkedin.com/in/kunal-sharma-8b9787334)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/kunnusherry)

---

<div align="center">

⭐ Star this repo if you found it helpful!

</div>
