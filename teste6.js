const data =  require("./fakeData");

module.exports = function (req, res, next) {
    
    const hasPermission = true; // Lógica do middleware
  
    if (!hasPermission) {
      return res.status(403).json({ error: 'Permission denied' });
    }
  
    next();
  }