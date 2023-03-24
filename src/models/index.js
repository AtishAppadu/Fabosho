// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, HeadArticles, Color } = initSchema(schema);

export {
  Product,
  HeadArticles,
  Color
};