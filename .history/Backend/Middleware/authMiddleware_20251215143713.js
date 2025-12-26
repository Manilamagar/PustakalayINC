// LOGIN
app.post("/api/login", async (req, res) => {
const { email, password } = req.body;
const user = await prisma.user.findUnique({ where: { email } });
if (!user) return res.status(401).json({ msg: "User not found" });


const valid = await bcrypt.compare(password, user.password);
if (!valid) return res.status(401).json({ msg: "Invalid password" });


const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1d" });
res.json({ token, role: user.role });
});
