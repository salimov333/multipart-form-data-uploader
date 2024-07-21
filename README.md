# Multipart Form Data Uploader

This project demonstrates a simple front-end/back-end system for uploading multipart form data containing a user profile, avatar image, and a gallery of images.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Usage](#setup-and-usage)
- [Backend Details](#backend-details)

## Features

- **Profile Form:** Collects user data (name, email, country, bio) and allows uploading of an avatar image and a gallery of up to 20 images.
- **Image Upload:** Handles multiple image uploads and returns data URIs for displaying the uploaded images.
- **Profile Display:** Dynamically renders the user's profile information and uploaded images after submission.

## Technologies

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, Multer
- **Other:** Cors (Cross-Origin Resource Sharing)

## Setup and Usage

1. **Clone the Repository:**
   ```bash
   git clone https://your-repository-url.git
   ```
2. **Install Dependencies:**

```bash
cd project-root
npm install
```

3. **Start the Server:**

```bash
npm start
```

4. **Open in Browser:**
   Open `index.html` in your web browser.

5. **Fill the Form:** Enter your profile details and upload your images.
6. **Submit:** Click "Submit" to send the data to the server.
7. **View Profile:** Your profile and uploaded images will be displayed.

## Backend Details

- **Express Setup:** Initializes the Express server and enables CORS middleware.
- **Multer Setup:** Configures Multer to handle the file uploads for the `avatar` and `gallery` fields.
- **`/profile` Endpoint:**
  - Receives multipart form data.
  - Extracts profile information from `req.body`.
  - Extracts image files from `req.files`.
  - Converts image buffers to data URIs using `bufferToURI`.
  - Sends the profile data (including image URIs) back to the client as JSON.

