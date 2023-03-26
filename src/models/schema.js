export const schema = {
    "models": {
        "ShoesArticles": {
            "name": "ShoesArticles",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ShoesArticleName": {
                    "name": "ShoesArticleName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ShoesArticlePrice": {
                    "name": "ShoesArticlePrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ShoesArticleDescription": {
                    "name": "ShoesArticleDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ShoesArticleImage": {
                    "name": "ShoesArticleImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Shoes_Products": {
                    "name": "Shoes_Products",
                    "isArray": true,
                    "type": {
                        "model": "ShoesArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "shoesArticles"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ShoesArticles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "BottomArticles": {
            "name": "BottomArticles",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "BottomArticleName": {
                    "name": "BottomArticleName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BottomArticlePrice": {
                    "name": "BottomArticlePrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "BottomArticleDescription": {
                    "name": "BottomArticleDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BottomArticleImage": {
                    "name": "BottomArticleImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Bottom_Products": {
                    "name": "Bottom_Products",
                    "isArray": true,
                    "type": {
                        "model": "BottomArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "bottomArticles"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "BottomArticles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TopArticles": {
            "name": "TopArticles",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "TopArticleName": {
                    "name": "TopArticleName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "TopArticlePrice": {
                    "name": "TopArticlePrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "TopArticleDescription": {
                    "name": "TopArticleDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "TopArticleImage": {
                    "name": "TopArticleImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Top_Products": {
                    "name": "Top_Products",
                    "isArray": true,
                    "type": {
                        "model": "TopArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "topArticles"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TopArticles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Product": {
            "name": "Product",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "product_name": {
                    "name": "product_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "product_type": {
                    "name": "product_type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "product_description": {
                    "name": "product_description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "product_price": {
                    "name": "product_price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "product_image": {
                    "name": "product_image",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": true,
                    "attributes": []
                },
                "product_color": {
                    "name": "product_color",
                    "isArray": false,
                    "type": {
                        "nonModel": "Color"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "toparticlesID": {
                    "name": "toparticlesID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "bottomarticlesID": {
                    "name": "bottomarticlesID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "shoesarticlesID": {
                    "name": "shoesarticlesID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "headarticless": {
                    "name": "headarticless",
                    "isArray": true,
                    "type": {
                        "model": "HeadArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "product"
                        ]
                    }
                },
                "toparticless": {
                    "name": "toparticless",
                    "isArray": true,
                    "type": {
                        "model": "TopArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "product"
                        ]
                    }
                },
                "bottomarticless": {
                    "name": "bottomarticless",
                    "isArray": true,
                    "type": {
                        "model": "BottomArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "product"
                        ]
                    }
                },
                "shoesarticless": {
                    "name": "shoesarticless",
                    "isArray": true,
                    "type": {
                        "model": "ShoesArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "product"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Products",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTopArticles",
                        "fields": [
                            "toparticlesID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byBottomArticles",
                        "fields": [
                            "bottomarticlesID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byShoesArticles",
                        "fields": [
                            "shoesarticlesID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HeadArticles": {
            "name": "HeadArticles",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadArticleName": {
                    "name": "HeadArticleName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Head_Products": {
                    "name": "Head_Products",
                    "isArray": true,
                    "type": {
                        "model": "HeadArticlesProduct"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "headArticles"
                        ]
                    }
                },
                "HeadArticlePrice": {
                    "name": "HeadArticlePrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "HeadArticleDescription": {
                    "name": "HeadArticleDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "HeadArticleImage": {
                    "name": "HeadArticleImage",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "HeadArticles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ShoesArticlesProduct": {
            "name": "ShoesArticlesProduct",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "shoesArticlesId": {
                    "name": "shoesArticlesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "shoesArticles": {
                    "name": "shoesArticles",
                    "isArray": false,
                    "type": {
                        "model": "ShoesArticles"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "shoesArticlesId"
                        ]
                    }
                },
                "product": {
                    "name": "product",
                    "isArray": false,
                    "type": {
                        "model": "Product"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "productId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ShoesArticlesProducts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byShoesArticles",
                        "fields": [
                            "shoesArticlesId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProduct",
                        "fields": [
                            "productId"
                        ]
                    }
                }
            ]
        },
        "BottomArticlesProduct": {
            "name": "BottomArticlesProduct",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "bottomArticlesId": {
                    "name": "bottomArticlesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "bottomArticles": {
                    "name": "bottomArticles",
                    "isArray": false,
                    "type": {
                        "model": "BottomArticles"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "bottomArticlesId"
                        ]
                    }
                },
                "product": {
                    "name": "product",
                    "isArray": false,
                    "type": {
                        "model": "Product"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "productId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "BottomArticlesProducts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byBottomArticles",
                        "fields": [
                            "bottomArticlesId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProduct",
                        "fields": [
                            "productId"
                        ]
                    }
                }
            ]
        },
        "TopArticlesProduct": {
            "name": "TopArticlesProduct",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "topArticlesId": {
                    "name": "topArticlesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "topArticles": {
                    "name": "topArticles",
                    "isArray": false,
                    "type": {
                        "model": "TopArticles"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "topArticlesId"
                        ]
                    }
                },
                "product": {
                    "name": "product",
                    "isArray": false,
                    "type": {
                        "model": "Product"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "productId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TopArticlesProducts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTopArticles",
                        "fields": [
                            "topArticlesId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProduct",
                        "fields": [
                            "productId"
                        ]
                    }
                }
            ]
        },
        "HeadArticlesProduct": {
            "name": "HeadArticlesProduct",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "headArticlesId": {
                    "name": "headArticlesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "product": {
                    "name": "product",
                    "isArray": false,
                    "type": {
                        "model": "Product"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "productId"
                        ]
                    }
                },
                "headArticles": {
                    "name": "headArticles",
                    "isArray": false,
                    "type": {
                        "model": "HeadArticles"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "headArticlesId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "HeadArticlesProducts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProduct",
                        "fields": [
                            "productId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHeadArticles",
                        "fields": [
                            "headArticlesId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "Color": {
            "name": "Color",
            "fields": {
                "ColorID": {
                    "name": "ColorID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "ColorName": {
                    "name": "ColorName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ColorHex": {
                    "name": "ColorHex",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.3.6",
    "version": "a1eaa3cce8fbd40b2b64d0ed0c7de992"
};