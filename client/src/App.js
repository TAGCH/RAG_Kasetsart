import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';

function App() {
  const [answer, setAnswer] = useState('');

  const handleSubmitQuestion = (question) => {
    // Call API to get answer
    // Example: fetch('/api/questions', { method: 'POST', body: JSON.stringify({ question }), headers: { 'Content-Type': 'application/json' } })
    //   .then(response => response.json())
    //   .then(data => setAnswer(data.answer))
    //   .catch(error => console.error('Error:', error));
    // For now, let's just set a dummy answer
    setAnswer('Dummy answer to ' + question);
  };

  return (
    <div>
      <h1>Software and Knowledge Engineering Degree Program</h1>
      <QuestionForm onSubmit={handleSubmitQuestion} />
      <p>Answer: {answer}</p>
    </div>
  );
}

export default App;
