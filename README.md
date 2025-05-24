ChatWeb - Firebase Chat Application
A modern, real-time chat application built with Next.js, Firebase, and Tailwind CSS. Features Google authentication, email/password authentication, and real-time messaging capabilities.

🚀 Features
Multiple Authentication Methods

Google OAuth sign-in
Email and password authentication
Secure user registration and login
Real-time Messaging

Instant message delivery using Firebase Firestore
Live message updates without page refresh
Message timestamps and user information
Modern UI/UX

Responsive design for desktop and mobile
Clean, intuitive chat interface
User avatars and profile information
Loading states and error handling
Security

Firebase Authentication integration
Secure message storage in Firestore
Protected routes and user sessions
🛠️ Tech Stack
Frontend: Next.js 14 (App Router), React, TypeScript
Styling: Tailwind CSS, shadcn/ui components
Backend: Firebase (Authentication, Firestore)
Icons: Lucide React
Deployment: Vercel (recommended)
📋 Prerequisites
Before running this application, make sure you have:

Node.js 18+ installed
A Firebase project set up
Firebase Authentication and Firestore enabled
🔧 Installation
Clone or download the project

# If using git
git clone <repository-url>
cd firebase-chat-app
Install dependencies

npm install
Install Firebase

npm install firebase
Configure Firebase

Update lib/firebase.ts with your Firebase configuration
The current config is already set up for the provided Firebase project
⚙️ Firebase Setup
1. Authentication Setup
Go to Firebase Console
Select your project (chat-f288a)
Navigate to Authentication → Sign-in method
Enable the following providers:
Google: Configure OAuth consent screen
Email/Password: Enable email/password authentication
2. Authorized Domains
Add your deployment domains to Firebase:

Go to Authentication → Settings → Authorized domains
Add domains where your app will be hosted:
localhost (for development)
your-domain.com (for production)
v0.dev (if testing on v0)
3. Firestore Database
Go to Firestore Database
Create a database in production mode
Set up security rules (see Security Rules section below)
4. Security Rules
Update your Firestore security rules:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Messages collection - authenticated users can read and write
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }
  }
}
🚀 Running the Application
Development mode

npm run dev
Build for production

npm run build
npm start
Open your browser Navigate to http://localhost:3000

📱 Usage
Authentication
Email/Password:

Click "Don't have an account? Sign up" to create a new account
Enter display name, email, and password
Or sign in with existing credentials
Google Sign-in:

Click "Continue with Google"
Complete OAuth flow
Note: Requires domain authorization in Firebase
Chatting
Once authenticated, you'll see the chat interface
Type messages in the input field at the bottom
Press Enter or click the send button
Messages appear in real-time for all users
Your messages appear on the right, others on the left
🔒 Security Considerations
Environment Variables: Keep Firebase config secure in production
Firestore Rules: Ensure proper security rules are configured
Domain Authorization: Only add trusted domains to Firebase
User Input: Messages are stored as-is; consider adding content moderation
🐛 Troubleshooting
Common Issues
"auth/unauthorized-domain" Error

Add your domain to Firebase authorized domains
For local development, ensure localhost is authorized
Messages not appearing

Check Firestore security rules
Verify user is authenticated
Check browser console for errors
Google Sign-in not working

Verify OAuth configuration in Firebase
Check authorized domains
Ensure proper redirect URIs
Timestamp errors

The app handles null timestamps gracefully
Messages show "Sending..." until timestamp is available
📁 Project Structure
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── auth/
│   │   ├── email-auth-form.tsx
│   │   └── login-form.tsx
│   ├── chat/
│   │   ├── chat-header.tsx
│   │   ├── chat-room.tsx
│   │   ├── message-input.tsx
│   │   └── message-list.tsx
│   └── ui/ (shadcn components)
├── hooks/
│   └── use-auth.ts
├── lib/
│   ├── firebase.ts
│   └── utils.ts
└── README.md
🔄 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run start - Start production server
npm run lint - Run ESLint
🌐 Deployment
Vercel (Recommended)
Push your code to GitHub
Connect your repository to Vercel
Add your domain to Firebase authorized domains
Deploy!
Other Platforms
Build the application: npm run build
Deploy the .next folder to your hosting provider
Ensure your domain is added to Firebase authorized domains
🤝 Contributing
Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request
