import { Application } from "express";
import express from "express";
import { json, urlencoded } from "body-parser";

export const middlewares = (app: Application, publicPath: string) => {
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(express.static(publicPath));
};
