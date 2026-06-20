# FormForge 🚀

FormForge is a modern, powerful, and dynamic form-building application designed to let you effortlessly create surveys, quizzes, assessments, and data collection forms. Built with the latest Next.js 15 App Router and React 19, FormForge boasts a sleek, highly interactive, and fully responsive user interface.

## ✨ Key Features

- **Drag-and-Drop Form Builder**: Visually construct your forms with a seamless drag-and-drop interface. Support for Short Text, Long Text, Multiple Choice, Checkboxes, Dropdowns, Date, File Uploads, Ratings, and more!
- **AI Form Generator**: Don't want to build from scratch? Give a prompt to the AI, and FormForge will automatically generate a tailored form structure for you.
- **Advanced Quizzes & Assessments**: Create scored quizzes with customizable passing thresholds, automatic grading, and time limits.
- **Robust Analytics & Insights**: Track form performance with beautiful area and bar charts, visual statistics, response leaderboards, and an interactive Date Range filter.
- **PDF Export**: Generate high-resolution, branded PDF reports of your Form Analytics or Quiz Results with a single click.
- **Shareable Public Links**: Effortlessly share your forms with respondents via auto-generated secure public links.
- **Authentication**: Secure user accounts managed via NextAuth and MongoDB.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons
- **Database**: MongoDB (Mongoose)
- **Authentication**: NextAuth.js (v5)
- **Drag & Drop**: `@hello-pangea/dnd`
- **Charts**: Recharts
- **PDF Generation**: `jspdf` & `html-to-image`

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
Create a `.env.local` file in the root directory and add the following variables:
```env
# MongoDB Connection String (Required)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/formforge

# NextAuth Configuration (Required)
# You can generate a secret by running: openssl rand -base64 32
NEXTAUTH_SECRET=your-super-secret-key
NEXTAUTH_URL=http://localhost:3000

# Groq API Key for AI Form Generation (Optional but recommended)
GROQ_API_KEY=your-groq-api-key
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action!

---

## 🚀 Deploying to Vercel

FormForge is optimized for seamless deployment to Vercel.

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository.
2. **Import to Vercel**: Log into [Vercel](https://vercel.com/new), click **Add New -> Project**, and import your GitHub repository.
3. **Configure Environment Variables**: Before clicking Deploy, copy the variables from your `.env.local` into the Vercel Environment Variables section.
    - Set `NEXTAUTH_URL` to your production URL (e.g., `https://formforge-app.vercel.app`).
4. **Deploy!**: Vercel will automatically build and deploy your application.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
