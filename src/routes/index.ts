import express, { Request, Response, } from "express"

const Router = express.Router()

Router.get("/", (req: Request, res: Response): void => {
    res.status(200).json({message: "User is Created"})
});

Router.get("/test", (req: Request, res: Response): void =>{ 
    const testobj = {test: "test test", test2: "test2"};
    res.status(200).json(testobj);
});

export default Router;