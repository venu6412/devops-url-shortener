# 🚀 URL Shortener API (Docker + AWS EC2)

A simple **URL Shortener service** built using **Node.js + Express**, fully containerized with **Docker**, and deployed on **AWS EC2 (Ubuntu)**.
It generates short URLs and redirects users to the original link.

---

## 🔧 Tech Stack

* **Node.js / Express**
* **nanoid** (short ID generator)
* **Docker**
* **Docker Hub**
* **AWS EC2 (Ubuntu 24.04)**

---

## 📌 Features

* Shorten any URL
* Redirect short URL → original URL
* Simple in-memory storage
* Runs inside a Docker container
* Live on AWS EC2 (public IP)

---

## 🐳 Run Locally with Docker

```bash
docker pull venu1866/url-shortener:v2
docker run -p 5000:4000 --name url-shortener venu1866/url-shortener:v2
```

Test in browser:

```
http://localhost:5000/
```

Create a short URL:

```
POST http://localhost:5000/shorten
Body: { "longUrl": "https://google.com" }
```

---

## ☁️ AWS Deployment (Summary)

### 1️⃣ Launch EC2 Instance

* Ubuntu 24.04
* Open ports **22 (SSH)** and **80 (HTTP)**
* Download the `.pem` key

---

### 2️⃣ SSH Into Server

```bash
ssh -i "aws-key.pem" ubuntu@YOUR_PUBLIC_IP
```

---

### 3️⃣ Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
```

---

### 4️⃣ Pull & Run the Container

```bash
sudo docker pull venu1866/url-shortener:v2
sudo docker run -d -p 80:4000 --name url-shortener venu1866/url-shortener:v2
```

---

### 5️⃣ Access Live App

```
http://YOUR_PUBLIC_IP/
```

---

## ✨ API Example

### POST /shorten

**Request:**

```json
{
  "longUrl": "https://google.com"
}
```

**Response:**

```json
{
  "success": true,
  "id": "a1B9xyZ",
  "shortUrl": "http://YOUR_PUBLIC_IP/a1B9xyZ"
}
```

---

## 👨‍💻 Author

**Venu**
DevOps | Docker | AWS | Node.js

✅ A **LinkedIn post for this project**

Just tell me: **"Bro create that too."**
