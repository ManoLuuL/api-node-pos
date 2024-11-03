const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		res.status(201).json({ message: "Usuário registrado com sucesso" });
	} catch (err) {
		res
			.status(400)
			.json({ message: "Erro ao registrar o usuário", error: err.message });
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user || !(await bcrypt.compare(password, user.password)))
			return res.status(400).json({ message: "Credenciais inválidas" });

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		res.json({ token });
	} catch (err) {
		res.status(500).json({ message: "Erro no login", error: err.message });
	}
};
