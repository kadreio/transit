import {Sequelize} from 'sequelize-typescript';
import { Stop } from './models/stop';

const sequelize = new Sequelize({
  database: 'postgres',
  dialect: 'postgres',
  username: 'postgresql',
  host: 'postgres',
  password: 'docker',
  dialectOptions: { ssl: false }
});

sequelize.addModels([Stop]);

export default sequelize;
