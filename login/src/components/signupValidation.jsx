import React from 'react'

const sgnValidate = (value) => {
    let error = {}
    
    const fullName_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z]{2,}$/
    const lastName_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z]{2,}$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{3,}$/

    // if
}

export default sgnValidate
