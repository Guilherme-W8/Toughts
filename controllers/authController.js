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
            // flash message
            request.flash('message', 'As senhas precisam ser iguais');
            response.render('auth/register');
            return;
        }
    }
}