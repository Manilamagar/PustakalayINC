const router = require("express").Router();
const auth = require("../middleware/auth");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/", auth("admin"), async (req, res) => {
  res.json(await prisma.book.create({ data: req.body }));
});

router.put("/:id", auth("admin"), async (req, res) => {
  res.json(await prisma.book.update({ where: { id: +req.params.id }, data: req.body }));
});

router.delete("/:id", auth("admin"), async (req, res) => {
  await prisma.book.delete({ where: { id: +req.params.id } });
  res.json({ msg: "Deleted" });
});

router.get("/", async (_, res) => {
  res.json(await prisma.book.findMany());
});

module.exports = router;