import Quiz from "../models/Quiz.js";

/**
 * GET quizzes by technology
 * /api/quizzes?tech=JavaScript
 */
export const getQuizzesByTech = async (req, res) => {
  try {
    const { tech } = req.query;

    if (!tech) {
      return res.status(400).json({
        message: "Technology query is required",
      });
    }

    // hide correct answers
    const quizzes = await Quiz.find({ tech }).select("-questions.answer");

    res.status(200).json({
      success: true,
      count: quizzes.length,
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * GET single quiz by ID
 * /api/quizzes/:id
 */
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      success: true,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * CREATE quiz (CREATOR ONLY)
 * POST /api/quizzes
 */
export const createQuiz = async (req, res) => {
  try {
    const { title, tech, questions } = req.body;

    if (!title || !tech || !questions || questions.length === 0) {
      return res.status(400).json({
        message: "Title, tech and questions are required",
      });
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
    res.status(500).json({
      message: error.message,
    });
  }
};
