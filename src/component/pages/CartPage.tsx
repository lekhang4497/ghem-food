import React, { useContext } from "react";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AppNav from "../organisms/AppNavbar";
import Constant from "../../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "../organisms/FooterSection";
import { COMBOS, DISH_MAP, DishInformation } from "../../assets/dishes";
import { CartContext, cartStore } from "../../store/CartStore";
import { orange } from "@material-ui/core/colors";
import CircleImageBox from "../atoms/CircleImageBox";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

const CartPage = () => {
  const classes = useStyles();
  const { cartState } = useContext<CartContext>(cartStore);
  const items = cartState.items;
  let total = 0
  Object.values(items).forEach(items => {
    total += DISH_MAP[items.dishId].price * items.quantity;
  });
  return (
    <Box>
      <Box className={classes.coverGradient}>
        <AppNav />
      </Box>
      <Box my={8}>
        <Container maxWidth="md">
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Ảnh món ăn</TableCell>
                  <TableCell align="right">Tên món ăn</TableCell>
                  <TableCell align="right">Đơn giá</TableCell>
                  <TableCell align="right">Số lượng</TableCell>
                  <TableCell align="right">Thành tiền</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(items).map(([dishId, item]) => {
                  const dish: DishInformation = DISH_MAP[dishId];
                  const money = dish.price * item.quantity;
                  return (
                    <TableRow key={dishId}>
                      <TableCell align="center" component="th" scope="row">
                        <img
                          style={{ borderRadius: "50%" }}
                          height={64}
                          src={`${process.env.PUBLIC_URL}/img/dishes/${dish.type}/${dish.image}.jpg`}
                        />
                      </TableCell>
                      <TableCell align="right">{dish.vnName}</TableCell>
                      <TableCell align="right">
                        {`${dish.price.toLocaleString()} VND`}
                      </TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">
                        {`${money.toLocaleString()} VND`}
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell align="right" colSpan={4} ><b>Tổng thanh toán</b></TableCell>
                  <TableCell align="right"><b>{`${total.toLocaleString()} VND`}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      <FooterSection />
    </Box>
  );
};

export default CartPage;
