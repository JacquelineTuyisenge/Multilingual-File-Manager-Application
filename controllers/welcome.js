// welcoming message 

const welcome = async (req, res) => {
    try{
        res.status(200).json({ message: "Welcome to Multilingual File Manager API" });
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Error", error });
    };
};

export default welcome;