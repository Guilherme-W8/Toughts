import Tought from '../models/Tought.js';
import User from '../models/User.js';

export default class ToughtController {
    static showToughts(request, response){
        console.log('estou aqui')
        response.render('toughts/home');
    }
}