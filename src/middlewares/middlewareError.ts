import { NextFunction, Request, Response } from "express";


export function middlewareError(err:Error,request:Request,response:Response,next:NextFunction){
    if (err instanceof Error){
        return response.status(400).send({
            error:err.message
        })
    }
    return response.status(500).send({
        status:"error",
        message:"Internal Server Error"
    })
}