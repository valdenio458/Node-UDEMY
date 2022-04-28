import  { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodesequelize', 'root', 'flamengo61', {
    host: 'localhost',
    dialect: 'mysql'
});

// try {      
//         sequelize.authenticate();
//         console.log('Conexão realizada com sucesso!');

// } catch (error) {
//     console.log('Não foi possível conectar ao banco de dados!', error);
// }   
export default sequelize;
    