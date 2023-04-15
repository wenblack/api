const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const noutesRoutes = Router();

const notesController = new NotesController();

noutesRoutes.use(ensureAuthenticated);

noutesRoutes.get("/", notesController.index);
noutesRoutes.post("/", notesController.create);
noutesRoutes.get("/:id", notesController.show);
noutesRoutes.delete("/:id", notesController.delete);

module.exports = noutesRoutes;