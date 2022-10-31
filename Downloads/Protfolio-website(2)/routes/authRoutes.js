const express = require("express")
const router = express.Router()
const { AuthModel } = require("../model/AuthModel")

// Login Route to Render login view/page
router.get("/login", (req, res, next) => {

    const payload = {
        pageTitle: "Login"
    }

    res.status(200).render("auth/login", payload)
})

// Login Route to check the user
router.post("/login", async (req, res, next) => {

    try {
        const userInfo = req.body
        const userExists = await AuthModel.findOne({ username: userInfo.username, password: userInfo.password })

        if (!userExists) {
            return res.status(404).json({ message: "Username or Password was incorrect" })
        }

        return res.status(200).json({ user: userExists })
    } catch (error) {
        res.status(401).send(error.message)
    }
})

module.exports = router