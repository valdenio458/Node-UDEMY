import DataTypes from 'sequelize';
import db from '../db/conn.js';

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false //* só não pode ser nulo
    },
    occupation: {
        type: DataTypes.STRING,
        required: true //* não pode deixar vazio
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
});

export default User;
