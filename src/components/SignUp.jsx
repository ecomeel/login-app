import React from "react";
import { useDispatch } from "react-redux";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "./Form";
import { setUser } from "../store/slices/userSlice";

export default function SignUp() {
    const dispatch = useDispatch();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };
    return (
        <Form 
            title={'sign up'}
            handleClick={handleRegister}
        />
    );
}
