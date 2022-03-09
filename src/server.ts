import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";
import "./database";
import { router } from "./router";

const app = express();

app.use(express.json())

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message,
            status: false
        });
    }

    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    })
})

app.listen(3031, ()=> console.log("Server is runing.... NLW"));