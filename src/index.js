const express = require("express");

const server = express();
server.use(express.json());

const projects = [];
let counter = 0;

server.use((req, res, next) => {
  console.log(`Number of Requisitions: ${++counter}`);
  return next();
});

const verifyProject = (req, res, next) => {
  const { id } = req.params;
  if (projects.find(prj => prj.id === id) !== undefined) {
    return next();
  }

  return res.status(400).json({ error: "Project not found." });
};

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  });

  return res.json(projects);
});

server.post("/projects/:id/tasks", verifyProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  project = projects.find(prj => prj.id === id);
  project.tasks.push(title);

  return res.json(projects);
});

server.put("/projects/:id", verifyProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  project = projects.find(prj => prj.id === id);
  project.title = title;

  return res.json(projects);
});

server.delete("/projects/:id", verifyProject, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(prj => prj.id === id);

  projects.splice(index, 1);

  return res.json({ message: `Project #${id} deleted successfully.` });
});

server.listen(3003);
