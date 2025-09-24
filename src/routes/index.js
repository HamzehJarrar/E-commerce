import globalErrorHandler from "../middlewares/error.middleware.js";
import authRouter from "../modules/auth/auth.router.js";

const init = (express, app) => {
  app.use(express.json());
  app.use("/api/auth" , authRouter);
  app.use(globalErrorHandler);
};
export default init;