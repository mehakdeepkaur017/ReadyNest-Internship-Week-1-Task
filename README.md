<div align="center">
  <h1>🚀 FormForge</h1>
  <p><strong>A Next-Generation Dynamic Form & Assessment Builder</strong></p>
  <p>
    Built with Next.js App Router, React 19, and Tailwind CSS. FormForge handles everything from simple surveys to complex, algorithmically generated examinations.
  </p>
</div>

---

## ✨ Why FormForge?

FormForge isn't just another form builder. It’s an advanced, full-stack platform designed for performance, security, and exceptional user experience. Whether you're an educator building timed quizzes or an HR professional collecting applications, FormForge adapts to your needs.

### 🔥 Core Features

- **Algorithmic Smart Assessments:** Instantly generate complete quizzes from a localized, high-performance question bank engine. Features auto-grading, customizable pass/fail thresholds, and a real-time respondent leaderboard.
- **Advanced Drag & Drop Builder:** Visually construct forms with a seamless interface powered by `dnd-kit`. Supports Short/Long Text, Multiple Choice, Checkboxes, Dropdowns, Date, File Uploads, Ratings, and more.
- **Pre-Built Templates:** Jumpstart your work with professionally designed industry templates (HR, Healthcare, Real Estate, IT Support, etc.).
- **Dynamic Candidate Configuration:** Granular control over respondent data collection (Name, Email, Roll Number, Custom Fields) with instant, auto-saving toggle configurations.
- **Deep Analytics & Insights:** Track form performance with beautiful, interactive Area, Bar, and Pie charts (powered by Recharts), plus a comprehensive Question-by-Question breakdown.
- **Comprehensive Data Export:** Generate high-resolution, branded PDF reports of your analytics, or execute a one-click export of raw candidate responses to CSV/Excel formats.
- **Secure Authentication & Active Session Management:** Robust user accounts secured via Auth.js (NextAuth), featuring active device session tracking. Monitor your logins and remotely revoke unauthorized sessions.
- **Frictionless Distribution:** Effortlessly share your forms with respondents via auto-generated secure public links and instantly downloadable QR codes.

## 🛠️ Tech Stack

FormForge leverages a modern, robust, and highly scalable technology stack:

- **Core Framework**: Next.js 16 (App Router), React 19, TypeScript
- **UI & Styling**: Tailwind CSS, Framer Motion, Lucide Icons
- **Database & ORM**: MongoDB, Mongoose
- **Authentication & Security**: NextAuth.js (Auth.js v5), bcryptjs
- **Drag & Drop**: `@dnd-kit/core`
- **Data Visualization**: Recharts
- **Export Utilities**: `jspdf`, `html-to-image`, `xlsx`, `csv`
- **Emails**: Nodemailer

---

## 💻 Getting Started (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/formforge.git
cd formforge
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add the following required variables:
```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/formforge

# NextAuth Configuration
# Generate a secret by running: openssl rand -base64 32
AUTH_SECRET=your-super-secret-key
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email Config (Optional, for forgotten password functionality)
EMAIL_SERVER_USER=your_email
EMAIL_SERVER_PASSWORD=your_password
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action!


---

## 🤝 Contributing
Contributions, issues, and feature requests are heartily welcome! Feel free to check the issues page or open a Pull Request.
