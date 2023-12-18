
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());


const patientsRoutes = require('./routes/patients');
app.use('/api/patients', patientsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
