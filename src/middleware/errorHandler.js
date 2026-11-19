function errorHandler(err, req,res,next){
    if(err.type === "entity.parse.failed") {
        return res.status(400).json({error: "Invalid JSON Body"})
    }

    console.error(err)
    res.status(500).json({error: "Interval Server Error"})
}

module.exports = errorHandler