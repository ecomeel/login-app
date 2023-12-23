import { Navigate } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <Navigate to="/login" />
        </div>
    )
}