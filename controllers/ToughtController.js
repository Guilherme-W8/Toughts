import { where } from 'sequelize';
import Tought from '../models/Tought.js';
import User from '../models/User.js';

export default class ToughtController {
    static async showToughts(request, response) {
        return response.render('toughts/home');
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
        let emptyToughts = false;

        if (toughts.length === 0) {
            emptyToughts = true;
        }

        return response.render('toughts/dashboard', { toughts, emptyToughts });
    }

    static async delete(request, response) {
        const id = request.body.id;
        const UserId = request.session.userId;

        try {
            await Tought.destroy({
                where: {
                    id: id,
                    UserId: UserId
                }
            });

            request.flash('message', 'Pensamento excluido com sucesso!');
            request.session.save(() => {
                return response.redirect('/toughts/dashboard');
            });
        } catch (error) {
            console.log(`Erro inesperado: ${error}`);
        }
    }

    static createTought(request, response) {
        return response.render('toughts/create');
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
                return response.redirect('/toughts/dashboard');
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async toughtEdit(request, response) {
        const id = request.params.id;

        const tought = await Tought.findOne({
            raw: true,
            where: {
                id: id,
            }
        });

        response.render('toughts/edit', { tought });
    }

    static async toughtEditPost(request, response) {
        const id = request.body.id;

        const tought = {
            title: request.body.title
        }

        try {
            await Tought.update(tought, {
                where: {
                    id: id
                }
            });

            request.flash('message', 'Pensamento atualizado com sucesso!');
            request.session.save(() => {
                response.redirect('/toughts/dashboard');
            });
        } catch (error) {
            console.log(error);
        }
    }
}