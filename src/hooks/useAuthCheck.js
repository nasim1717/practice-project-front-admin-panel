import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/auth/authSlice";

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);
    useEffect(() => {
        const localAuth = localStorage.getItem("auth");
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.accesstoken && auth?.user)
                dispatch(userLogin({ accesstoken: auth.accesstoken, user: auth.user }));
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
};

export default useAuthCheck;