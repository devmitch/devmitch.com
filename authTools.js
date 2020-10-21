module.exports.secretRequired = (req, res, next) => {
    if (req.body.secret != process.env.SECRET) {
        return res.status(403).send("Forbidden!");
    }
    delete req.body.secret;
    next();
};