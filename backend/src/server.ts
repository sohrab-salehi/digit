import express, { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import cors from "cors";
import fs from "fs";

const app = express();
const secretKey: Secret = "digitSecretKey";
const port = 8000;
const usersFilePath = "users.json";

app.use(express.json());
app.use(cors());

app.post("/register", (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Read the existing user data from the JSON file
    const usersData = getUsersData();

    // Check if the username already exists
    if (usersData.some((user: any) => user.username === username)) {
        return res.status(400).json({ error: "Username already exists" });
    }

    usersData.push({ username, password });

    // Update the JSON file with the new user data
    updateUsersData(usersData);

    res.json({ message: "User registered successfully" });
});

app.post("/login", (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Read the existing user data from the JSON file
    const usersData = getUsersData();

    const user = usersData.find(
        (userData: any) => userData.username === username
    );
    if (user && user.password === password) {
        const token = jwt.sign({ username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
});

app.get("/getUser", authenticateToken, (req: Request, res: Response) => {
    res.json({ username: (req as any).user.username });
});

function getUsersData(): { username: string; password: string }[] {
    try {
        const fileData = fs.readFileSync(usersFilePath, "utf-8");
        return fileData ? JSON.parse(fileData) : [];
    } catch (err) {
        return [];
    }
}

function updateUsersData(usersData: { username: string; password: string }[]) {
    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Missing token" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" });
        }

        (req as any).user = decoded;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
