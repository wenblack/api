const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionsController {
    async create(request, response) {

        const { email, password } = request.body;

        // pego os dados do usuario
        const user = await knex("users").where({email}).first();

        // se o usuario não exisitir
        if(!user) {
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        // verificar se a senha está correta

        const passwordMatched = await compare(password, user.password);

        // se a senha está incorreta

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        } 

        const {secret, expiresIn} = authConfig.jwt;
        
        // criação do meu token de acesso

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return response.json({user, token});
        
    }
}

module.exports = SessionsController;