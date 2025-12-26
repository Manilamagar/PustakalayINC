import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from './Controller/authorController.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Example route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example route to create a user
app.post('/users', async (req, res) => {
  try {
    const { name, email, password, roll, phone, Address } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        roll,
        phone,
        Address,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Author routes
app.get('/authors', getAllAuthors);
app.get('/authors/:id', getAuthorById);
app.post('/authors', createAuthor);
app.put('/authors/:id', updateAuthor);
app.delete('/authors/:id', deleteAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
