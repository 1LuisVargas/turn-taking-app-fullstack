const validation = (value, type) => {
    switch (type) {
        case "email": //Validating email
            return String(value) 
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        case "password": //Validating password
            return String(value).length >= 6;
        case "username": //Validating username
            return String(value).length >= 2;
        default:
            return true;
    }
};

export default validation;