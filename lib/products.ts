import { Product, ProductCategory } from "@/types/product";

export const products: Product[] = [
  {
    id: "vc-500gm",
    name: "Premium Vermicompost - 500gm",
    category: ProductCategory.VERMICOMPOST,
    description: "Perfect for medium-sized gardens and multiple plant beds.",
    features: [
      "Rich in nutrients and beneficial microorganisms",
      "Improves soil structure and water retention",
      "Eco-friendly and chemical-free",
      "Produced in our in-house vermicompost beds",
    ],
    price: 78,
    unit: "500gm",
    image: "/static/vermicompost_product.jpeg",
    inStock: true,
  },
  {
    id: "vc-1kg",
    name: "Premium Vermicompost - 1kg",
    category: ProductCategory.VERMICOMPOST,
    description:
      "High-quality organic vermicompost perfect for home gardens and potted plants.",
    features: [
      "Rich in nutrients and beneficial microorganisms",
      "Improves soil structure and water retention",
      "Eco-friendly and chemical-free",
      "Produced in our in-house vermicompost beds",
    ],
    price: 169,
    mrp: 270,
    unit: "1kg",
    image: "/static/vermicompost_product.jpeg",
    inStock: true,
  },
  {
    id: "vc-5kg",
    name: "Premium Vermicompost - 5kg",
    category: ProductCategory.VERMICOMPOST,
    description:
      "Large pack of premium vermicompost for extensive gardens and commercial use.",
    features: [
      "Rich in nutrients and beneficial microorganisms",
      "Improves soil structure and water retention",
      "Eco-friendly and chemical-free",
      "Produced in our in-house vermicompost beds",
    ],
    price: 319,
    mrp: 499,
    unit: "5kg",
    image: "/static/vermicompost_product.jpeg",
    inStock: true,
  },
  {
    id: "vc-bulk",
    name: "Vermicompost - Bulk Order",
    category: ProductCategory.VERMICOMPOST,
    description:
      "Custom bulk quantities for commercial farming and large-scale projects.",
    features: [
      "Custom quantity options",
      "Special pricing for bulk orders",
      "Delivery available",
      "Direct from our production facility",
    ],
    price: 0,
    unit: "Custom",
    image: "/static/vermicompost_product.jpeg",
    inStock: true,
  },
  {
    id: "es-1kg",
    name: "Processed Eggshell Powder - 1kg",
    category: ProductCategory.EGGSHELL,
    description:
      "Finely processed eggshell powder, an excellent source of calcium for plants.",
    features: [
      "Rich in calcium carbonate",
      "Helps prevent blossom end rot",
      "Improves soil pH balance",
      "Properly cleaned and processed",
    ],
    price: 399,
    mrp: 699,
    unit: "1kg",
    image: "/static/egg_shell.jpeg",
    inStock: true,
  },
  {
    id: "es-400g",
    name: "Processed Eggshell Powder - 400g",
    category: ProductCategory.EGGSHELL,
    description: "Perfect size for small gardens and container plants.",
    features: [
      "Rich in calcium carbonate",
      "Helps prevent blossom end rot",
      "Improves soil pH balance",
      "Properly cleaned and processed",
    ],
    price: 290,
    mrp: 399,
    unit: "400g",
    image: "/static/egg_shell.jpeg",
    inStock: true,
  },
  {
    id: "mush-oyster",
    name: "Fresh Oyster Mushrooms",
    category: ProductCategory.MUSHROOM,
    description:
      "Freshly harvested oyster mushrooms from our controlled environment.",
    features: [
      "Grown in optimal conditions",
      "Chemical-free cultivation",
      "High nutritional value",
      "Harvested fresh on order",
    ],
    price: 200 /** MRP: 250 */,
    unit: "1kg",
    image: "/static/mushroom.jpeg",
    inStock: true,
  },
  {
    id: "cd-1kg",
    name: "Cow Dung Powder - 1kg",
    category: ProductCategory.COW_DUNG,
    description:
      "Organic cow dung powder perfect for enriching soil fertility and improving plant growth.",
    features: [
      "100% natural and organic",
      "Rich in nutrients and microorganisms",
      "Improves soil structure",
      "Enhances water retention",
    ],
    price: 179,
    mrp: 299,
    unit: "1kg",
    image: "/static/cow-dung.jpeg",
    inStock: true,
  },
  {
    id: "cd-5kg",
    name: "Cow Dung Powder - 5kg",
    category: ProductCategory.COW_DUNG,
    description:
      "Large pack of organic cow dung powder for extensive gardening and farming needs.",
    features: [
      "100% natural and organic",
      "Rich in nutrients and microorganisms",
      "Improves soil structure",
      "Enhances water retention",
    ],
    price: 349,
    mrp: 549,
    unit: "5kg",
    image: "/static/cow-dung.jpeg",
    inStock: true,
  },
  {
    id: "mc-400g",
    name: "Mustard Cake Powder - 400g",
    category: ProductCategory.MUSTARD_CAKE,
    description:
      "Natural mustard cake powder, an excellent organic fertilizer rich in nitrogen.",
    features: [
      "High nitrogen content",
      "Rich in organic matter",
      "Natural pest repellent properties",
      "Improves soil fertility",
    ],
    price: 130,
    mrp: 249,
    unit: "400g",
    image: "/static/mustard_cake_powder.jpeg",
    inStock: true,
  },
  {
    id: "mc-900g",
    name: "Mustard Cake Powder - 900g",
    category: ProductCategory.MUSTARD_CAKE,
    description:
      "Large pack of mustard cake powder for comprehensive soil enrichment.",
    features: [
      "High nitrogen content",
      "Rich in organic matter",
      "Natural pest repellent properties",
      "Improves soil fertility",
    ],
    price: 199,
    mrp: 449,
    unit: "900g",
    image: "/static/mustard_cake_powder.jpeg",
    inStock: true,
  },
  {
    id: "ps-1kg",
    name: "Potting Soil Mix - 1kg",
    category: ProductCategory.POTTING_SOIL,
    description:
      "Ready-to-use potting soil mix ideal for all types of potted plants and containers.",
    features: [
      "Well-balanced nutrient mix",
      "Excellent drainage properties",
      "Perfect for indoor and outdoor plants",
      "Sterilized and pest-free",
    ],
    price: 169,
    mrp: 239,
    unit: "1kg",
    image: "/static/potting_soil.jpeg",
    inStock: true,
  },
  {
    id: "ps-5kg",
    name: "Potting Soil Mix - 5kg",
    category: ProductCategory.POTTING_SOIL,
    description:
      "Large pack of potting soil mix for multiple plants and larger containers.",
    features: [
      "Well-balanced nutrient mix",
      "Excellent drainage properties",
      "Perfect for indoor and outdoor plants",
      "Sterilized and pest-free",
    ],
    price: 299,
    mrp: 449,
    unit: "5kg",
    image: "/static/potting_soil.jpeg",
    inStock: true,
  },
  {
    id: "vw-1l",
    name: "Vermiwash - 1 Litre",
    category: ProductCategory.VERMIWASH,
    description:
      "Liquid organic fertilizer collected from vermicompost beds, rich in nutrients and beneficial microbes.",
    features: [
      "100% organic liquid fertilizer",
      "Rich in plant growth hormones",
      "Enhances plant immunity",
      "Ready to use - just dilute with water",
    ],
    price: 240,
    mrp: 299,
    unit: "1 Litre",
    image: "/static/vermiwash.jpeg",
    inStock: true,
  },
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getAllCategories = (): ProductCategory[] => {
  return Object.values(ProductCategory);
};
