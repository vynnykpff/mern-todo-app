require('dotenv').config();
const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/registration',
	[
		check('email', 'Invalid email').isEmail(),
		check('password', 'Your password should be bigger than 3 symbols and less than 16').isLength({min: 3, max: 16}),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array(), message: 'Invalid data received'});
			}

			const {email, password} = req.body;
			const isUsed = await User.findOne({email})

			if (isUsed) {
				return res.status(300).json({message: 'User already registered'});
			}

			const hashedPassword = await bcrypt.hash(password, 12);

			const user = new User({
				email, password: hashedPassword
			})

			await user.save();

			res.status(201).json({message: 'User registration successful'});


		} catch (e) {
			console.error('Error occurred during registration:', e)
		}
	})

router.post('/login',
	[
		check('email', 'Invalid email').isEmail(),
		check('password', 'Invalid password').exists(),
	],

	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array(), message: 'Invalid data received'});
			}
			const {email, password} = req.body;

			const user = await User.findOne({email});

			if (!user) {
				return res.status(400).json({message: "This email does not in system"})
			}

			const isMatch = bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({message: 'Invalid password'});
			}

			const jwtSecret = process.env.JWT_KEY;

			const token = jwt.sign(
				{userId: user._id},
				jwtSecret,
				{expiresIn: "1h"}
			)

			res.json({token, userId});

		} catch (e) {
			console.error('Error occurred during registration:', e)
		}
	})

module.exports = router;