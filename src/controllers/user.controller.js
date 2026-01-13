import * as userService from "../services/user.service.js";

export async function createUser(req, res, next) {
    try {
        const { name, email } = req.body;
        const out = await userService.createUser({ name, email });
        res.status(201).json(out);
    } catch (err) {
        next(err);
    }
}

export async function getUserById(req, res, next) {
    try {
        const { id } = req.params;
        const out = await userService.getUserById(id);
        res.status(200).json(out);
    } catch (err) {
        next(err);
    }
}
