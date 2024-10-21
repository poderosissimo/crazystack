const desertsCategory = {
  id: "desertsCategoryId",
  name: "Sobremesas",
  imageUrl: "https://utfs.io/f/0f81c141-4787-4a81-abce-cbd9c6596c7a-xayf5d.png",
};

export const juicesCategory = {
  id: "juicesCategoryId",
  name: "Sucos",
  imageUrl: "https://utfs.io/f/9f3013bf-0778-4d80-a330-4da2682deaf9-o41y62.png",
};
export const mockCategories = [desertsCategory, juicesCategory];

export const description =
  "Delicious Brazilian dishes prepared with fresh ingredients.";

export const brazilianRestaurants = [
  {
    id: "restaurantId",
    name: "Brazilian Grill",
    imageUrl:
      "https://utfs.io/f/c1f279ea-ac09-4e4f-9757-30018cb4c7bc-n9n78x.png",
    deliveryFee: 0,
    deliveryTimeMinutes: 45,
    categories: [desertsCategory.id],
  },
  {
    id: "restaurantId2",
    name: "Churrascaria House",
    imageUrl:
      "https://utfs.io/f/c1f279ea-ac09-4e4f-9757-30018cb4c7bc-n9n78x.png",
    deliveryFee: 10,
    deliveryTimeMinutes: 20,
    categories: [desertsCategory.id],
  },
];

export const brazilianProducts = [
  {
    id: "saassA",
    name: "Camarão Citrus",
    price: 40,
    description: description,
    discountPercentage: 5,
    imageUrl:
      "https://utfs.io/f/cecdeeb8-10e6-4be8-8553-0a120717d194-xf34p9.png",
    restaurantId: "restaurantId",
    categoryId: "desertsCategoryId",
    restaurant: brazilianRestaurants[0],
  },
  {
    id: "saassB",
    name: "Picanha Especial",
    price: 45,
    description: description,
    discountPercentage: 5,
    imageUrl:
      "https://utfs.io/f/089299df-fcb9-446a-a8cc-75e4e26b7357-xf34p8.png",
    restaurantId: "restaurantId",
    categoryId: "desertsCategoryId",
    restaurant: brazilianRestaurants[1],
  },
  {
    id: "saassC",
    name: "Macarrão com Carne",
    price: 35,
    description: description,
    discountPercentage: 5,
    imageUrl:
      "https://utfs.io/f/891eb8aa-635e-4cb3-b7fd-eb8d1c9f14e1-xf34p7.png",
    restaurantId: "restaurantId",
    categoryId: "desertsCategoryId",
    restaurant: brazilianRestaurants[1],
  },
  // Outros produtos brasileiros...
];

export const desertProducts = [
  {
    name: "Sorvete Especial",
    price: 30,
    description: description,
    discountPercentage: 10,
    imageUrl:
      "https://utfs.io/f/b703fcaa-eb9c-4257-a08e-fba0f0e12fc1-pr8gxl.png",
    restaurantId: "restaurantId",
    categoryId: desertsCategory.id,
  },
  {
    name: "Bolo de Chocolate",
    price: 40,
    description: description,
    discountPercentage: 7,
    imageUrl:
      "https://utfs.io/f/029befff-aba7-49b3-91c4-8da022e699b0-pr8gxm.png",
    restaurantId: "restaurantId",
    categoryId: desertsCategory.id,
  },
  // Outros produtos de sobremesas...
];

export const juiceProducts = [
  {
    name: "Suco de Cenoura",
    price: 15,
    description: description,
    discountPercentage: 5,
    imageUrl:
      "https://utfs.io/f/5126e950-40ca-4ef1-a166-16274fec16bc-6b2vea.png",
    restaurantId: "restaurantId",
    categoryId: juicesCategory.id,
  },
  {
    name: "Suco Cítrico",
    price: 20,
    description: description,
    discountPercentage: 7,
    imageUrl:
      "https://utfs.io/f/6dbe915d-af87-4f2a-b841-864ba9427da8-6b2ve9.png",
    restaurantId: "restaurantId",
    categoryId: juicesCategory.id,
  },
  // Outros produtos de sucos...
];
