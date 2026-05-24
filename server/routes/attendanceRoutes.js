import {router} from "express";
import { clockInOut, getAttendance } from "../controllers/attendanceController";



const attendanceRouter = Router();

attendanceRouter.post('/',protect,clockInOut)
attendanceRouter.get('/',protect,getAttendance)

export default attendanceRouter;