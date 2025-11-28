const logging = (req, res, next) => {
    console.log(`Method Recieved - ${req.method}`)
    next();
}

module.exports = { logging };