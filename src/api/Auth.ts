import server from "./server";

export const login = (username: string, password: string) => {
    const result = server
        .post("/login", { username, password })
        .then((response) => {
            return response;
        });
    return result;
};

export default login;
