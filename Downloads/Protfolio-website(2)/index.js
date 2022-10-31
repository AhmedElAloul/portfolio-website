const express = require("express")
const app = express()
const path = require("path")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./config/db")

const PORT = process.env.PORT || 3003

connectDB()

// MiddleWare
app.use(express.json())

const pageRouter = require("./routes/pageRoutes")
const authRoutes = require("./routes/authRoutes")
const businessRoutes = require("./routes/businessRoutes")


// Template Engine and Views Folder
app.set("view engine", "ejs")
app.set("views", "views")


// Pages Routes
app.use("/", pageRouter)
app.use("/auth", authRoutes)
app.use("/business", businessRoutes)


app.use(express.static(path.join(__dirname, "public")))


// Routes
app.get("/", (req, res) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload)
})


//  Listening The app
app.listen(PORT, () => console.log(`Server is listing on : ${PORT}`))