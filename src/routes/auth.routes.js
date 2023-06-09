import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { loginSchema, userSchema, imgSchema } from "../schemas/auth.schemas.js";
import { getUser, login, logout, signUp, updateUserImg } from "../controllers/auth.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(userSchema), signUp);
authRouter.post("/login", validateSchema(loginSchema), login);
authRouter.post("/logout", authValidation, logout);
authRouter.get("/user", authValidation, getUser);
authRouter.put("/updateImage", authValidation, validateSchema(imgSchema), updateUserImg);
export default authRouter;
