let userInput: unknown; //more restrictive then any making it better but union is still better if type is known
let userName: string;


userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
    userName = userInput; // will clear non type errors through type checks
}

//never type
function generateError(message: string, errorCode: number): never{
    throw {message, errorCode};
}

generateError('An Error Occured!', 401);