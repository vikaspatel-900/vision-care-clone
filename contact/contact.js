

let url="https://script.google.com/macros/s/AKfycbzk0MFygkmcWfrdVfLngwRzTIylEPQEx15mT-k25sHZvPxrIpyB2hBKWmZR8Z0GGliBxQ/exec"


let form=document.getElementById("contact-form")


form.addEventListener("submit", function(e){
    e.preventDefault();

    let d=new FormData(form)
    fetch(url,{
     method:"POST",
     body:d
    }).then(resp=>alert("Form data submit successfuly")).then(result=>window.location.reload())



    setTimeout(function(){
        alert("form submited successfuly")
        window.location.reload()
    },1000)
    
})




   
