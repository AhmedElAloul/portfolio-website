// 

//     The File name   =    Ahmed's Portfolio
//     Student’s Name  =    Ahmed El-Aloul
//     StudentID       =    301170922
//     Date            =    2022-09-30

// 




const form = document.getElementById("form")

form.onsubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const budget = e.target.budget.value
    const message = e.target.projectBrief.value

    if (!name | !email | !budget | !message) {
        alert("All Field Are Required")
    }
    else {
        console.log({ name, email, budget, brief: message });
        e.target.reset()
        alert("Message has been sent")
        window.location.href = "/"
    }

}