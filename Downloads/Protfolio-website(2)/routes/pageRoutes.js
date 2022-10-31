const express = require("express")
const router = express.Router()

// Projects Routes
router.get("/projects", (req, res, next) => {

    const payload = {
        pageTitle: "Projects"
    }

    res.status(200).render("projects", payload)
})

// About Routes
router.get("/about", (req, res, next) => {

    const payload = {
        pageTitle: "About"
    }

    res.status(200).render("about", payload)
})

// Contact Routes
router.get("/contact", (req, res, next) => {

    const payload = {
        pageTitle: "Contact"
    }

    res.status(200).render("contact", payload)

})

// Services Routes
router.get("/services", (req, res, next) => {

    const payload = {
        pageTitle: "Services"
    }

    res.status(200).render("services", payload)
})

module.exports = router