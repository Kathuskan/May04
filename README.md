Pocket Manager

Pocket Manager is a simple and user-friendly personal finance tracking web application.
It allows users to manually log transactions, track income, expenses, and savings, and view an interactive dashboard for quick financial insights.

⸻

📌 Features
	•	User Registration with Profile Picture – Create an account and upload your profile picture during signup.
	•	Secure Login – Authentication using stored credentials.
	•	Profile Page – Displays user details along with the profile picture.
	•	Manual Transaction Entry – Add, edit, and delete transactions with categories (Income, Expense, Savings).
	•	Dynamic Dashboard – Displays:
	•	Total Income
	•	Total Expenses
	•	Manual Savings
	•	Net Savings
	•	Recent Transactions
	•	CSV Report Generation – Export all transactions in CSV format.
	•	Responsive UI – Simple, minimal, and user-friendly design.

⸻

🛠 Tech Stack

Frontend
	•	React.js
	•	Tailwind CSS

Backend
	•	Node.js
	•	Express.js
	•	MySQL

Tools
	•	macOS for development
	•	Insomnia for API testing

⸻

📂 Project Structure

PocketManager/
│
├── backend/             # Backend server (Node.js + Express + MySQL)
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── controllers/      # Logic for handling requests
│   └── server.js         # Main backend file
│
├── frontend/            # React.js frontend
│   ├── src/              # Components, Pages, Hooks
│   ├── App.js            # Main app entry
│   └── index.js          # React entry point
│
└── README.md            # Documentation


⸻

⚙️ Installation & Setup

Prerequisites
	•	Node.js (v16+ recommended)
	•	MySQL
	•	npm or yarn

1️⃣ Clone the repository

git clone https://github.com/yourusername/pocket-manager.git
cd pocket-manager

2️⃣ Backend Setup

cd backend
npm install

	•	Create a .env file in the backend folder:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=pocketmanager
PORT=3007

	•	Start the backend server:

npm start

3️⃣ Frontend Setup

cd frontend
npm install
npm start


⸻

📊 Usage
	1.	Register a new account with a profile picture.
	2.	Log in with your credentials.
	3.	Add income, expense, or savings transactions.
	4.	View totals and recent transactions on the dashboard.
	5.	Export transactions as a CSV file.

⸻

🚀 Future Enhancements
	•	Goal tracking and gamification.
	•	Mobile-friendly responsive UI improvements.
	•	Real-time notifications and reminders.
	•	AI-powered spending analysis.
	•	Cloud syncing for multi-device access.

⸻

👨‍💻 Author

Kathuskan Thavarajah
BSc (Hons) in Data Science (Undergraduate) – Sabaragamuwa University of Sri Lanka
