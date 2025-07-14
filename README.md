📌 Project Title: Abilash EG - Portfolio Website
🔧 Project Overview
This is a modern, interactive, and responsive personal portfolio website built using React (Vite), Three.js, and Tailwind CSS. It showcases skills in cloud computing, AI/ML, data analytics, and includes interactive 3D elements. The goal of the portfolio is to present your profile, projects, and contact information in a visually engaging and professional manner.

🧱 Tech Stack
Frontend Framework: React + Vite

3D Graphics: Three.js with @react-three/fiber and @react-three/drei

Styling: Tailwind CSS (utility-first CSS framework)

Email Handling: EmailJS

Hosting: Vercel

Version Control: Git and GitHub

🚀 Features
Fully responsive layout

Interactive 3D astronaut and parallax background

Animated skills and technology stacks

Projects section using mapped data

Contact form integrated with EmailJS

Animated scroll-to-section navigation bar

Hosted with custom domain: https://abilasheg.vercel.app

📁 Folder Structure
php
Copy
Edit
Portfolio-main/
├── src/
│   ├── assets/              # Images, icons, logos, 3D models
│   ├── components/          # Reusable components (Navbar, Card, Globe, Astronaut)
│   ├── sections/            # Page sections (Hero, About, Contact, Projects, Footer, etc.)
│   ├── constants.js         # Project data or reusable constants
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Vite entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/
│   └── favicon.ico
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🛠️ Setup & Installation
Clone the Repository

bash
Copy
Edit
git clone https://github.com/AbilashEG/portfolio-site.git
cd portfolio-site
Install Dependencies

bash
Copy
Edit
npm install
Run the Development Server

bash
Copy
Edit
npm run dev
Visit http://localhost:5173 to view the live app locally.

✉️ EmailJS Integration
Set up an account on EmailJS

Create a service (e.g., Gmail API)

Create an email template with name, email, and message variables

Copy:

Service ID: service_rvpakmh

Template ID: template_js65gcv

Public Key: mjwrLTppWMG32EGZu

Implemented in Contact.jsx with success and error alerts

🌐 Routing (Smooth Scroll)
Each section (About, Work, Contact, etc.) is wrapped in a <section> with an appropriate id.

The navbar uses anchor href="#section-id" to enable scroll-to-section.

Vercel scroll behavior is automatically managed with hash-based navigation.

🌍 Hosting on Vercel (with GitHub Integration)
Push your final project to GitHub:

bash
Copy
Edit
git add .
git commit -m "Final deployment version"
git push origin main
Go to https://vercel.com

Login with GitHub and import the repository.

Use default settings for a React (Vite) app.

Vercel builds and deploys automatically on every push to main.

🪪 Custom Domain (Optional)
Vercel allows you to assign custom domains (free if using .vercel.app)

For .com, .in, etc.:

You can purchase a domain via Namecheap, GoDaddy, or Vercel itself.

Cost: ₹500–₹1500/year (approx.)

Point domain DNS to Vercel from the domain provider dashboard.

🔍 Final Deployment
Live URL: https://abilasheg.vercel.app

Custom favicon was added to give a professional brand identity

All navigation issues, case sensitivity in file names, and deployment errors were resolved.
