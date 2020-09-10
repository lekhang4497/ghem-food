export interface DishInformation {
  price: number;
  name: string;
  vnName: string;
  id: string;
  type: string;
}

const DISHES: Array<DishInformation> = [
  {
    "price": 73000,
    "name": "Free-range chicken sauteed \nwith lemongrass and chilli",
    "vnName": "Gà xào sả ớt",
    "type": "chicken",
    "id": "G001"
  },
  {
    "price": 73000,
    "name": "Free-range chicken \nbraised with coconut milk",
    "vnName": "Gà khìa nước cốt dừa",
    "type": "chicken",
    "id": "G002"
  },
  {
    "price": 73000,
    "name": "Free-range chicken sauteed\nin green pepper sauce",
    "vnName": "Gà sốt muối ớt xanh",
    "type": "chicken",
    "id": "G003"
  },
  {
    "price": 80000,
    "name": "Deep fried chicken wings with fish sauce",
    "vnName": "Cánh gà chiên nước mắm",
    "type": "chicken",
    "id": "G004"
  },
  {
    "price": 73000,
    "name": "Free-range chicken braised with ginger",
    "vnName": "Gà kho gừng",
    "type": "chicken",
    "id": "G006"
  },
  {
    "price": 52000,
    "name": "Fried egg with minced pork and onion",
    "vnName": "Trứng chiên thịt",
    "type": "egg",
    "id": "G007"
  },
  {
    "price": 66000,
    "name": "Fried egg with mushroom",
    "vnName": "Trứng xào nấm",
    "type": "egg",
    "id": "G008"
  },
  {
    "price": 45000,
    "name": "Fried egg with tomato",
    "vnName": "Trứng chiên cà chua",
    "type": "egg",
    "id": "G009"
  },
  {
    "price": 88000,
    "name": "Roasted duck sauteed with pickled cabbage",
    "vnName": "Vịt quay xào dưa cải",
    "type": "duck",
    "id": "G010"
  },
  {
    "price": 83000,
    "name": "Sauteed duck with salt",
    "vnName": "Vịt rang muối",
    "type": "duck",
    "id": "G011"
  },
  {
    "price": 83000,
    "name": "Sauteed duck with galangal",
    "vnName": "Vịt rang riềng",
    "type": "duck",
    "id": "G012"
  },
  {
    "price": 80000,
    "name": "Boiled duck dip in fish sauce with ginger",
    "vnName": "Vịt luộc chấm mắm gừng",
    "type": "duck",
    "id": "G013"
  },
  {
    "price": 83000,
    "name": "Sauteed duck with spicy sauce",
    "vnName": "Vịt xào cay",
    "type": "duck",
    "id": "G015"
  },
  {
    "price": 73000,
    "name": "Steam minced pork in sauce of macerated fish",
    "vnName": "Mắm chưng",
    "type": "pork",
    "id": "G016"
  },
  {
    "price": 57000,
    "name": "Vegetable cooked with fermented tofu",
    "vnName": "",
    "type": "other",
    "id": "G018"
  },
  {
    "price": 76000,
    "name": "Pork belly cooked with palm sugar caramel",
    "vnName": "Ba rọi kho đường thốt nốt",
    "type": "pork",
    "id": "G019"
  },
  {
    "price": 76000,
    "name": "Pork belly stir fried with shrimp paste",
    "vnName": "Ba rọi xào ruốc sả",
    "type": "pork",
    "id": "G021"
  },
  {
    "price": 85000,
    "name": "Roasted pork sauteed with garlic",
    "vnName": "Heo quay cháy tỏi",
    "type": "pork",
    "id": "G022"
  },
  {
    "price": 74000,
    "name": "Fried pork belly with lemongrass",
    "vnName": "Ba rọi chiên sả",
    "type": "pork",
    "id": "G023"
  },
  {
    "price": 82000,
    "name": "Fried pork chop in black pepper lime sauce",
    "vnName": "Sườn non ram muối tiêu chanh",
    "type": "pork",
    "id": "G024"
  },
  {
    "price": 93000,
    "name": "Fried pork chop in sour and sweet sauce",
    "vnName": "Sườn xào chua ngọt",
    "type": "pork",
    "id": "G025"
  },
  {
    "price": 74000,
    "name": "Pork belly sauteed with garlic",
    "vnName": "Ba rọi cháy tỏi",
    "type": "pork",
    "id": "G109"
  },
  {
    "price": 87000,
    "name": "Roasted pork sauteed with pickled cabbage",
    "vnName": "Heo quay xào dưa cải",
    "type": "pork",
    "id": "G110"
  },
  {
    "price": 74000,
    "name": "Pork belly fried with fish sauce",
    "vnName": "Ba rọi chiên nước mắm",
    "type": "pork",
    "id": "G111"
  },
  {
    "price": 72000,
    "name": "Deep fried catfish, dip in fish sauce and mango",
    "vnName": "Cá trê chiên chấm nước mắm xoài",
    "type": "fish",
    "id": "G027"
  },
  {
    "price": 75000,
    "name": "Featherback fish cake sauteed in fish sauce",
    "vnName": "Chả cá rim nước mắm",
    "type": "fish",
    "id": "G028"
  },
  {
    "price": 75000,
    "name": "Deep fried featherback fish cake",
    "vnName": "Chả cá chiên giòn",
    "type": "fish",
    "id": "G029"
  },
  {
    "price": 95000,
    "name": "Red tilapia deep fried with tamarind sauce",
    "vnName": "Cá diêu hồng quay me",
    "type": "fish",
    "id": "G031"
  },
  {
    "price": 98000,
    "name": "Red tilapia stewed with soybean paste",
    "vnName": "Cá diêu hồng chưng tương",
    "type": "fish",
    "id": "G033"
  },
  {
    "price": 95000,
    "name": "Red tilapia steamed with onion",
    "vnName": "Cá diêu hồng hấp hành",
    "type": "fish",
    "id": "G034"
  },
  {
    "price": 65000,
    "name": "Round scad braised with garlic and fish sauce",
    "vnName": "Cá nục kho tỏi",
    "type": "fish",
    "id": "G120"
  },
  {
    "price": 76000,
    "name": "Catfish braised in clay pot",
    "vnName": "Cá hú kho tộ",
    "type": "fish",
    "id": "G121"
  },
  {
    "price": 92000,
    "name": "Deep fried red tilapia, dip in fish sauce and mango",
    "vnName": "Cá chiên giòn mắm xoài",
    "type": "fish",
    "id": "G122"
  },
  {
    "price": 72000,
    "name": "Capelin deep fried, dip in tamarind sauce",
    "vnName": "Cá trứng chiên mắm me",
    "type": "fish",
    "id": "G123"
  },
  {
    "price": 62000,
    "name": "Tofu deep fried with lemongrass and shrimp paste",
    "vnName": "Đậu hủ ruốc sả",
    "type": "tofu",
    "id": "G035"
  },
  {
    "price": 90000,
    "name": "Tofu sauteed with seafood",
    "vnName": "Đậu hủ sốt hải sản",
    "type": "tofu",
    "id": "G036"
  },
  {
    "price": 55000,
    "name": "Tofu deep fried with spring onion and soy sauce",
    "vnName": "Đậu hủ chiên hành",
    "type": "tofu",
    "id": "G037"
  },
  {
    "price": 58000,
    "name": "Tofu stir fried with chilli and lemongrass",
    "vnName": "Đậu hủ chiên sả ớt",
    "type": "tofu",
    "id": "G038"
  },
  {
    "price": 66000,
    "name": "Tofu sauteed with salted egg yolk",
    "vnName": "Đậu hủ sốt trứng muối",
    "type": "tofu",
    "id": "G115"
  },
  {
    "price": 85000,
    "name": "Boiled beef shank, dip in fish sauce and ginger",
    "vnName": "Bắp bò luộc chấm mắm gừng",
    "type": "beef",
    "id": "G039"
  },
  {
    "price": 86000,
    "name": "Beef tendon sauteed with pickled cabbage",
    "vnName": "Gân bò xào dưa cải",
    "type": "beef",
    "id": "G040"
  },
  {
    "price": 86000,
    "name": "Beef stir-fried with lemongrass and chilli",
    "vnName": "Bò xào sả ớt",
    "type": "beef",
    "id": "G043"
  },
  {
    "price": 90000,
    "name": "Beef in dice sauteed with vegetables",
    "vnName": "Bò lúc lắc",
    "type": "beef",
    "id": "G044"
  },
  {
    "price": 90000,
    "name": "Beef sauteed with green piper",
    "vnName": "Bò sốt tiêu xanh",
    "type": "beef",
    "id": "G045"
  },
  {
    "price": 94000,
    "name": "Beef tendon sauteed with shiitake mushroom",
    "vnName": "Gân bò hầm nấm đông cô",
    "type": "beef",
    "id": "G046"
  },
  {
    "price": 90000,
    "name": "Beef shank sauteed with okra",
    "vnName": "Bắp bò xào lăn",
    "type": "beef",
    "id": "G112"
  },
  {
    "price": 92000,
    "name": "Beef shank sauteed with pickled cabbage",
    "vnName": "Bắp bò xào dưa cải",
    "type": "beef",
    "id": "G113"
  },
  {
    "price": 75000,
    "name": "Stir fried clams with garlic, chili, and fish sauce",
    "vnName": "Nghêu rim nước mắm",
    "type": "seafood",
    "id": "G047"
  },
  {
    "price": 83000,
    "name": "Stir fried shrimp with sea salt",
    "vnName": "Tôm rang muối",
    "type": "seafood",
    "id": "G048"
  },
  {
    "price": 87000,
    "name": "Deep fried squid with salt and dried chili",
    "vnName": "Mực chiên giòn",
    "type": "seafood",
    "id": "G049"
  },
  {
    "price": 75000,
    "name": "Stir fried dams with tamarind sauce",
    "vnName": "Nghêu rim me",
    "type": "seafood",
    "id": "G051"
  },
  {
    "price": 88000,
    "name": "Deep fried squid with fish sauce",
    "vnName": "Mực chiên nước mắm",
    "type": "seafood",
    "id": "G053"
  },
  {
    "price": 90000,
    "name": "Steamed squid with spring onion and ginger",
    "vnName": "Mực hấp hành gừng",
    "type": "seafood",
    "id": "G055"
  },
  {
    "price": 70000,
    "name": "Clam and tomato",
    "vnName": "Canh nghêu",
    "type": "soup",
    "id": "G056"
  },
  {
    "price": 75000,
    "name": "Beef and pickled cabbage",
    "vnName": "Canh dưa chua thịt bò",
    "type": "soup",
    "id": "G057"
  },
  {
    "price": 55000,
    "name": "Tofu",
    "vnName": "Canh đậu hủ",
    "type": "soup",
    "id": "G058"
  },
  {
    "price": 75000,
    "name": "Bitter gourd and fish ball",
    "vnName": "Canh khổ qua chả cá",
    "type": "soup",
    "id": "G059"
  },
  {
    "price": 82000,
    "name": "Sour and sweet with shrimp",
    "vnName": "Canh chua tôm",
    "type": "soup",
    "id": "G060"
  },
  {
    "price": 75000,
    "name": "Vegetable and shrimp",
    "vnName": "Canh rau xanh tôm",
    "type": "soup",
    "id": "G061"
  },
  {
    "price": 70000,
    "name": "Seaweed and tofu",
    "vnName": "Canh rong biển đậu hủ",
    "type": "soup",
    "id": "G063"
  },
  {
    "price": 75000,
    "name": "Bottle gourd and shrimp",
    "vnName": "Canh bầu nấu tôm",
    "type": "soup",
    "id": "G064"
  },
  {
    "price": 70000,
    "name": "Bitter gourd and tofu",
    "vnName": "Canh khổ qua đậu hủ",
    "type": "soup",
    "id": "G065"
  },
  {
    "price": 72000,
    "name": "Chicken and sour creeper leaves",
    "vnName": "Canh gà lá giang",
    "type": "soup",
    "id": "G066"
  },
  {
    "price": 70000,
    "name": "Tofu skin and mushroom",
    "vnName": "Canh nấm tàu hủ ky",
    "type": "soup",
    "id": "G067"
  },
  {
    "price": 75000,
    "name": "Vegetable and fish ball",
    "vnName": "Canh rau xanh chả cá",
    "type": "soup",
    "id": "G068"
  },
  {
    "price": 75000,
    "name": "Luffa gourd with shrimp and mushroom",
    "vnName": "Canh mướp nấm tôm",
    "type": "soup",
    "id": "G069"
  },
  {
    "price": 75000,
    "name": "Field crab and jute leaves",
    "vnName": "Canh cua rau đay",
    "type": "soup",
    "id": "G116"
  },
  {
    "price": 70000,
    "name": "Vegetable and minced pork",
    "vnName": "Canh rau xanh thịt băm",
    "type": "soup",
    "id": "G117"
  },
  {
    "price": 76000,
    "name": "Sour and sweet with fish",
    "vnName": "Canh chua cá",
    "type": "soup",
    "id": "G118"
  },
  {
    "price": 70000,
    "name": "Vegan sour and sweet",
    "vnName": "Canh chua chay",
    "type": "soup",
    "id": "G119"
  },
  {
    "price": 88000,
    "name": "Salad with shrimp and squid",
    "vnName": "Trộn tôm mực",
    "type": "salad",
    "id": "G071"
  },
  {
    "price": 86000,
    "name": "Salad with beef shank",
    "vnName": "Nộm bắp bò",
    "type": "salad",
    "id": "G072"
  },
  {
    "price": 86000,
    "name": "Salad with bottle gourd, shrimp and pork",
    "vnName": "Gỏi bầu tôm thịt",
    "type": "salad",
    "id": "G073"
  },
  {
    "price": 70000,
    "name": "Salad with mushroom",
    "vnName": "Gỏi nấm",
    "type": "salad",
    "id": "G074"
  },
  {
    "price": 72000,
    "name": "Ghem springrolls",
    "vnName": "Chả giò Ghém",
    "type": "salad",
    "id": "G075"
  },
  {
    "price": 45000,
    "name": "Stir fried vegetable with garlic",
    "vnName": "Rau xào tỏi",
    "type": "vegetables",
    "id": "G076"
  },
  {
    "price": 65000,
    "name": "Stir fried vegetable with beef",
    "vnName": "Rau xào bò",
    "type": "vegetables",
    "id": "G077"
  },
  {
    "price": 57000,
    "name": "Stir fried vegetable with fermented tofu",
    "vnName": "Rau xào chao",
    "type": "vegetables",
    "id": "G078"
  },
  {
    "price": 55000,
    "name": "Boiled vegetable dipped in fermented tofu Gia",
    "vnName": "Rau củ luộc chấm chao",
    "type": "vegetables",
    "id": "G079"
  },
  {
    "price": 55000,
    "name": "Stir fried bean sprout with pork and chilli",
    "vnName": "Giá xào sa tế thịt băm",
    "type": "vegetables",
    "id": "G080"
  },
  {
    "price": 55000,
    "name": "Stir fried baby corn and vegetable",
    "vnName": "Bắp non xào rau củ",
    "type": "vegetables",
    "id": "G081"
  },
  {
    "price": 10000,
    "name": "Steam rice in clay pot for 1 person",
    "vnName": "",
    "type": "side_dish",
    "id": "G082"
  },
  {
    "price": 20000,
    "name": "Steam rice in bowl",
    "vnName": "",
    "type": "side_dish",
    "id": "G083"
  },
  {
    "price": 10000,
    "name": "Pickled cabbage",
    "vnName": "",
    "type": "side_dish",
    "id": "G084"
  },
  {
    "price": 10000,
    "name": "Kim chi",
    "vnName": "",
    "type": "side_dish",
    "id": "G085"
  },
  {
    "price": 10000,
    "name": "Pickled aarden-egg",
    "vnName": "",
    "type": "side_dish",
    "id": "G086"
  },
  {
    "price": 90000,
    "name": "Not pot with field crabs",
    "vnName": "",
    "type": "hotpot",
    "id": "G105"
  },
  {
    "price": 50000,
    "name": "Field crabs",
    "vnName": "",
    "type": "hotpot",
    "id": "G106"
  },
  {
    "price": 15000,
    "name": "Unhatched duck eggs",
    "vnName": "",
    "type": "hotpot",
    "id": "G107"
  },
  {
    "price": 5000,
    "name": "Vegetables",
    "vnName": "",
    "type": "hotpot",
    "id": "G108"
  }
];

interface IngredientInformation {
  name: string;
  value: string;
}
const INGREDIENTS: Array<IngredientInformation> = [
  {
    name: "Gà",
    value: "chicken",
  },
  {
    name: "Vịt",
    value: "duck",
  },
  {
    name: "Trứng",
    value: "egg",
  },
  {
    name: "Heo",
    value: "pork",
  },
  {
    name: "Bò",
    value: "beef",
  },
  {
    name: "Đậu hủ",
    value: "tofu",
  },
  {
    name: "Canh",
    value: "soup",
  },
  {
    name: "Cá",
    value: "fish",
  },
  {
    name: "Salad",
    value: "salad",
  },
  {
    name: "Rau cải",
    value: "vegetables",
  },
  {
    name: "Lẩu",
    value: "hotpot",
  },
  {
    name: "Món phụ",
    value: "side_dish",
  },
  {
    name: "Tráng miệng",
    value: "dessert",
  },
];

const INGREDIENT_MAP: Map<string, Array<DishInformation>> = new Map<
  string,
  Array<DishInformation>
>();

INGREDIENTS.forEach((item) => INGREDIENT_MAP.set(item.value, []));

DISHES.forEach((dish) => {
  const a = INGREDIENT_MAP.get(dish.type);
  if (a) {
    a.push(dish);
  }
});

export interface ComboInformation {
  name: string;
  value: string;
  description: string;
}

const COMBOS: Array<ComboInformation> = [
  {
    name: "Combo Tiện Lợi",
    value: "convenient",
    description: "Hai bữa trưa và tối chỉ 196,000 VND.",
  },
  {
    name: "Combo Gia Đình",
    value: "family",
    description: "Hai bữa trưa và tối cho cả nhà 2-4 người chỉ 380,000 VND.",
  },
  {
    name: "Combo Tiệc",
    value: "party",
    description: "Combo tiệc tại nhà với các món chính, món lẩu, món gỏi",
  },
  {
    name: "Combo Cuối Tuần",
    value: "weekend",
    description: "Lẩu và 2 món ăn cho cả nhà 2-4 người chỉ 360,000 VND",
  },
];

export { INGREDIENTS, DISHES, INGREDIENT_MAP, COMBOS };
