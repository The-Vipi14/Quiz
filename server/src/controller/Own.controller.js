import User from "../models/User.js";
import Quiz from "../models/Quiz.js";
import Result from "../models/Result.js";


export const Owner_GetAllUsers = async (req, res) => {
    try {
        const data = await User.find({ role: "user" });
        res.send(data)

    } catch (error) {
        console.log(error)
    }
}

export const Owner_GetAllCreator = async (req, res) => {
    try {
        const data = await User.find({ role: "creator" });
        res.send(data)

    } catch (error) {
        console.log(error)
    }
}

export const Owner_GetAllQuizzes = async (req, res) => {
    try {
        const data = await Quiz.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

export const Quiz_by_creator = async (req, res) => {
    try {
        const userId = req.body.userId;
        const data = await Quiz.find({ createdBy: "695932b3aef3f3825c43ce93" })
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.body.id;

        const user = await User.find({ _id: userId });
        res.status(200).json({
            user,
        })
    } catch (error) {
        console.log(error)
    }
}


// export const user_solvedQuiz = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const quizzes = await Result.find({ userId: id })
//         res.send(quizzes)
//     } catch (error) {
//         console.log(error)
//     }
// }  

export const user_solvedQuiz = async (req, res) => {
    try {
        const { id } = req.params;
        const results = await Result.find({ userId: id })
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
    } catch (error) {
        console.log(error)
    }
}  
