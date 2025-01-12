export const checkDataValidation = (name, email, password)=>{
    
    const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(name!=null & !isNameValid)
        return "Name is not valid";

    if(!isEmailValid)
        return "Email Id is invalid";

    if(!isPasswordValid)
        return "Password does not match the rules";
}