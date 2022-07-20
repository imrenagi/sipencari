# Search Engine Buatan Anak Bangsa

I'm humbled that I started this repository which I believe will become the biggest search engine that will replace google.com.

# How run this project

```bash
docker build -t sipencari:v1 .
docker run -d -p 80:80 sipencari:v1
```
Run with `Docker Compose`
```bash
docker-compose up -d
#or
docker compose up -d
```