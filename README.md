# Contact Form Submission with Express and Firebase

This project demonstrates a simple contact form submission using Express.js and Firebase Firestore.

## Prerequisites

- Node.js and npm installed
- Firebase project setup

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-repo/contact-form.git
cd contact-form
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of the project and add your Firebase configuration details:

```
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
```

### Start the server:

```bash
    npm run start
```

## testing end point

- POST

```bash
http://localhost:3000/api/submit/
```

- Body

```json
{
  "name": "postmane",
  "email": "emaiwl@email.com",
  "message": "user message",
  "address": "tesdres"
}
```

- Response

```json
{
  "message": "Submission successful"
}
```

- Name, Email, Message are required if missing Response will be

```json
{
  "message": "Name, email, and message are required fields."
}
```

- If re-submitted using same email

```json
{
  "message": "Form already submitted for this email"
}
```
