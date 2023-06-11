const data = require("./fakeData");

let nextId = 2;

function getNextId() {
  const id = nextId;
  nextId++;
  return id;
}

module.exports = function (req, res) {

    const { name, job } = req.body;

    if (!name || !job) {
        return res.status(400).json({ error: 'Name and job are required' });
    }

    const newObject = {
        id: getNextId(),
        name,
        job
    };

    data.push(newObject);

    res.status(201).json({ message: 'Object added successfully' });

};