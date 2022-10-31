const express = require("express")
const router = express.Router()
const { AuthModel } = require("../model/AuthModel")
const { BusinessModel } = require("../model/BusinessModel")

// Business Route to Render business view/page
router.get("/", async (req, res, next) => {

    const business = await BusinessModel.find()

    const payload = {
        pageTitle: "Business Contact List",
        business: business
    }

    res.status(200).render("business/index", payload)
})

// Business update Route to Render business update view/page
router.get("/update/:id", async (req, res, next) => {

    const id = req.params.id
    const business = await BusinessModel.findById(id)

    const payload = {
        pageTitle: "Business Contact List Update",
        business: business
    }

    res.status(200).render("business/update", payload)
})

// Business update Route to update business info view/page
router.post("/update/:id", async (req, res, next) => {

    try {
        const userId = req.body.userId
        const userExists = await AuthModel.findById(userId)

        if (!userExists) {
            return res.status(404).json({ message: "Unauthorized User Can't update the business" })
        }

        const business = req.body.business
        const updatedBusiness = await BusinessModel.findByIdAndUpdate(req.body.businessId, business, { new: true })

        if (!updatedBusiness) {
            return res.status(404).json({ message: "Business not found" })
        }

        return res.status(201).json({ business: updatedBusiness })

    } catch (error) {
        res.status(404).json(error.message)
    }
})

// Business delete Route to delete a business view/page
router.delete("/delete", async (req, res, next) => {

    try {
        const userId = req.body.userId
        const userExists = await AuthModel.findById(userId)

        if (!userExists) {
            return res.status(404).send("Unauthorized User")
        }

        const businessId = req.body.businessId
        const business = await BusinessModel.findById(businessId)
        const isDelete = business.remove()

        res.status(201).json(isDelete)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

module.exports = router