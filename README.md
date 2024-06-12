# 🚀 Node.js TypeScript Boilerplate

This is a boilerplate project for building Node.js applications using TypeScript. It includes a basic setup for Express.js, custom logging middleware, and route management.

## 🚀 Getting Started


   ```bash
   git clone https://github.com/dianakuanyshkyzy/backendhw1.git
   npm install
   npm run start:dev
   ```
## Features
- [ ] `GET` /api/events : get list of events
- [ ] `GET` /api/events/:id : get exact event
- [ ] `POST` /api/events : create a new event
- [ ] Registration with indication of the city
- [ ] Login
- [ ] A list of events in the user's city is displayed in `/api/events` for an authorized user

### 📂 Explanation of Structure

- **`src/`**: Source code directory.
  - **`event/`**: Directory for event-related modules and components.
    - **`dtos/`**: Directory for Data Transfer Objects (DTOs).
      - **`CreateEvent.dto.ts`**: DTO for event creation.
    - **`types/`**: Directory for TypeScript types.
      - **`response.ts`**: Type definitions for API responses.
      - **`event-controller.ts`**: Type definitions for event controller.
      - **`event-router.ts`**: Type definitions for event router.
      - **`event-service.ts`**: Type definitions for event service.
  - **`auth/`**: Directory for authentication-related modules and components.
    - **`dtos/`**: Directory for Data Transfer Objects (DTOs).
      - **`Login.dto.ts`**: DTO for user login.
      - **`Register.dto.ts`**: DTO for user registration.
    - **`types/`**: Directory for TypeScript types.
      - **`auth-controller.ts`**: Type definitions for auth controller.
      - **`auth-router.ts`**: Type definitions for auth router.
      - **`auth-service.ts`**: Type definitions for auth service.
  - **`middlewares/`**: Directory for middleware functions.
    - **`auth.middleware.ts`**: Middleware for user authentication.
  - **`db.ts`**: Directory for database connection.
  - **`global-router.ts`**: File for global route definitions.
  - **`index.ts`**: Main entry point of the application.
  - **`logger.ts`**: Custom logging middleware.

## 📝 Additional Information

This setup provides a structured way to build a Node.js application using TypeScript, with clear separation of concerns and organized testing. It includes everything you need to get started quickly and scale your application efficiently.

