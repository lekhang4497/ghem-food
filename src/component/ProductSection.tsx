import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return <Box>
    <Grid container justify="center" spacing={2}>
      {[1, 2, 3].map((value) => (
        <Grid item md={4} container justify="center">
          <ProductCard/>
        </Grid>
      ))}
    </Grid>
  </Box>
};

export default ProductSection;
