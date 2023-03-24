import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerColor = {
  readonly Red?: string | null;
  readonly Blue?: string | null;
  readonly Black?: string | null;
}

type LazyColor = {
  readonly Red?: string | null;
  readonly Blue?: string | null;
  readonly Black?: string | null;
}

export declare type Color = LazyLoading extends LazyLoadingDisabled ? EagerColor : LazyColor

export declare const Color: (new (init: ModelInit<Color>) => Color)

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name?: string | null;
  readonly product_description?: string | null;
  readonly product_color?: Color | null;
  readonly product_price?: string | null;
  readonly product_size?: string | null;
  readonly product_details?: string | null;
  readonly headarticlesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name?: string | null;
  readonly product_description?: string | null;
  readonly product_color?: Color | null;
  readonly product_price?: string | null;
  readonly product_size?: string | null;
  readonly product_details?: string | null;
  readonly headarticlesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerHeadArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeadArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name?: string | null;
  readonly Head_Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeadArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeadArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name?: string | null;
  readonly Head_Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HeadArticles = LazyLoading extends LazyLoadingDisabled ? EagerHeadArticles : LazyHeadArticles

export declare const HeadArticles: (new (init: ModelInit<HeadArticles>) => HeadArticles) & {
  copyOf(source: HeadArticles, mutator: (draft: MutableModel<HeadArticles>) => MutableModel<HeadArticles> | void): HeadArticles;
}