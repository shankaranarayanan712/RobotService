import { Request, Response } from 'express';
import { moveRobot } from '../services/robo.service';
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

export default { operateRobot };
