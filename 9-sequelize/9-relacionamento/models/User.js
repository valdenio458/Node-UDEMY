import DataTypes from 'sequelize';
import db from '../db/conn.js';

const Attributes = {
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
    }    
}

const User = db.define('User', Attributes,
    {
    tableName: 'users', //* nome da tabela
});

export default User;
