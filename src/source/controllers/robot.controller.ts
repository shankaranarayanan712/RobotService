import { Request, Response } from 'express';
import { moveRobot, getRobotLatestLocation } from '../services/robot.service';
import logging from '../config/logging';
const operateRobot = async (req: Request, res: Response) => {
    try {
        const reqBody = req.body;
        const response = await moveRobot(reqBody.direction, reqBody.step);
        res.send(response);
    } catch (err: any) {
        logging.error('operateRobot', err);
    }
};

const getRobotLocation = async (req: Request, res: Response) => {
    try {
        const response = await getRobotLatestLocation();
        res.send(response);
    } catch (err: any) {
        logging.error('operateRobot', err);
    }
};

export default { operateRobot, getRobotLocation };
