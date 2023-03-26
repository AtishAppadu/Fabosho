import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



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
  readonly Shoes_Products?: (ShoesArticlesProduct | null)[] | null;
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
  readonly Shoes_Products: AsyncCollection<ShoesArticlesProduct>;
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
  readonly Bottom_Products?: (BottomArticlesProduct | null)[] | null;
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
  readonly Bottom_Products: AsyncCollection<BottomArticlesProduct>;
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
  readonly Top_Products?: (TopArticlesProduct | null)[] | null;
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
  readonly Top_Products: AsyncCollection<TopArticlesProduct>;
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
  readonly product_name: string;
  readonly product_type: string;
  readonly product_description?: string | null;
  readonly product_price?: number | null;
  readonly product_image: string;
  readonly product_color?: Color | null;
  readonly toparticlesID?: string | null;
  readonly bottomarticlesID?: string | null;
  readonly shoesarticlesID?: string | null;
  readonly headarticless?: (HeadArticlesProduct | null)[] | null;
  readonly toparticless?: (TopArticlesProduct | null)[] | null;
  readonly bottomarticless?: (BottomArticlesProduct | null)[] | null;
  readonly shoesarticless?: (ShoesArticlesProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name: string;
  readonly product_type: string;
  readonly product_description?: string | null;
  readonly product_price?: number | null;
  readonly product_image: string;
  readonly product_color?: Color | null;
  readonly toparticlesID?: string | null;
  readonly bottomarticlesID?: string | null;
  readonly shoesarticlesID?: string | null;
  readonly headarticless: AsyncCollection<HeadArticlesProduct>;
  readonly toparticless: AsyncCollection<TopArticlesProduct>;
  readonly bottomarticless: AsyncCollection<BottomArticlesProduct>;
  readonly shoesarticless: AsyncCollection<ShoesArticlesProduct>;
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
  readonly Head_Products?: (HeadArticlesProduct | null)[] | null;
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
  readonly Head_Products: AsyncCollection<HeadArticlesProduct>;
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

type EagerShoesArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoesArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shoesArticlesId?: string | null;
  readonly productId?: string | null;
  readonly shoesArticles: ShoesArticles;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoesArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoesArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shoesArticlesId?: string | null;
  readonly productId?: string | null;
  readonly shoesArticles: AsyncItem<ShoesArticles>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoesArticlesProduct = LazyLoading extends LazyLoadingDisabled ? EagerShoesArticlesProduct : LazyShoesArticlesProduct

export declare const ShoesArticlesProduct: (new (init: ModelInit<ShoesArticlesProduct>) => ShoesArticlesProduct) & {
  copyOf(source: ShoesArticlesProduct, mutator: (draft: MutableModel<ShoesArticlesProduct>) => MutableModel<ShoesArticlesProduct> | void): ShoesArticlesProduct;
}

type EagerBottomArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BottomArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bottomArticlesId?: string | null;
  readonly productId?: string | null;
  readonly bottomArticles: BottomArticles;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBottomArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BottomArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bottomArticlesId?: string | null;
  readonly productId?: string | null;
  readonly bottomArticles: AsyncItem<BottomArticles>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BottomArticlesProduct = LazyLoading extends LazyLoadingDisabled ? EagerBottomArticlesProduct : LazyBottomArticlesProduct

export declare const BottomArticlesProduct: (new (init: ModelInit<BottomArticlesProduct>) => BottomArticlesProduct) & {
  copyOf(source: BottomArticlesProduct, mutator: (draft: MutableModel<BottomArticlesProduct>) => MutableModel<BottomArticlesProduct> | void): BottomArticlesProduct;
}

type EagerTopArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TopArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly topArticlesId?: string | null;
  readonly productId?: string | null;
  readonly topArticles: TopArticles;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TopArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly topArticlesId?: string | null;
  readonly productId?: string | null;
  readonly topArticles: AsyncItem<TopArticles>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TopArticlesProduct = LazyLoading extends LazyLoadingDisabled ? EagerTopArticlesProduct : LazyTopArticlesProduct

export declare const TopArticlesProduct: (new (init: ModelInit<TopArticlesProduct>) => TopArticlesProduct) & {
  copyOf(source: TopArticlesProduct, mutator: (draft: MutableModel<TopArticlesProduct>) => MutableModel<TopArticlesProduct> | void): TopArticlesProduct;
}

type EagerHeadArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeadArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly headArticlesId?: string | null;
  readonly product: Product;
  readonly headArticles: HeadArticles;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeadArticlesProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeadArticlesProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly headArticlesId?: string | null;
  readonly product: AsyncItem<Product>;
  readonly headArticles: AsyncItem<HeadArticles>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HeadArticlesProduct = LazyLoading extends LazyLoadingDisabled ? EagerHeadArticlesProduct : LazyHeadArticlesProduct

export declare const HeadArticlesProduct: (new (init: ModelInit<HeadArticlesProduct>) => HeadArticlesProduct) & {
  copyOf(source: HeadArticlesProduct, mutator: (draft: MutableModel<HeadArticlesProduct>) => MutableModel<HeadArticlesProduct> | void): HeadArticlesProduct;
}