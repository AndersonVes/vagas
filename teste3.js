const data = require("./fakeData");

module.exports = function (req, res) {

    if (!req.query.id) {
        res.status(404).send({ message: "missing ID" })
        return
    }
    const id = parseInt(req.query.id);
    const indexToDelete = data.findIndex(obj => obj.id == id);
    console.log(indexToDelete);

    if (indexToDelete === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    data.splice(indexToDelete, 1);
    res.send({ message: "User removed" })


};