import { Sequelize } from "sequelize";

const sequelize = new Sequelize('toughtsDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Sucesso na conexao ao banco de dados');
} catch(error) {
    console.log(`Ocorreu um erro na conexao: ${error}`);
}

export default sequelize;