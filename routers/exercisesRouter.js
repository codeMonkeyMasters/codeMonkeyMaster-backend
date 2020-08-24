const { Router } = require("express")
const authMiddleware = require("../auth/middleware")

const Exercises = require("../models").exercise

const router = new Router()

router.get(
    "/list",
    authMiddleware,
    async(req, res, next) => {
        try{
            const exercisesList = await Exercises.findAll()
            console.log("exercises test", exercisesList)

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