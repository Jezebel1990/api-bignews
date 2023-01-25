import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdUserService = (idUser) => User.findById(idUser);

const updateUserService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate({ _id: id },{ name, username, email, password, avatar, background }
)

export default {
    createService,
    findAllService,
    findByIdUserService,
    updateUserService,
};