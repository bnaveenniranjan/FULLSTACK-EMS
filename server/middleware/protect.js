const protect = (req,res,next) => {

    try{

        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({
                error:"Unauthorized access"
            });
        }

        next();

    }catch(error){

        return res.status(500).json({
            error:"Authentication failed"
        });

    }

}

export default protect;