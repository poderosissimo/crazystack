import { brazilianRestaurants } from "@/app/_helpers/mocks";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  // TODO: pegar restaurantes com maior número de pedidos
  const restaurants: any = brazilianRestaurants; // await db.restaurant.findMany({ take: 10 });
  const userFavoriteRestaurants: any = brazilianRestaurants;
  //  await db.userFavoriteRestaurant.findMany({
  //   where: { userId: session?.user?.id },
  // });

  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant: any) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          userFavoriteRestaurants={userFavoriteRestaurants}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
