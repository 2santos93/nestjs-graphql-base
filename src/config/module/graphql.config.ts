import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

export const graphqlConfig = {
  driver: ApolloDriver,
  playground: false,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  plugins: [ApolloServerPluginLandingPageLocalDefault()]
};
