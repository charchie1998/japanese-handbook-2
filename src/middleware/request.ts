const requestParser = (req, res, next) => {
    req.body = req.body || {};
    req.params = req.params || {};
    req.query = req.query || {};
    next();
}