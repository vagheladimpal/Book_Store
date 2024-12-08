const {Book,adventure,fantasy,fiction,horror,inspiration,mystery,Non_fiction,Science_fiction,Technology_1,thriller_1} = require("../models/books");
const express=require("express")
//dashbord
async function handleGetBook(req, res) {
  try {
     const BookData = await Book.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//adventure
async function handleAdventureGetBook(req, res) {
  try {
     const BookData = await adventure.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//fantasy
async function handleFantasyGetBook(req, res) {
  try {
     const BookData = await fantasy.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//fiction
async function handleFictionGetBook(req, res) {
  try {
     const BookData = await fiction.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//horror
async function handleHorrorGetBook(req, res) {
  try {
     const BookData = await horror.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//inspirational
async function handleInspirationalGetBook(req, res) {
  try {
     const BookData = await inspiration.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//mystery
async function handleMysteryGetBook(req, res) {
  try {
     const BookData = await mystery.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//non-fiction
async function handleNonFictionGetBook(req, res) {
  try {
     const BookData = await Non_fiction.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//science-fiction
async function handleScienceFictionGetBook(req, res) {
  try {
     const BookData = await Science_fiction.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//technology
async function handleTechnologyGetBook(req, res) {
  try {
     const BookData = await Technology_1.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//thriller
async function handleThrillerGetBook(req, res) {
  try {
     const BookData = await thriller_1.find({});
    if (!BookData) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(BookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
//search api
const handleSearchBookByName = async (req, res) => {
  try {
    // Ensure that name is being extracted properly from req.body
    const { name } = req.body; // Make sure this line is executed before you try to use `name`
    // If `name` is not passed in the request body, return an error
    if (!name) {
      return res.status(400).json({ message: 'Book name is required' });
    }

    // Query to search for books by name (case insensitive search using regex)
    const query = { 'fiction.name': { $regex: name, $options: 'i' } };
    console.log(query)
    // Perform the search in the database
    const books = await fiction.find(query);
    console.log(books)
    // Return the found books or a message if no books are found
    if (books.length > 0) {
      return res.status(200).json(books);
    } else {
      return res.status(404).json({ message: 'No books found with that name.' });
    }
  } catch (error) {
    console.error('Error during search:', error); // Log the error for debugging
    return res.status(500).json({ message: 'Error while searching for books.' });
  }
};

module.exports = {
    handleGetBook,
    handleAdventureGetBook,
    handleFantasyGetBook,
    handleFictionGetBook,
    handleHorrorGetBook,
    handleInspirationalGetBook,
    handleMysteryGetBook,
    handleNonFictionGetBook,
    handleScienceFictionGetBook,
    handleTechnologyGetBook,
    handleThrillerGetBook,
    handleSearchBookByName
};
