const {Router} = require('express');
const router = Router();
const User = require('../models/User');

router.post('/registration', async (req, res) => {
	try {
		const {email, password} = req.body;
		const isUsed = await User.findOne({email})

		if (isUsed) {
			return res.status(300).json({message: 'User already registered'});
		}

		const user = new User({
			email, password
		})

		await user.save();

		res.status(201).json({message: 'User registration successful'});


	} catch (e) {
		console.error('Error occurred during registration:', e)
	}
})

module.exports = router;