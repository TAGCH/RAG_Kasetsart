const Question = require('../models/Question');

exports.askQuestion = async (req, res) => {
  const { question } = req.body;
  // Here you'll implement the logic to answer the question based on your data
  // For now, let's just return a dummy answer
  const answer = "Dummy answer to " + question;
  res.json({ answer });
};
