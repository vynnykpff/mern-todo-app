require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

const uri = process.env.DATABASE;

const start = async () => {
	try {
		await mongoose.connect(uri);

		app.listen(PORT, () => console.log(`server started on port ${PORT}`));
	} catch (e) {
		console.error(e);
	}
};

start();
