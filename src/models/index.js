// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ShoesArticles, BottomArticles, TopArticles, Product, HeadArticles, ShoesArticlesProduct, BottomArticlesProduct, TopArticlesProduct, HeadArticlesProduct, Color } = initSchema(schema);

export {
  ShoesArticles,
  BottomArticles,
  TopArticles,
  Product,
  HeadArticles,
  ShoesArticlesProduct,
  BottomArticlesProduct,
  TopArticlesProduct,
  HeadArticlesProduct,
  Color
};