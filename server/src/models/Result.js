import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    questionId: Number,
    selectedAnswer: String,
    correctAnswer: String,
    isCorrect: Boolean,
  },
  { _id: false }
);

const resultSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    totalQuestions: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      required: true,
    },

    answers: {
      type: [answerSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);
export default Result;
