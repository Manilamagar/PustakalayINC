import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all authors
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await prisma.author.findMany({
      select: {
        id: true,
        name: true,
        bio: true,
      },
    });
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get author by ID
export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await prisma.author.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        name: true,
        bio: true,
        books: {
          select: {
            id: true,
            title: true,
            isbn: true,
            publication_year: true,
          },
        },
      },
    });
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create author
export const createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const author = await prisma.author.create({
      data: { name, bio },
      select: {
        id: true,
        name: true,
        bio: true,
      },
    });
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update author
export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio } = req.body;
    const author = await prisma.author.update({
      where: { id: parseInt(id) },
      data: { name, bio },
      select: {
        id: true,
        name: true,
        bio: true,
      },
    });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete author
export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.author.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
