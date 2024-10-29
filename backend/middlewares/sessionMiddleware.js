const sessionMiddleware = async (req, res, next)=>{
    console.log(req.session.user);
    
    
    if (req.session.user !== undefined) {
        next();
    } else {
        res.status(401).send("Invalid session. Please log in again.");
    }
}

module.exports = sessionMiddleware;