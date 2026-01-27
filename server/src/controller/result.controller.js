import Result from "../models/Result.js";

// USER PROFILE – solved quizzes
export const getUserResults = async (req, res) => {
  try {
    const results = await Result.find({ userId: req.user.userId })
      .populate({
        path: "quizId", 
        select: "title tech createdBy",
        populate: {
          path: "createdBy",
          select: "name",
        },
      })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: results,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// STEP-4: Creator → who solved my quiz
export const getQuizSolvers = async (req, res) => {
  try {
    const { quizId } = req.params;

    const results = await Result.find({ quizId })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: results,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

