import * as userRepo from "../repositories/user.repository.js";

export async function createUser({ name, email }) {
    if (!name || !email) {
        throw new Error("name and email are required");
    }
    const exists = await userRepo.findByEmail(email);
    if (exists) throw new Error("email already exists");
    return userRepo.create({ name, email });
}

export async function getUserById(id) {
    const user = await userRepo.findById(id);
    if (!user) throw new Error("user not found");
    return user;
}
