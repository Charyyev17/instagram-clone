import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute ({ children }) {

    const { user } = useSelector(state => state.auth)
    const location = useLocation()

    // eğer user yoksa login sayfasına yönlendiriyor
    if (!user) {
        // Link'in tersine Navigate, koşul sağlandığında direkt olarak yönlendirme yapıyor
        return <Navigate to="/auth/login" replace={true} state={{
            // kullanıcı hangi url'den geldiyse oraya yönlendiriliyor
            return_url: location.pathname
        }} />
    }

    return (
        <div>
            {children}
        </div>
    )
}