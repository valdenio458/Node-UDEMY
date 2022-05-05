import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('toughts', 'root', 'flamengo61', { 
    host: 'localhost',
    dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Conexão realizada com sucesso!');

} catch (error) {
  console.log(`Erro ao conectar no banco de dados: ${error}`);
}

export default sequelize;

