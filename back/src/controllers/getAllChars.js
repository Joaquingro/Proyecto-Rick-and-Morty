const { Character } = require("../db")

const getAllChars = async (req, res) => {
try {
    const getChars = await Character.findAll();
    res.status(200).json(getChars);
} catch (error) {
    res.status(500).send(error.message);
}
}


module.exports = getAllChars;