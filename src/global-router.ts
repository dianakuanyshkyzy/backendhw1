import { Router } from 'express';
import authRouter from './auth/auth-router';
import userRouter from './user/user-router';
// other routers can be imported here

const globalRouter = Router();

// Use the userRouter for user-related routes
globalRouter.use(userRouter);
globalRouter.use(authRouter);

// other routers can be added here

export default globalRouter;
