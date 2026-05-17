

import { createTaskController } from "#controllers/create.js";
import { DeleteTaskController } from "#controllers/delete.js";
import { getAllTasksController, getByIdTaskController } from "#controllers/get.js";
import { UpdateTaskController } from "#controllers/update.js";
import { defineRoutes } from "#functions/utils.js";


export default defineRoutes(app => {
    app.get("/", getAllTasksController);
    app.get("/:id", getByIdTaskController);
    app.post("/", createTaskController);
    app.patch("/:id", UpdateTaskController);
    app.delete("/:id", DeleteTaskController);
})