const app = require('./app');
const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/Kasetsart_RAG'; // Your MongoDB URI

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
