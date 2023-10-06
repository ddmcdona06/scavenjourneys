import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
// eslint-disable-next-line import/no-extraneous-dependencies
import{ createDatabase, runSeeders, dropDatabase } from 'typeorm-extension'


import { User } from './entities/User'
import { Journey } from './entities/Journey'
import { Step } from './entities/Step'
import { JourneyProgress } from './entities/JourneyProgress'
import { StepProgress } from './entities/StepProgress'
import { Tag } from './entities/Tag'
import { Likes } from './entities/Likes'
import { Achievement } from './entities/Achievement'
import { UserAchievement } from './entities/UserAchievement'
import JourneySeeder from './seeding/seeds/journey.seeder';
import UserSeeder from './seeding/seeds/user.seeder';
import StepSeeder from './seeding/seeds/step.seeder';
import TagSeeder from './seeding/seeds/tag.seeder';
import journeyFactory from './seeding/factories/journey.factory';
import userFactory from './seeding/factories/user.factory';
import stepFactory from './seeding/factories/step.factory';
import tagFactory from './seeding/factories/tag.factory';

  const options: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database:'journeys',
  synchronize: true,
  logging: false,
  entities: [
    User,
    Journey,
    Step,
    JourneyProgress,
    StepProgress,
    Tag,
    Likes,
    Achievement,
    UserAchievement
  ]
};

  const AppDataSource = new DataSource(options);
  dropDatabase({options})
    .then(() => createDatabase({options}))
    .then(() => runSeeders(AppDataSource, {
      seeds: [UserSeeder, TagSeeder],
      factories: [userFactory, tagFactory]
    }))
    .then(() => runSeeders(AppDataSource, {
      seeds: [JourneySeeder],
      factories: [journeyFactory]
    }))
    .then(() => runSeeders(AppDataSource, {
      seeds: [StepSeeder],
      factories: [stepFactory]
    }))
    .then(() => console.log('Seed has seeded'))