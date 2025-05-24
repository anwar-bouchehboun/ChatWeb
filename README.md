# ChatWeb - Firebase Chat Application

A modern, real-time chat application built with **Next.js**, **Firebase**, and **Tailwind CSS**. It features Google and email/password authentication, real-time messaging, and a sleek, responsive UI.

---

## 🚀 Features

### 🔐 Authentication
- Google OAuth sign-in
- Email and password authentication
- Secure user registration and login

### 💬 Real-time Messaging
- Instant message delivery via Firebase Firestore
- Live updates without page refresh
- Timestamps and user identification for each message

### 🎨 Modern UI/UX
- Responsive design for desktop and mobile
- Clean and intuitive chat interface
- User avatars and profile details
- Loading states and error handling

### 🔒 Security
- Firebase Authentication integration
- Protected routes and user sessions
- Secure Firestore data access

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, `shadcn/ui` components
- **Backend**: Firebase (Authentication, Firestore)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

---

## 📋 Prerequisites

Ensure the following before setup:
- Node.js v18+
- A configured Firebase project
- Firebase Authentication & Firestore enabled

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd firebase-chat-app
```

### 2. Install Dependencies

```bash
npm install
npm install firebase
```

### 3. Configure Firebase

Update `lib/firebase.ts` with your Firebase project configuration. The current config is pre-filled for the default Firebase setup.

---

## ⚙️ Firebase Setup

### 1. Authentication

- Go to Firebase Console > Authentication > Sign-in method
- Enable:
  - Google: Configure OAuth consent screen
  - Email/Password

### 2. Authorized Domains

Add the following to Authentication > Settings > Authorized domains:
- `localhost` (for development)
- Your production domain (e.g., `your-domain.com`)
- `v0.dev` (if using)

### 3. Firestore Database

- Create a Firestore database in **production mode**
- Apply the following **security rules**:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🚀 Running the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

Navigate to: [http://localhost:3000](http://localhost:3000)

---

## 📱 Usage

### Authentication

#### Email/Password
- Click “Don't have an account? Sign up”
- Enter display name, email, and password
- Or log in with existing credentials

#### Google Sign-in
- Click “Continue with Google”
- Complete the OAuth flow

### Chatting
- Once signed in, access the chat interface
- Type in the input field and press Enter or click send
- Messages are synced in real-time

---

## 🔒 Security Considerations

- **Environment Variables**: Protect Firebase config in production
- **Firestore Rules**: Regularly audit for safety
- **Domain Authorization**: Whitelist only trusted domains
- **User Input**: Consider moderation or sanitization

---

## 🐛 Troubleshooting

### "auth/unauthorized-domain" Error
- Ensure your domain is listed in Firebase authorized domains

### Messages Not Appearing
- Confirm Firestore rules and authentication
- Check browser console for errors

### Google Sign-in Issues
- Check OAuth and domain settings in Firebase

### Timestamp Delays
- "Sending..." status shown until server timestamp resolves

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── auth/
│   ├── chat/
│   └── ui/
├── hooks/
│   └── use-auth.ts
├── lib/
│   ├── firebase.ts
│   └── utils.ts
└── README.md
```

---

## 🔄 Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Run production server
- `npm run lint` – Lint the codebase

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect your repo on [vercel.com](https://vercel.com)
3. Add authorized domains in Firebase
4. Deploy!

### Other Platforms

- Run: `npm run build`
- Deploy `.next` folder to your hosting provider
- Ensure domain is registered in Firebase

---

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch
3. Make changes and test thoroughly
4. Submit a pull request

---

## 📜 License

[MIT License](LICENSE)

---
