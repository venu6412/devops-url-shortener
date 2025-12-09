**URL Shortener API (Docker + AWS EC2)**

A simple URL Shortener service built with Node.js + Express, containerized using Docker, and deployed on AWS EC2.
Creates short URLs and redirects back to the original address.

🔧 Tech Stack

Node.js / Express

nanoid

Docker

Docker Hub

AWS EC2 (Ubuntu)

📌 Features

Generate short URLs

Redirect short URL → long URL

In-memory storage

Runs in Docker container

Publicly accessible via EC2 IP

🐳 Run with Docker
docker pull venu1866/url-shortener:v2
docker run -p 5000:4000 url-shortener:v2


Test in browser:

http://localhost:5000/


Shorten a URL:

POST http://localhost:5000/shorten
Body: { "longUrl": "https://google.com" }

☁️ Deploy on AWS (Summary)

Launch Ubuntu EC2 instance

Install Docker:

sudo apt update && sudo apt install docker.io -y


Pull and run container:

sudo docker pull venu1866/url-shortener:v2
sudo docker run -d -p 80:4000 --name url-shortener venu1866/url-shortener:v2


Access live app:

http://YOUR_PUBLIC_IP/

🧑‍💻 Author

Venu – DevOps & Cloud Learner
