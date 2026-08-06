import { useAuth0 } from "@auth0/auth0-react";

export function useAuth() {
    const auth = useAuth0();

    const signup = () =>
        auth.loginWithRedirect({
            authorizationParams: {
                screen_hint: "signup",
            },
        });

    const logout = () =>
        auth.logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });

    return {
        ...auth,
        signup,
        logout,
    };
}