import globalErrorHandler from "../middlewares/error.middleware.js";
import authRouter from "../modules/auth/auth.router.js";
import categoryRouter from "../modules/category/category.router.js";

const init = (express, app) => {
  app.use(express.json());
  app.use("/uploads", express.static("uploads"));
  app.use("/api/auth", authRouter);
  app.use("/api/categories", categoryRouter);
  app.use(globalErrorHandler);
};
export default init;
