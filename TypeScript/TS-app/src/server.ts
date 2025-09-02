import express, { Request, Response, NextFunction } from 'express';
import json from 'body-parser';

interface User {
    id: Number;
    userName: string;
    email: string;
}

//initialize express App
const app = express();
const PORT = process.env.PORT || 3000;

// In-Memory Database
const users: User[] = [
    { id: 1, userName: "Rohan", email: "rohan@gmail.com" },
    { id: 2, userName: "Ravi", email: "ravi@gmail.com" }
];

//Routes

app.get('/api/users', (req: Request, res: Response) => {
    res.json(users);
});

app.get('/api/users/:id', (req: Request, res: Response) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({
            message: 'user not found'
        });
    }
    res.json(user);
});

app.post('/api/users', (req: Request, res: Response) => {
    const { userName, email } = req.body;
    if (!userName || !email) {
        return res.status(404).json({
            message: 'userName and email are required'
        });
    }

    const newUser: User = {
        id: users.length + 1,
        userName,
        email,
    }

    users.push(newUser);
    res.status(201).json(newUser);
});

//Error handling Middleware

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'something went wrong'
    });
});


app.listen(PORT, () => {
    console.log(`Server is running of http://localhost:${PORT}`);
})