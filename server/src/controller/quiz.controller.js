import Quiz from "../models/Quiz.js";
import Result from "../models/Result.js";

/**
 * GET quizzes by technology
 */
export const getQuizzesByTech = async (req, res) => {
  try {
    const { tech } = req.query;

    if (!tech) {
      return res.status(400).json({ message: "Technology is required" });
    }

    const quizzes = await Quiz.find({ tech }).select("-questions.answer");

    res.status(200).json({
      success: true,
      count: quizzes.length,
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET single quiz by ID
 */
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({
      success: true,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * CREATE quiz (CREATOR ONLY)
 */
export const createQuiz = async (req, res) => {
  try {
    const { title, tech, questions } = req.body;

    if (!title || !tech || !questions || questions.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const quiz = await Quiz.create({
      title,
      tech,
      questions,
      createdBy: req.user.userId,
    });

    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * SUBMIT QUIZ (USER / CREATOR)
 */
export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    if (!quizId || !answers || answers.length === 0) {
      return res.status(400).json({ message: "QuizId and answers required" });
    }

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    let score = 0;
    const detailedAnswers = [];

    quiz.questions.forEach((q) => {
      const userAnswer = answers.find((a) => a.questionId === q.id);

      if (userAnswer) {
        const isCorrect = userAnswer.selectedAnswer === q.answer;
        if (isCorrect) score++;

        detailedAnswers.push({
          questionId: q.id,
          selectedAnswer: userAnswer.selectedAnswer,
          correctAnswer: q.answer,
          isCorrect,
        });
      }
    });

    const totalQuestions = quiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    const result = await Result.create({
      quizId,
      userId: req.user.userId,
      score,
      totalQuestions,
      percentage,
      answers: detailedAnswers,
    });

    quiz.totalAttempts += 1;
    await quiz.save();

    res.status(200).json({
      success: true,
      message: "Quiz submitted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
