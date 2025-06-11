# Deploying to a Server

- This guide will help you deploy your application to a server.

## Prerequisites

- Docker installed on your server.
- Docker Compose installed on your server.
- A server with at least 2 GB of RAM.
- A server with at least 10 GB of storage space.

## Steps

1. Clone the repository to your server.
2. Open the `docker-compose.yml` file and replace the `MONGODB_URI` environment variable with your MongoDB connection string.
3. Run the following command to build the Docker image:

```
docker-compose build
```

4. Run the following command to start the Docker containers:

```
docker-compose up -d
```

5. Once the containers are running, you can access your application by visiting `http://your-server-ip:3000` in your web browser.
6. To stop the containers, run the following command:

```
docker-compose down
```

7. To remove the containers and the image, run the following command:

```
docker-compose down --volumes
```

8. To remove the containers and the image without removing the volumes, run the following command:

```
docker-compose down --rmi all --volumes
```

9. To remove the containers and the image without removing the volumes and the network, run the following command:

```
docker-compose down --rmi all --volumes --remove-orphans
```

10. To remove the containers and the image without removing the volumes and the network and the orphaned containers, run the following command:

```
docker-compose down --rmi all --volumes --remove-orphans --rmi all --volumes --remove-orphans
```
