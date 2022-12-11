const signInValidation = (req, res, next) => {
    const { email, password } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return res.status(400).json('invalid email');
    if (password.length < 6) return res.status(400).json('invalid password');
    next();
};

module.exports = {
    signInValidation,
};