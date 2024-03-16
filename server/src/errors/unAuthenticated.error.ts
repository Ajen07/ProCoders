import { StatusCodes } from "http-status-codes";
class UnAuthenticatedError extends Error{
    statusCode:number;
    constructor(message:string){
        super(message);
        this.statusCode=StatusCodes.UNAUTHORIZED;
    }
}

export default UnAuthenticatedError;