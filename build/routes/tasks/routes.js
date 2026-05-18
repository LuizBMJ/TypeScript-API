import { createTaskController } from "../../controllers/tasks/create.js";
import { DeleteTaskController } from "../../controllers/tasks/delete.js";
import { getAllTasksController, getByIdTaskController } from "../../controllers/tasks/get.js";
import { UpdateTaskController } from "../../controllers/tasks/update.js";
import { defineRoutes } from "../../functions/utils.js";
export default defineRoutes(app => {
    app.get("/", getAllTasksController);
    app.get("/:id", getByIdTaskController);
    app.post("/", createTaskController);
    app.patch("/:id", UpdateTaskController);
    app.delete("/:id", DeleteTaskController);
});
