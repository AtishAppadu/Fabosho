// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ShoesArticles, BottomArticles, TopArticles, Product, HeadArticles, Color } = initSchema(schema);

export {
  ShoesArticles,
  BottomArticles,
  TopArticles,
  Product,
  HeadArticles,
  Color
};