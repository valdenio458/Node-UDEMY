import DataTypes from 'sequelize';
import db from '../db/conn.js';
import User from './User.js';

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },    
    
});

User.hasMany(Address); //* Um usuário tem vários endereços
Address.belongsTo(User); //* Um endereço pertence a um usuário


export default Address;
          


