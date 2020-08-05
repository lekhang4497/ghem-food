import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";

const products: Array<ProductCardProps> = [
  {
    name: "Combo Tiện Lợi",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: process.env.PUBLIC_URL + "/img/combo/convenient.jpg",
  },
  {
    name: "Combo Gia Đình",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: process.env.PUBLIC_URL + "/img/combo/family.jpg",
  },
  {
    name: "Combo Tiệc",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: process.env.PUBLIC_URL + "/img/combo/party.jpg",
  },
  {
    name: "Combo Cuối Tuần",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: process.env.PUBLIC_URL + "/img/combo/weekend.jpg",
  },
];

const ProductSection = () => {
  return (
    <Box>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.name} item sm={3} justify="center">
            <ProductCard
              name={product.name}
              description={product.description}
              img={product.img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
