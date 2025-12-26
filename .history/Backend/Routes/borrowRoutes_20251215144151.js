const router = require("express").Router();
const auth = require("../middleware/auth");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/issue/:bookId", auth("student"), async (req, res) => {
  const due = new Date();
  due.setDate(due.getDate() + 7);

  await prisma.borrow.create({
    data: { userId: req.user.id, bookId: +req.params.bookId, dueDate: due }
  });

  await prisma.book.update({ where: { id: +req.params.bookId }, data: { available: false } });
  res.json({ msg: "Issued" });
});

router.post("/return/:id", auth("student"), async (req, res) => {
  const b = await prisma.borrow.findUnique({ where: { id: +req.params.id } });
  const now = new Date();
  let fine = now > b.dueDate ? Math.floor((now - b.dueDate) / 86400000) * 5 : 0;

  await prisma.borrow.update({ where: { id: b.id }, data: { returnDate: now, fine } });
  await prisma.book.update({ where: { id: b.bookId }, data: { available: true } });

  res.json({ fine });
});

router.get("/history", auth("student"), async (req, res) => {
  res.json(await prisma.borrow.findMany({ where: { userId: req.user.id }, include: { book: true } }));
});

module.exports = router;