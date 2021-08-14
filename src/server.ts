import { NextFunction, Request, Response } from "express";
import app, { init } from "./app";

const port = +process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
