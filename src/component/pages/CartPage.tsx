import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { TextField } from "formik-material-ui";
import Constant from "../../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import { DISH_MAP, DishInformation } from "../../assets/dishes";
import { Field, Form, Formik, FormikProps, useFormikContext } from "formik";
import * as Yup from "yup";
import AppNav from "../organisms/AppNavbar";
import { CartContext, cartStore } from "../../store/CartStore";
import FooterSection from "../organisms/FooterSection";
import AppButton from "../atoms/AppButton";
import OutlinedButton from "../atoms/OutlinedButton";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

interface DeliveryConfirmDialogProps {
  onClose: () => void;
  open: boolean;
}

const phoneRegExp = new RegExp(Constant.PHONE_REGEX);

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Vui lòng nhập trên 2 ký tự!")
    .max(50, "Vui lòng nhập dưới 50 ký tự!"),
  phone: Yup.string()
    .matches(phoneRegExp, "Số điện thọai không hợp lệ")
    .required("Vui lòng nhập số điện thoại để nhân viên giao hàng liên hệ"),
  address: Yup.string()
    .min(10, "Vui lòng nhập đúng địa chỉ")
    .required("Vui lòng nhập địa chỉ giao hàng"),
});

const DeliveryFormContent = () => {
  const { submitForm, isSubmitting } = useFormikContext();
  return (
    <Form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            type="text"
            name="name"
            label="Họ tên"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            required
            type="text"
            name="phone"
            label="Số điện thoại"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            required
            type="text"
            name="address"
            label="Địa chỉ giao hàng"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Form>
  );
};

const DeliveryConfirmDialog = ({
  onClose,
  open,
}: DeliveryConfirmDialogProps) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        address: "",
      }}
      validationSchema={FormSchema}
      onSubmit={async (deliveryInfo, { setSubmitting }) => {
        console.log(deliveryInfo);
        history.push("/delivery-result");
      }}
    >
      {({ submitForm }: FormikProps<any>) => (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Thông tin giao hàng</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Vui lòng nhập thông tin giao hàng
            </DialogContentText>
            <DeliveryFormContent />
            <Box textAlign="center" my={2}>
              <Box mr={1} component="span">
                <OutlinedButton onClick={onClose}>
                  Xem lại giỏ hàng
                </OutlinedButton>
              </Box>
              <AppButton onClick={submitForm} color="primary">
                Đặt hàng
              </AppButton>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Formik>
  );
};

const CartPage = () => {
  const classes = useStyles();
  const [deliverDialogOpen, setDeliverDialogOpen] = useState<boolean>(false);
  const { cartState } = useContext<CartContext>(cartStore);
  const items = cartState.items;
  let total = 0;
  Object.values(items).forEach((items) => {
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
                  <TableCell align="right" colSpan={4}>
                    <b>Tổng thanh toán</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>{`${total.toLocaleString()} VND`}</b>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box textAlign="right" mt={2}>
            <AppButton onClick={() => setDeliverDialogOpen(true)}>
              Đặt hàng ngay
            </AppButton>
          </Box>
        </Container>
      </Box>
      <FooterSection />
      <DeliveryConfirmDialog
        onClose={() => setDeliverDialogOpen(false)}
        open={deliverDialogOpen}
      />
    </Box>
  );
};

export default CartPage;
