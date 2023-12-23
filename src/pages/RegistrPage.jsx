import { Link } from "react-router-dom";

import SignUp from "../components/SignUp";

export default function RegistrPage() {
    return (
        <div>
            <h1>Registration</h1>
            <SignUp />
            <p>
                Already have an account?
                <Link to="/login">Sign in</Link>
            </p>
        </div>
    );
}
