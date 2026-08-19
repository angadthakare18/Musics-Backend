const jwt = require('jsonwebtoken')

async function authUser(req, res, next) {
    
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({message:'Unauthorized'})
    }

    try {
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== 'user'){
            return res.status(403).json({message: 'You dont have access'})
        }

        req.user = decoded;

        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({message:'Unauthorized'})
    }
}

module.exports = {authUser}