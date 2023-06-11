const data =  require("./fakeData");

module.exports = function (req, res) {
    if (!req.query.id) {
        res.status(404).send({ message: "missing ID" })
        return
    }

    const id = req.query.id;

    const user = data.find(obj => obj.id == id)

    res.send({"message":`User ${user.name} was read ${user.accessCount || 0} times.`});

};