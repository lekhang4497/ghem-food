import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ProductCard, { ProductCardProps } from "./atoms/ProductCard";
import { ButtonBase } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const products: Array<ProductCardProps> = [
  {
    name: "Combo Tiện Lợi",
    description: "Hai bữa trưa và tối chỉ 196,000 VND.",
    image: process.env.PUBLIC_URL + "/img/combo/convenient.jpg",
  },
  {
    name: "Combo Gia Đình",
    description: "Hai bữa trưa và tối cho cả nhà 2-4 người chỉ 380,000 VND.",
    image: process.env.PUBLIC_URL + "/img/combo/family.jpg",
  },
  {
    name: "Combo Tiệc",
    description: "Combo tiệc tại nhà với các món chính, món lẩu, món gỏi",
    image: process.env.PUBLIC_URL + "/img/combo/party.jpg",
  },
  {
    name: "Combo Cuối Tuần",
    description: "Lẩu và 2 món ăn cho cả nhà 2-4 người chỉ 360,000 VND",
    image: process.env.PUBLIC_URL + "/img/combo/weekend.jpg",
  },
];

const ProductSection = () => {
  return (
    <Box>
      <Grid container justify="center" spacing={4}>
        {products.map((product, idx) => (
          <Grid key={product.name} item sm={3} justify="center">
            <ButtonBase
              component={RouterLink}
              to={`/combo/${idx}`}
              disableRipple
            >
              <ProductCard
                name={product.name}
                description={product.description}
                image={product.image}
              />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
