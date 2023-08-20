const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Include user and thought routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/thoughts', require('./routes/thoughtRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
