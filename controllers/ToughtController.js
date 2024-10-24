import Tought from '../models/Tought.js';
import User from '../models/User.js';

export default class ToughtController {
    static async showToughts(request, response) {
        response.render('toughts/home');
    }

    static async dashboard(request, response) {
        response.render('toughts/dashboard');
    }
}