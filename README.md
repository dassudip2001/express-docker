# Docker Express TypeScript API

A modern, secure, and scalable REST API built with Express.js, TypeScript, and Docker. This project provides a robust foundation for building production-ready APIs with best practices and security measures in place.

## Features

- 🚀 **TypeScript** - Modern JavaScript with static typing
- 🔒 **Security** - Built-in security features with helmet, rate limiting, and JWT authentication
- 🐳 **Docker** - Containerized application with Docker and Docker Compose
- 📦 **MongoDB** - NoSQL database integration with Mongoose
- 🧪 **Testing** - Jest testing framework setup
- 📝 **Code Quality** - ESLint for code linting and formatting
- 🔄 **Hot Reload** - Development environment with hot reloading

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- pnpm (v10.4.1 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd docker-express
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/myapp
   JWT_SECRET=your-super-secret-jwt-key
   PORT=3000
   ```

## Development

Start the development server:
```bash
pnpm dev
```

The server will start with hot reloading enabled at `http://localhost:3000`.

## Building and Running with Docker

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. To run in detached mode:
   ```bash
   docker-compose up -d
   ```

3. To stop the containers:
   ```bash
   docker-compose down
   ```

## Available Scripts

- `pnpm build` - Build the TypeScript project
- `pnpm start` - Start the production server
- `pnpm dev` - Start the development server with hot reloading
- `pnpm lint` - Run ESLint to check code quality
- `pnpm test` - Run Jest tests

## Project Structure

```
├── src/              # Source files
├── dist/             # Compiled JavaScript files
├── Dockerfile        # Docker configuration
├── docker-compose.yml # Docker Compose configuration
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── .env             # Environment variables (create this file)
```

## Dependencies

### Main Dependencies
- express: Web framework
- mongoose: MongoDB ODM
- cors: Cross-Origin Resource Sharing
- helmet: Security headers
- express-rate-limit: Rate limiting
- joi: Request validation
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- compression: Response compression
- morgan: HTTP request logger
- dotenv: Environment variables

### Development Dependencies
- TypeScript and related type definitions
- ESLint and related plugins
- Jest for testing
- ts-node-dev for development

## Security Features

- Helmet for secure HTTP headers
- Rate limiting to prevent abuse
- CORS configuration
- JWT authentication
- Password hashing with bcrypt
- Request validation with Joi

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 