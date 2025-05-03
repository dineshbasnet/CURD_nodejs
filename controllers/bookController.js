
const { books } = require("../database/connection")

exports.fetchBooks = async function (req, res) {
    // logic to fetch books from database 
    const datas = await books.findAll() // select * from books, books.find(), always returns array
    res.json({
        message: "books fetched successfully",
        datas
    })
}

exports.addBook = async function (req, res) {
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;

    try {
        const newBook = await books.create({
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        });

        res.json({ message: "Book added successfully", book: newBook });

    } catch (error) {
        console.error("🔥 Sequelize Error:", error); // This shows the real problem
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBook = async function (req, res) {
    try {
        const id = req.params.id
        const book = await books.findByPk(id)
        if (!book) {
            return res.status(404).json({
                message: "Books not found"
            })
        }
        await books.destroy({
            where: {
                id: id
            }
        })
        res.json({
            status: 200,
            message: "Book deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error"
        })

    }

}




exports.editBook = async function (req, res) {
    // logic to update book
    const id = req.params.id
    const book = await books.findByPk(id)

    try {
        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            })
        }
        const { bookName, bookPrice, bookAuthor, bookGenre } = req.body

        await books.update({
            bookName: bookName,
            bookPrice: bookPrice,
            bookAuthor: bookAuthor,
            bookGenre: bookGenre
        }, {
            where: {
                id: id
            }
        }
        )
        return res.status(200).json({
            message: "Book updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while updating the books"
        })
    }
}

exports.singleFetchBook = async function (req, res) {
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas = await books.findByPk(id) // always returns object, mongoose --> findById
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message: "Single Book fetched successfully",
        datas,
        // datass
    })

}

// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai 
