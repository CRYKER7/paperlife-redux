import { authTypes } from "../Types/authTypes";

export const AuthReducer = ( state, action ) => {

    switch ( action.type ) {
        case authTypes.login:
            return { log: true };
        
        case authTypes.logout:
            return { log: false };

        case "add":
           return[...state, action.payload]

        case "delete":
           return state.filter ((actual) => actual.id !== action.payload);
        case "productos":
            return 
        default: 
           return state;
    };


};
