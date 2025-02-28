import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuizPopup = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const questions = [
    {
      question: 'Which plant is known as Holy Basil?',
      options: ['Tulsi', 'Neem', 'Aloe Vera', 'Lavender'],
      answer: 'Tulsi',
    },
    {
      question: 'Which plant is used for its antibacterial properties?',
      options: ['Neem', 'Cactus', 'Hibiscus', 'Rosemary'],
      answer: 'Neem',
    },
    {
      question: 'Which plant is known for its soothing properties and is often used in teas?',
      options: ['Chamomile', 'Mint', 'Ginger', 'Echinacea'],
      answer: 'Chamomile',
    },
    {
      question: 'Which plant is commonly used to treat headaches and muscle pain?',
      options: ['Peppermint', 'Lavender', 'Ginseng', 'Dandelion'],
      answer: 'Peppermint',
    },
    {
      question: 'Which plant is known for its high vitamin C content and is used to boost the immune system?',
      options: ['Rosehip', 'Elderberry', 'Ginger', 'Garlic'],
      answer: 'Rosehip',
    },
    {
      question: 'Which plant has leaves used in cooking that provide a distinctive flavor and is known as “Holy Basil” in some cultures?',
      options: ['Thyme', 'Basil', 'Oregano', 'Coriander'],
      answer: 'Basil',
    },
    {
      question: 'Which plant’s roots are used in traditional medicine for their anti-inflammatory properties?',
      options: ['Turmeric', 'Ginger', 'Garlic', 'Dandelion'],
      answer: 'Turmeric',
    },
    {
      question: 'Which plant is used in aromatherapy for relaxation and stress relief?',
      options: ['Lavender', 'Jasmine', 'Sandalwood', 'Patchouli'],
      answer: 'Lavender',
    },
    {
      question: 'Which plant’s leaves are known for their ability to reduce high blood sugar levels?',
      options: ['Moringa', 'Ginseng', 'Neem', 'Aloe Vera'],
      answer: 'Moringa',
    },
    {
      question: 'Which plant is known for its ability to purify the air and is commonly kept indoors?',
      options: ['Spider Plant', 'Aloe Vera', 'Snake Plant', 'Peace Lily'],
      answer: 'Snake Plant',
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion === questions.length - 1) {
      setIsQuizComplete(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsQuizComplete(false);
    onClose();
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === questions[index].answer ? score + 1 : score;
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-2xl p-8 w-full max-w-2xl mx-4 relative max-h-[80vh] overflow-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-3xl font-medium text-gray-600 hover:text-red-500 transition-colors"
        >
          &times;
        </button>

        {isQuizComplete ? (
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Quiz Completed!</h2>
            <p className="mb-4 text-center text-lg">
              Your score: {calculateScore()} / {questions.length}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Review Your Answers:</h3>
              <ul className="space-y-4">
                {questions.map((q, index) => {
                  const isCorrect = answers[index] === q.answer;
                  return (
                    <li key={index} className="p-4 border rounded-lg">
                      <p className="mb-2 font-semibold text-gray-800">{q.question}</p>
                      <p className={`mb-1 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        Your answer: {answers[index]}
                      </p>
                      <p className="text-gray-500">Correct answer: {q.answer}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-green-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{questions[currentQuestion].question}</h2>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-left hover:bg-gray-200 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizPopup;
