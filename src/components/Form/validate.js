export default function validate({username, password}) {
    var errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if(!regexEmail.test(username)) errors.username = 'Correo electrónico no valido';
    if(!username) errors.username = 'Username vacio';
    if(username.length > 35) errors.username = 'El username no puede tener más de 35 caracteres';
    if(!password.match(/\d/)) errors.password = 'Por lo menos debe tener 1 número';
    if(password.length < 6 && password.length > 10) errors.password = 'Password debe tener entre 6 y 10 caracteres';
    return errors;
}