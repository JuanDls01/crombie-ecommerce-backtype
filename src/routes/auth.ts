import { Router } from "express";
import loginPanel from "src/controllers/authentication/loginPanel";

const authenticationRoute = Router();

authenticationRoute.post("/login-panel", loginPanel);
