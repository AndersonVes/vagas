const data =  require("./fakeData");

const getUser = ( req, res, next ) => {
        
    if(!req.query.id) {
        res.status(404).send( {message: "missing ID"})
        return
    }

    const id =  req.query.id;

    const user =  data.find(obj => obj.id == id)

    if(user) {
        user.accessCount ? user.accessCount++ : user.accessCount = 1

        res.send(user)
    }
    else {
        res.status(404).send( {message: "User not found"})
    }

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};