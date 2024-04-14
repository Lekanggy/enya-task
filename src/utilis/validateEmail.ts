function validateEmail(email:string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePassword(password:string) {
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6}$/;
    return passwordPattern.test(password);
}

export function validateCredentials(email:string, password:string) {
    return validateEmail(email) && validatePassword(password);
}
