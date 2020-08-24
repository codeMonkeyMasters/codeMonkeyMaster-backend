const { Router } = require("express")
const authMiddleware = require("../auth/middleware")

const User = require("../models").user
const Exercises = require("../models").exercise
const CompletedExercises = require("../models").completedExercise

const router = new Router()

router.get(
    "/completedExercises",
    authMiddleware,
    async(req, res, next) => {
        const userIdNeeded = req.user.id
        console.log("user id test:", userIdNeeded)
        if(!userIdNeeded){
            res.status(401).send("Sorry but you're not suppose to be here, please login/sign-up to continue.")
        }

        try{
            const userInfo = await User.findByPk(userIdNeeded, {
                include: [Exercises]
            })
            // console.log("user info test", userInfo)
            if(!userInfo){
                res.status(404).send("It seems you are lost, Login to be found.")
            }
            delete userInfo.dataValues["password"]

            const completed = await CompletedExercises.findAll({
                where: {
                    userId: userIdNeeded,
                }
            })
            // console.log("completed test", completed)
            if(!completed){
                res.status(404).send("Oops, you either haven't completed any exercises, or something went wrong, try refreshing and try again.")
            } else {
                res.status(202).send({
                    exercisesCompleted: completed,
                    user: {...userInfo.dataValues}
                })
            }

        } catch(error){
            next(error)
        }
    }
)



module.exports = router