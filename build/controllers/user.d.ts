/// <reference types="qs" />
import { Request, Response } from 'express';
export declare const singUp: (request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, response: Response<any>) => Promise<Response<any>>;
export declare const singIn: (request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, response: Response<any>) => Promise<Response<any>>;
