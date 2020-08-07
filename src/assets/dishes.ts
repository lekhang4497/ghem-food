import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";

interface DishInformation {
  price: number;
  name: string;
  vnName: string;
  id: string;
  haveImage: boolean;
  type: string;
}

const DISHES: Array<DishInformation> = [
  {
    price: 70,
    name: "Free-range chicken sauteed with lemongrass and chilli",
    vnName: "Gà xào sả ớt",
    type: "chicken",
    id: "G001",
    haveImage: true,
  },
  {
    price: 70,
    name: "Free-range chicken braised with coconut milk",
    vnName: "Gà khìa nước cốt dừa",
    type: "chicken",
    id: "G002",
    haveImage: true,
  },
  {
    price: 70,
    name: "Free-range chicken sauteedin green pepper sauce",
    vnName: "Gà sốt muối ớt xanh",
    type: "chicken",
    id: "G003",
    haveImage: true,
  },
  {
    price: 78,
    name: "Deep fried chicken wings with fish sauce",
    vnName: "Cánh gà chiên nước mắm",
    type: "chicken",
    id: "G004",
    haveImage: true,
  },
  {
    price: 70,
    name: "Braised chicken with ginger",
    vnName: "Gà kho gừng",
    type: "chicken",
    id: "G006",
    haveImage: true,
  },
  {
    price: 45,
    name: "Fried egg with minced pork and onion",
    vnName: "Trứng chiên thịt",
    type: "egg",
    id: "G007",
    haveImage: true,
  },
  {
    price: 62,
    name: "Fried egg with mushroom",
    vnName: "Trứng xào nấm",
    type: "egg",
    id: "G008",
    haveImage: true,
  },
  {
    price: 40,
    name: "Fried egg with tomato",
    vnName: "Trứng chiên cà chua",
    type: "egg",
    id: "G009",
    haveImage: true,
  },
  {
    price: 75,
    name: "Roasted duck sauteed with pickled cabbage",
    vnName: "Vịt quay xào dưa cải",
    type: "duck",
    id: "G010",
    haveImage: true,
  },
  {
    price: 70,
    name: "Sauteed duck with salt",
    vnName: "Vịt rang muối",
    type: "duck",
    id: "G011",
    haveImage: true,
  },
  {
    price: 70,
    name: "Sauteed duck with galangal",
    vnName: "Vịt rang riềng",
    type: "duck",
    id: "G012",
    haveImage: true,
  },
  {
    price: 70,
    name: "Boiled duck dip in fish sauce with ginger",
    vnName: "Vịt luộc chấm mắm gừng",
    type: "duck",
    id: "G013",
    haveImage: true,
  },
  {
    price: 75,
    name: "Sauteed duck with spicy sauce",
    vnName: "Vịt xào cay",
    type: "duck",
    id: "G015",
    haveImage: true,
  },
];

interface IngredientInformation {
  name: string;
  value: string;
  icon: any;
}

const INGREDIENTS: Array<IngredientInformation> = [
  {
    name: "Gà",
    value: "chicken",
    icon: faDrumstickBite,
  },
  {
    name: "Vịt",
    value: "duck",
    icon: faDrumstickBite,
  },
  {
    name: "Trứng",
    value: "egg",
    icon: faDrumstickBite,
  },
];

export { INGREDIENTS, DISHES };
