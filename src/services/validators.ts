

import { Request } from "express";

export const isValidForm =  (req: Request): string | boolean => {
    const { name, email, message, address } = req.body;

    if (!name || !email || !message) {
        return("Name, email, and message are required fields.");
        
    }

    if (!isValidEmail(email)) {
        return("Invalid email format.");
    }
    return true;

};

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
