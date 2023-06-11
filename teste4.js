const data =  require("./fakeData");

module.exports =  function(req, res) {
  
    const id =  req.query.id;

    const { name, job } = req.body;

    const user = data.find(obj => obj.id == id);
  
    if (!user) {
      return res.status(404).json({ error: 'Object not found' });
    }
  
    if (name) {
      user.name = name;
    }
  
    if (job) {
      user.job = job;
    }
  
    res.status(200).json({ message: 'Object updated successfully' });

};