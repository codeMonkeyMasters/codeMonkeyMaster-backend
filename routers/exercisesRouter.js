const { Router } = require("express")
const authMiddleware = require("../auth/middleware")

const User = require("../models").user
const Exercises = require("../models").exercise
const CompletedExercises = require("../models").completedExercise
const QuizQuestions = require("../models").quizQuestion

const router = new Router()

router.get(
    "/:id/fastest",
    async(req, res, next) => {
        const exerciseIdNeeded = parseInt(req.params.id)
        // console.log("exercise id test", exerciseIdNeeded)
        if(!exerciseIdNeeded){
            res.status(400).send("Url malfunctioned, please refresh and try again.")
        }
        try{
            const exercisesCompleted = await CompletedExercises.findAll({
                where: {
                    exerciseId: exerciseIdNeeded,
                }
            })
            // console.log("completed exercises test", exercisesCompleted)
            if(!exercisesCompleted){
                res.status(404).send("Oops it seems we couldnt find the completed exercises, refresh and try again.")
            }

            const sortedExercisesCompleted = exercisesCompleted.sort((a, b) => {
                const timeTakenA = a.timeTaken
                // console.log(timeTakenA)
                const timeTakenB = b.timeTaken
                // console.log(timeTakenB)
                if(timeTakenB > timeTakenA){
                    return -1
                } else if(timeTakenA > timeTakenB){
                    return 1
                } else {
                    return 0
                }
            })
            // console.log("sorted exercises completed", sortedExercisesCompleted)
            if(!sortedExercisesCompleted){
                res.status(400).send("Malfunction in the backend, refresh and try again.")
            } else {
                res.status(202).send(sortedExercisesCompleted)
            }

        } catch(error){
            next(error)
        }
    }
)

router.patch(
    "/:id/quiz/completed/:qId",
    authMiddleware,
    async(req, res, next) => {
        const userIdNeeded = req.user.id
        // console.log("user ID test", userIdNeeded)
        if(!userIdNeeded){
            res.status(401).send("Sorry you aren't authorized, please login/sign-up to authorize yourself.")
        }

        const quizIdNeeded = parseInt(req.params.qId)
        // console.log("quiz ID test", quizIdNeeded)
        if(!quizIdNeeded){
            res.status(400).send("The Url malfunctioned please refresh and try again.")
        }

        const exerciseIdNeeded = parseInt(req.params.id)
        // console.log("quiz ID test", exerciseIdNeeded)
        if(!exerciseIdNeeded){
            res.status(400).send("The Url malfunctioned please refresh and try again.")
        }

        try{
            const quizComplete = await CompletedExercises.create({
                userId: userIdNeeded,
                quizQuestionId: quizIdNeeded,
                exerciseId: exerciseIdNeeded,
                exp: 10,
            })
            console.log("created quiz test", quizComplete)
            if(!quizComplete){
                res.status(404).send("Your info couldnt be processed, refresh and try again.")
            }

            const userFound = await User.findByPk(userIdNeeded)
            if(!userFound){
                res.status(404).send("Oops, we seem to be lost please login/sign-up so we can find you.")
            }

            const updateExpUser = await userFound.increment("totalExp", { by: 10})
            // console.log("exp update test", updateExpUser)
            if(!updateExpUser){
                res.status(400).send("Your exp wasnt updated please refresh and try again.")
            }

            if(userFound.totalExp > 0 && userFound.totalExp <= 29){
                const updatedUser = await updateExpUser.update({
                    ranking: "Code Monkey",
                })
                console.log("what happens here", updatedUser)
                const userNeeded = await User.findByPk(updatedUser.id)
                console.log("and then here", userNeeded)

                delete userNeeded.dataValues["password"]
                res.status(202).send({
                    user: {...userNeeded.dataValues},
                    completedQuiz: [quizComplete],
                })
            } else if(userFound.totalExp >= 30 &&  userFound.totalExp <= 89){
                const updatedUser = await updateExpUser.update({
                    ranking: "Coder",
                })
                console.log("what happens here", updatedUser)
                const userNeeded = await User.findByPk(updatedUser.id)
                console.log("and then here", userNeeded)

                delete updatedUser.dataValues["password"]
                res.status(202).send({
                    user: {...userNeeded.dataValues},
                    completedQuiz: [quizComplete],
                })
            } else if(userFound.totalExp >= 90 && userFound.totalExp <= 179){
                const updatedUser = await updateExpUser.update({
                    ranking: "Code Wizard",
                })
                console.log("what happens here", updatedUser)
                const userNeeded = await User.findByPk(updatedUser.id)
                console.log("and then here", userNeeded)

                delete userNeeded.dataValues["password"]
                res.status(202).send({
                    user: {...userNeeded.dataValues},
                    completedQuiz: [quizComplete],
                })
            } else {
                const updatedUser = await updateExpUser.update({
                    ranking: "Code Master",
                })
                console.log("what happens here", updatedUser)
                const userNeeded = await User.findByPk(updatedUser.id)
                console.log("and then here", userNeeded)

                delete userNeeded.dataValues["password"]
                res.status(202).send({
                    user: {...userNeeded.dataValues},
                    completedQuiz: [quizComplete],
                })
            }

        } catch(error){
            next(error)
        }
    }
)

router.patch(
    "/:id/completed/:qId",
    authMiddleware,
    async(req, res, next) => {
        const userIdNeeded = req.user.id
        // console.log("user id test:", userIdNeeded)
        if(!userIdNeeded){
            res.status(401).send("Sorry you're not suppose to be here, please login in or sign up to continue.")
        }

        const exerciseIdNeeded = parseInt(req.params.id)
        // console.log("exercise Id test", exerciseIdNeeded)
        if(!exerciseIdNeeded){
            res.status(400).send("The Url malfunctioned please refresh and try again.")
        }

        const quizIdNeeded = parseInt(req.params.qId)
        console.log("quiz id test", quizIdNeeded)
        if(!quizIdNeeded){
            res.status(400).send("The Url malfunctioned please refresh and try again.")
        }

        const time = req.body.timeTaken
        const expInt = parseInt(req.body.exp)
        // console.log(`time test: ${time}
        // exp test: ${expInt}`)
        if(!time || !expInt){
            res.status(400).send("Please provide the proper credentials to continue.")
        }

        try{
            const exerciseDone = await CompletedExercises.findOne({
                where: {
                    userId: userIdNeeded,
                    exerciseId: exerciseIdNeeded,
                    quizQuestionId: quizIdNeeded,
                }
            })
            ?
            await CompletedExercises.update({
                timeTaken: time,
            },{
                where: {
                    userId: userIdNeeded,
                    exerciseId: exerciseIdNeeded,
                    quizQuestionId: quizIdNeeded,
                }
            })
            : 
            await CompletedExercises.create({
                userId: userIdNeeded,
                exerciseId: exerciseIdNeeded,
                quizQuestionId: quizIdNeeded,
                timeTaken: time,
                exp: expInt,
            })
            if(!exerciseDone){
                res.status(404).send("We couldn't find you're completed exercises, please refresh and try again.")
            }

            const sendExercise = await CompletedExercises.findOne({
                where: {
                    userId: userIdNeeded,
                    exerciseId: exerciseIdNeeded,
                    quizQuestionId: quizIdNeeded,
                    exp: expInt,
                    timeTaken: time,
                }
            })
            if(!sendExercise){
                res.status(404).send("We couldn't find you're completed exercises, please refresh and try again.")
            }

            const userFound = await User.findByPk(userIdNeeded)
            if(!userFound){
                res.status(404).send("Oops, we seem to be lost please login/sign-up so we can find you.")
            }

            const updateUser = await userFound.increment("totalExp", { by: expInt})
            if(!updateUser){
                res.status(400).send("Oops, it seems yuor exp hasnt updated please refresh and try again.")
            }

            if(userFound.totalExp > 0 && userFound.totalExp <= 29){
                    const updatedUser = await User.update({
                        ranking: "Code Monkey",
                    },{
                        where: {
                            id: userIdNeeded,
                        }
                    })

                    const userUpdated = await User.findByPk(userIdNeeded)
        
                    delete userUpdated.dataValues["password"]
                    res.status(202).send({
                        user: {...userUpdated.dataValues},
                        completed: sendExercise,
                })
            } else if(userFound.totalExp >= 30 && userFound.totalExp <= 89){
                    const updatedUser = await User.update({
                        ranking: "Coder",
                    },{
                        where: {
                            id: userIdNeeded,
                        }
                    })
                    console.log("tell me what happens", updatedUser)
                    const userUpdated = await User.findOne({
                        where: {
                            id: userIdNeeded,
                            ranking: "Coder",
                        }
                    })
                    console.log("did the user get updated",userUpdated)
                    delete userUpdated.dataValues["password"]
                    res.status(202).send({
                        user: {...userUpdated.dataValues},
                        completed: sendExercise,
                })
            } else if(userFound.totalExp >= 90 && userFound.totalExp <= 169){
                    const updatedUser = await User.update({
                        ranking: "Code Wizard",
                    },{
                        where: {
                            id: userIdNeeded,
                        }
                    })
                    console.log("tell me what happens", updatedUser)
                    const userUpdated = await User.findOne({
                        where: {
                            id: userIdNeeded,
                            ranking: "Code Wizard",
                        }
                    })
                    console.log("did the user get updated",userUpdated)
                    delete userUpdated.dataValues["password"]
                    res.status(202).send({
                        user: {...userUpdated.dataValues},
                        completed: sendExercise,
                })
            } else {
                    const updatedUser = await User.update({
                        ranking: "Code Master",
                    },{
                        where: {
                            id: userIdNeeded,
                        }
                    })

                    const userUpdated = await User.findByPk(userIdNeeded)

                    delete userUpdated.dataValues["password"]
                    res.status(202).send({
                        user: {...userUpdated.dataValues},
                        completed: sendExercise,
                })
            }

        } catch(error){
            next(error)
        }
    }
)

router.get(
    "/:id/quiz",
    authMiddleware,
    async(req, res, next) => {

        if(!req.user){
            res.status(401).send("Sorry you aren't authorized, please login/sign-up to authorize yourself.")
        }

        const exerciseIdNeeded = parseInt(req.params.id)
        // console.log("questions ID test", exerciseIdNeeded)
        if(!exerciseIdNeeded){
            res.status(400).send("Url malfunctioned, please refresh and try again.")
        }

        try{
            const fecthQuizzes = await QuizQuestions.findAll({
                where: {
                    exerciseId: exerciseIdNeeded,
                }
            })
            // console.log("fetced quiz questions", fecthQuizzes)
            if(!fecthQuizzes){
                res.status(404).send("It seems our quizzes have vanished, give us a moment will we find them. Refresh to help us.")
            } else {
                res.status(202).send(fecthQuizzes)
            }

        } catch(error){
            next(error)
        }
    }
)

router.get(
    "/quiz/list",
    authMiddleware,
    async(req, res, next) => {
        try{
            const questions = await QuizQuestions.findAll()

            if(!questions){
                res.status(404).send("Sorry, it seems we couldn't find the questions, rest asured we are on it.")
            } else {
                res.status(202).send(questions)
            }

        } catch(error){
            next(error)
        }
    }
)

router.get(
    "/list",
    authMiddleware,
    async(req, res, next) => {
        try{
            const exercisesList = await Exercises.findAll()
            // console.log("exercises test", exercisesList)

            if(!exercisesList){
                res.status(404).send("Oops, exercises werent found, might be the server, we are working on it.")
            } else {
                res.status(202).send(exercisesList)
            }

        } catch(error){
            next(error)
        }
    }
)


module.exports = router