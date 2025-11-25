export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  price: number;
  mrp?: number;
  unit: string;
  availableSizes?: ProductSize[];
  image: string;
  inStock: boolean;
}

export enum ProductCategory {
  VERMICOMPOST = "vermicompost",
  EGGSHELL = "eggshell",
  MUSHROOM = "mushroom",
  COW_DUNG = "cow dung",
  MUSTARD_CAKE = "mustard cake",
  POTTING_SOIL = "potting soil",
  VERMIWASH = "vermiwash",
}

export interface ProductSize {
  weight: string;
  price: number;
  inStock: boolean;
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  [ProductCategory.VERMICOMPOST]: "Vermicompost",
  [ProductCategory.EGGSHELL]: "Egg Shell",
  [ProductCategory.MUSHROOM]: "Mushroom",
  [ProductCategory.COW_DUNG]: "Cow Dung Powder",
  [ProductCategory.MUSTARD_CAKE]: "Mustard Cake Powder",
  [ProductCategory.POTTING_SOIL]: "Potting Soil Mix",
  [ProductCategory.VERMIWASH]: "Vermiwash",
};

export const CATEGORY_DESCRIPTIONS: Record<ProductCategory, string> = {
  [ProductCategory.VERMICOMPOST]:
    "Premium organic vermicompost produced in our in-house facilities",
  [ProductCategory.EGGSHELL]:
    "Processed and packaged eggshells rich in calcium",
  [ProductCategory.MUSHROOM]:
    "Fresh mushrooms grown in our controlled environment",
  [ProductCategory.COW_DUNG]:
    "Organic cow dung powder for enriching soil fertility",
  [ProductCategory.MUSTARD_CAKE]:
    "Natural mustard cake powder rich in nitrogen and organic matter",
  [ProductCategory.POTTING_SOIL]:
    "Ready-to-use potting soil mix for all plants",
  [ProductCategory.VERMIWASH]:
    "Liquid organic fertilizer from vermicompost beds",
};
