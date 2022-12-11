const signInValidation = (req, res, next) => {
    const { email, password } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return res.status(400).json('invalid email');
    if (password.length < 6) return res.status(400).json('invalid password');
    next();
};

const signUpValidation = (req, res, next) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const { name, email, password } = req.body;
    if (name.length < 12) return res.status(400).json('invalid name');
    if (!emailRegex.test(email)) return res.status(400).json('invalid email');
    if (password.length < 6) return res.status(400).json('invalid password');
    next();
};

module.exports = {
    signInValidation,
    signUpValidation
};