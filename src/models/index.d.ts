import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerColor = {
  readonly ColorID?: string | null;
  readonly ColorName?: string | null;
  readonly ColorHex?: number | null;
}

type LazyColor = {
  readonly ColorID?: string | null;
  readonly ColorName?: string | null;
  readonly ColorHex?: number | null;
}

export declare type Color = LazyLoading extends LazyLoadingDisabled ? EagerColor : LazyColor

export declare const Color: (new (init: ModelInit<Color>) => Color)

type EagerShoesArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoesArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ShoesArticleName?: string | null;
  readonly ShoesArticlePrice?: number | null;
  readonly ShoesArticleDescription?: string | null;
  readonly ShoesArticleImage?: string | null;
  readonly Shoes_Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoesArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoesArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ShoesArticleName?: string | null;
  readonly ShoesArticlePrice?: number | null;
  readonly ShoesArticleDescription?: string | null;
  readonly ShoesArticleImage?: string | null;
  readonly Shoes_Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoesArticles = LazyLoading extends LazyLoadingDisabled ? EagerShoesArticles : LazyShoesArticles

export declare const ShoesArticles: (new (init: ModelInit<ShoesArticles>) => ShoesArticles) & {
  copyOf(source: ShoesArticles, mutator: (draft: MutableModel<ShoesArticles>) => MutableModel<ShoesArticles> | void): ShoesArticles;
}

type EagerBottomArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BottomArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BottomArticleName?: string | null;
  readonly BottomArticlePrice?: number | null;
  readonly BottomArticleDescription?: string | null;
  readonly BottomArticleImage?: string | null;
  readonly Bottom_Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBottomArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BottomArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BottomArticleName?: string | null;
  readonly BottomArticlePrice?: number | null;
  readonly BottomArticleDescription?: string | null;
  readonly BottomArticleImage?: string | null;
  readonly Bottom_Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BottomArticles = LazyLoading extends LazyLoadingDisabled ? EagerBottomArticles : LazyBottomArticles

export declare const BottomArticles: (new (init: ModelInit<BottomArticles>) => BottomArticles) & {
  copyOf(source: BottomArticles, mutator: (draft: MutableModel<BottomArticles>) => MutableModel<BottomArticles> | void): BottomArticles;
}

type EagerTopArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TopArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TopArticleName?: string | null;
  readonly TopArticlePrice?: number | null;
  readonly TopArticleDescription?: string | null;
  readonly TopArticleImage?: string | null;
  readonly Top_Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TopArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TopArticleName?: string | null;
  readonly TopArticlePrice?: number | null;
  readonly TopArticleDescription?: string | null;
  readonly TopArticleImage?: string | null;
  readonly Top_Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TopArticles = LazyLoading extends LazyLoadingDisabled ? EagerTopArticles : LazyTopArticles

export declare const TopArticles: (new (init: ModelInit<TopArticles>) => TopArticles) & {
  copyOf(source: TopArticles, mutator: (draft: MutableModel<TopArticles>) => MutableModel<TopArticles> | void): TopArticles;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name?: string | null;
  readonly product_type?: string | null;
  readonly product_description?: string | null;
  readonly product_price?: number | null;
  readonly product_image?: string | null;
  readonly product_color?: Color | null;
  readonly headarticlesID: string;
  readonly toparticlesID: string;
  readonly bottomarticlesID: string;
  readonly shoesarticlesID: string;
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
  readonly product_type?: string | null;
  readonly product_description?: string | null;
  readonly product_price?: number | null;
  readonly product_image?: string | null;
  readonly product_color?: Color | null;
  readonly headarticlesID: string;
  readonly toparticlesID: string;
  readonly bottomarticlesID: string;
  readonly shoesarticlesID: string;
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
  readonly HeadArticleName?: string | null;
  readonly Head_Products?: (Product | null)[] | null;
  readonly HeadArticlePrice?: number | null;
  readonly HeadArticleDescription?: string | null;
  readonly HeadArticleImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeadArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeadArticles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly HeadArticleName?: string | null;
  readonly Head_Products: AsyncCollection<Product>;
  readonly HeadArticlePrice?: number | null;
  readonly HeadArticleDescription?: string | null;
  readonly HeadArticleImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HeadArticles = LazyLoading extends LazyLoadingDisabled ? EagerHeadArticles : LazyHeadArticles

export declare const HeadArticles: (new (init: ModelInit<HeadArticles>) => HeadArticles) & {
  copyOf(source: HeadArticles, mutator: (draft: MutableModel<HeadArticles>) => MutableModel<HeadArticles> | void): HeadArticles;
}