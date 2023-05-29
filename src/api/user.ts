import server from "./server";

export const login = (username: string, password: string) => {
    const result = server
        .post("/login", { username, password })
        .then((response) => {
            return response;
        });
    return result;
};

export const getUser = (token: string) => {
    const result = server
        .get("/getUser", {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response;
        });
    return result;
};

export default login;
