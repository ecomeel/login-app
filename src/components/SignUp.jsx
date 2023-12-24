import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "./Form";
import { setUser } from "../store/slices/userSlice";

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.id,
                        token: user.accessToken,
                    })
                );
                navigate("/");
            })
            .catch(console.error);
    };
    return <Form title={"sign up"} handleClick={handleRegister} />;
}
