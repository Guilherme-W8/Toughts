import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export default class AuthController {
    static login(request, response){
        response.render('auth/login');
    }

    static register(request, response){
        response.render('auth/register');
    }

    static async registerPost(request, response){
        const {name, email, password, confirmpassword} = request.body;

        // Verificar se as senhas correspondem
        if(password != confirmpassword){
            // flash message password
            request.flash('message', 'As senhas precisam ser iguais');
            response.render('auth/register');
            return;
        }

        // Checando se User já existe
        const checkUserExists = await User.findOne({
            where: {
                email: email
            }
        });

        if(checkUserExists){
            // flash message email exists
            request.flash('message', 'Email já cadastrado');
            response.render('auth/register');
            return;
        }

        // Criando senha
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt); 

        const user = {
            name: name,
            email: email,
            password: hashedPassword
        }

        try {
            const createdUser = await User.create(user);

            // Inicializando sessao
            request.session.userId = createdUser.id;

            request.flash('message', 'Cadastro realizado com sucesso');

            request.session.save(() => {
                response.redirect('/');
            });
        } catch (error){
            console.log(error);
        }
    }
}