> ⚠️ **This README file was generated with the help of AI (GitHub Copilot).**

# JDThoughts Blog

A modern, full-stack blogging platform for developers and writers to share stories, poetry, and technical insights. Built with React, Vite, Tailwind CSS, Zustand, and Appwrite.

---

## Features

- 📝 **Write & Share**: Create, edit, and delete blog posts (stories, poetry, tech articles)
- 🔒 **Authentication**: Secure signup, login, and session management via Appwrite
- 🗂️ **Categories**: Browse posts by Stories, Poetry, and Tech
- 🌗 **Dark Mode**: Toggle between light and dark themes (Zustand-powered)
- 🖼️ **File Uploads**: Upload and manage featured images for posts
- ⚡ **Fast & Modern UI**: Built with Vite, React 19, and Tailwind CSS 4
- 🧩 **Component-based**: Modular, reusable React components
- 🛡️ **Error Handling**: Custom 404 page and robust error boundaries
- 📱 **Responsive**: Mobile-friendly, beautiful design

---

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Zustand, Lucide Icons
- **Backend/Services**: Appwrite (Database, Auth, Storage)
- **Routing**: React Router v7
- **Linting**: ESLint (with React Hooks & Vite plugins)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bakshidevs/jdthoughts-blog.git
cd jdthoughts-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (see `.env.example`):

```
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

> You can get these values from your [Appwrite Console](https://appwrite.io/).

### 4. Start the development server

```bash
npm run dev
```

Visit [http://localhost:8888](http://localhost:8888) to view the app.

---

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── App.jsx            # Main app component
│   ├── Layout.jsx         # App layout (Navbar, Footer, Theme)
│   ├── components/        # UI components (Navbar, Footer, etc.)
│   ├── pages/             # Page components (Home, Write, etc.)
│   ├── error/             # Error pages (NotFound)
│   ├── lib/               # Appwrite services (auth, blog, utils)
│   ├── store/             # Zustand stores (auth, blog, theme)
│   ├── conf/              # Appwrite config
│   └── assets/            # Images, icons
├── .env                   # Environment variables
├── package.json           # Project metadata & scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

[MIT](LICENSE)

---

## Credits

- [Appwrite](https://appwrite.io/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Lucide Icons](https://lucide.dev/)

---

## Author

[Bakshi (BakshiDevs)](https://github.com/bakshidevs)

---

## Contact

- Twitter: [@jyotidip90](https://x.com/jyotidip90)
- LinkedIn: [Jyotidip Barman](https://www.linkedin.com/in/jyotidip-barman-bb383a21)
- Email: bakshi@bakshidevs.co

