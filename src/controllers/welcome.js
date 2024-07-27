// welcoming message 

const welcome = async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to Multilingual File Manager API" });
    } catch (error) {
        res.status(500).json({ message: "something went wrong"});
    }
};

module.exports = welcome;
