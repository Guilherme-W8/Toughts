import Tought from '../models/Tought.js';
import User from '../models/User.js';

export default class ToughtController {
    static async showToughts(request, response) {
        response.render('toughts/home');
    }

    static async dashboard(request, response) {
        response.render('toughts/dashboard');
    }

    static createTought(request, response) {
        response.render('toughts/create');
    }

    static async toughtPost(request, response) {
        const tought = {
            title: request.body.title,
            UserId: request.session.userId
        }

        try {
            await Tought.create(tought);

            request.flash('message', 'Pensamento criado com sucesso!');
            request.session.save(() => {
                response.redirect('/toughts/dashboard');
            });
        } catch (error) {
            console.log(error);
        }
    }
}