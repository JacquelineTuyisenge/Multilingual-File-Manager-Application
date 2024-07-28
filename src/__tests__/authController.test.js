const request = require('supertest');
const app = require('../app.js');
const User = require('../models/user.js');
const { mongoConnect, mongoDisconnect } = require('../mongo.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function logErrors(err, _req, _res, next) {
    console.log(err.stack);
    next(err);
}

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const comparePassword = async (enteredPassword, hashedPassword) => {
    return bcrypt.compare(enteredPassword, hashedPassword);
};

const Jest_request = request(app.use(logErrors));

const mockUser = {
    username: "user",
    email: "user2@gmail.com",
    password: "User123",
    confirmPassword: "User123"
};

const mockLoginUser = {
    email: "user2@gmail.com",
    password: "User123"
};

describe('Auth API Tests', () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterEach(async () => {
        await User.deleteMany({});
    });


    afterAll(async () => {
        await mongoDisconnect();
    });

    it("should register a user and return 201", async () => {
        const { body } = await Jest_request.post("/api/auth/register")
            .send(mockUser)
            .expect(201);

        expect(body.status).toEqual("SUCCESS");
        expect(body.message).toStrictEqual("User created successfully!");
        expect(body.data).toBeDefined(); // Ensure that a token is returned

        // Verify the user was created in the database
        const user = await User.findOne({ email: mockUser.email });
        expect(user).not.toBeNull();
        expect(user.password).not.toEqual(mockUser.password); // Ensure password is hashed
        expect(user.confirmPassword).not.toEqual(mockUser.confirmPassword); // Ensure confirmPassword is hashed
    });

    it("should login a user and return a token", async () => {
        // Register a user first
        const hashedPassword = await hashPassword(mockUser.password);
        const hashedConfirmPassword = await hashPassword(mockUser.confirmPassword);
        await User.create({
            username: mockUser.username,
            email: mockUser.email,
            password: hashedPassword,
            confirmPassword: hashedConfirmPassword
        });

        // Now attempt to login with the same credentials
        const { body } = await Jest_request.post("/api/auth/login")
            .send(mockLoginUser)
            .expect(200);

        expect(body._id).toBeDefined();
        expect(body.username).toEqual(mockUser.username);
        expect(body.email).toEqual(mockUser.email);
        expect(body.token).toBeDefined(); // Ensure that a token is returned
    });

    it("should not login a user with incorrect credentials", async () => {
        // Attempt to login with incorrect password
        const incorrectLoginUser = { ...mockLoginUser, password: "wrongPassword123" };

        const { body } = await Jest_request.post("/api/auth/login")
            .send(incorrectLoginUser)
            .expect(401);

        expect(body.message).toEqual("Invalid email or password");
    });

    it("should compare passwords correctly", async () => {
        const password = "User123";
        const hashedPassword = await hashPassword(password);

        const isMatch = await comparePassword(password, hashedPassword);
        expect(isMatch).toBe(true);

        const isNotMatch = await comparePassword("wrongPassword", hashedPassword);
        expect(isNotMatch).toBe(false);
    });
});
