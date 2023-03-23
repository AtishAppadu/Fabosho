// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TopArticles, Product, HeadArticles, Color } = initSchema(schema);

export {
  TopArticles,
  Product,
  HeadArticles,
  Color
};