import { defineRoutes } from "#functions/utils.js";
import { StatusCodes } from "http-status-codes";

export default defineRoutes(app => {
    app.get("/", (_req, reply) => {

        reply.status(200).send({
            message: "Hello world"
        })
    })
})