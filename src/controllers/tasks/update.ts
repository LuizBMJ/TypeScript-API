import { taskStatus, UpdateTaskSchema } from "../../database/schemas/tasks.js";
import { tasksService } from "../../services/tasks.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { exit } from "node:process";
import { z } from "zod";
import { notFoundTask } from "./helpers.js";
import { StatusCodes } from "http-status-codes";

const schema = z.object({
    name: z.string().min(3).optional(),
    status: z.enum(taskStatus).optional(),
}).refine(({ name, status}) => {
    return status !== undefined || name !== undefined
}, { message:
    `At least one of the properties \"status\" or \"name"\ must be provided.`
}) satisfies z.ZodType<UpdateTaskSchema>;

interface UpdateRoute {
    Params: {
        id: string;
    }
    Body: UpdateTaskSchema;
}

async function controller(req: FastifyRequest<UpdateRoute>, reply: FastifyReply) {
    const { id } = req.params;
    const exists =await tasksService.exists(id);
    if (!exists) {
        return notFoundTask(id, reply);
    }
    const data = schema.parse(req.body);
    const updateTask = await tasksService.update(id, data);

    return reply.status(StatusCodes.OK).send({
        message: `Task updated sucessfully!`,
        task: updateTask,
    });
}
export { controller as UpdateTaskController }