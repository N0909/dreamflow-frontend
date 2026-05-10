import api from "../api/axios";

export async function signupUser(userData) {

    const response = await api.post(
        "/auth/sign-up",
        userData
    );

    return response.data;
}

export async function loginUser(userData) {
    
    const response = await api.post(
        '/auth/sign-in',
        userData
    )

    return response.data;
}