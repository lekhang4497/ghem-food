import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ProductCard from "../atoms/ProductCard";
import { ButtonBase } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ComboInformation, COMBOS } from "../../assets/dishes";

const products: Array<ComboInformation> = COMBOS;

const ProductSection = () => {
  return (
    <Box>
      <Grid container justify="center" spacing={4}>
        {products.map((product, idx) => (
          <Grid key={product.name} item md={3} sm={6} xs={12} justify="center">
            <ButtonBase component={RouterLink} to="/combo" disableRipple style={{width: "100%"}}>
              <ProductCard {...product} />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
