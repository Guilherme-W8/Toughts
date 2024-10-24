import Tought from '../models/Tought.js';
import User from '../models/User.js';

export default class ToughtController {
    static async showToughts(request, response) {
        response.render('toughts/home');
    }

    static async dashboard(request, response) {
        const id = request.session.userId;

        const user = await User.findOne({
            where: {
                id: id
            },

            include: Tought,
            plain: true
        });

        if (!user) {
            return response.redirect('/login');
        }

        const toughts = user.Toughts.map((result) => result.dataValues);
        return response.render('toughts/dashboard', { toughts });
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