import { DataTypes } from 'sequelize';
import dbConnect from '../db/dbConnect.js';
import User from './User.js';

const Tought = dbConnect.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
});

Tought.belongsTo(User);
User.hasMany(Tought);

export default Tought;
