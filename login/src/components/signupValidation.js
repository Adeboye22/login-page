const sgnValidate = (value) => {
    let error = {}
    
    // Use a regex constraint for the form patterns
    const firstName_pattern = /^[a-zA-Z]{2,}$/
    const lastName_pattern = /^[a-zA-Z]{2,}$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^[a-zA-Z0-9]{3,}$/

    if(value.firstname === ""){
        error.firstname = "This field cannot be empty!"
    } else if(!firstName_pattern.test(value.firstname)){
        error.firstname = "Input more than 2 characters with a capital letter"
    } else{
        error.firstname = ""
    }
    if(value.lastname === ""){
        error.lastname = "This field cannot be empty!"
    } else if(!lastName_pattern.test(value.lastname)){
        error.lastname = "Input more than 2 characters with a capital letter"
    } else{
        error.lastname = ""
    }
    if(value.email === ""){
        error.lastname = "This field cannot be empty!"
    } else if(!email_pattern.test(value.email)){
        error.email = "The mail you entered is incorrect!"
    } else{
        error.email = ""
    }
    if(value.password === ""){
        error.password = "This field cannot be empty!"
    } else if(!password_pattern.test(value.password)){
        error.password = "Password must be more than three characters!"
    } else{
        error.password = ""
    }
}

export default sgnValidate
