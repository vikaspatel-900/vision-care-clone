

let form=document.getElementById("about-form")

form.addEventListener("submit", function(){

    let fName=document.getElementById("fname").value 
    let lName=document.getElementById("lname").value 
    let email=document.getElementById("email").value 
    let city=document.getElementById("city").value 
    let state=document.getElementById("state").value 
    let reason=document.getElementById("reason").value 
    let message=document.getElementById("message").value 



    let userData=JSON.parse(sessionStorage.getItem("userDetails")) ?? []

    userData.push({
        'First Name':fName,
        'Last Name':lName,
        'Email':email,
        'City':city,
        'State':state,
        'Reason':reason,
        'Message':message
    })


    sessionStorage.setItem("userDetails", JSON.stringify(userData))
})