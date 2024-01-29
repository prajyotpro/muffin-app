import { Response } from "express";
import { HttpStatus } from "./httpStatus";

export const sendErrorResponse = (
    res: Response,
    status: HttpStatus,
    // Replace message's type to be only "string[]".
    // Let's standardize all the existing APIs to support sending the list of errors.
    message: string | string[]
) => {
    return res.status(status).json({ message });
};

export const sendSuccessResponse = <T>(
    res: Response,
    status: HttpStatus,
    data: T
) => {
    return res.status(status).json(data);
};
