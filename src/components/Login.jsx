import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "../store/slices/userSlice";
import Form from "./Form";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.id,
                        token: user.accessToken,
                    })
                );
                navigate("/");
            })
            .catch((error) => { alert('invalid user') });
    };
    return <Form title={"sign in"} handleClick={handleLogin} />;
}
