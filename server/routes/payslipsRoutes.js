import {Router} from "express";;
import { protect,protectAdmin } from "../middleware/auth.js";
import { createPayslip, getPayslip, getsPayslipById } from "../controllers/payslipControllers.js";


const payslipRouter = Router();

payslipRouter.post("/",protect,protectAdmin,createPayslip)
payslipRouter.get("/" ,protect,getPayslip)
payslipRouter.get("/:id",protect , getsPayslipById)

export default payslipRouter;