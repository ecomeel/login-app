import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeUser } from "../store/slices/userSlice";
import { useAuth } from "../hooks/use-auth";

export default function HomePage() {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();
    return isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
    ) : (
        <Navigate to="/login" />
    );
    // <div>
    //     <Navigate to="/login" />
    // </div>
}
