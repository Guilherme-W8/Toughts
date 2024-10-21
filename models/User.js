import { DataTypes } from 'sequelize';
import dbConnect from '../db/dbConnect.js';

const User = dbConnect.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
});

export default User;
