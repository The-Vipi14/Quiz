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
    