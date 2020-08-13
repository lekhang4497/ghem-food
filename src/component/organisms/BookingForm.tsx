import * as React from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { DatePicker, TimePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AppButton from "../atoms/AppButton";

interface Values {
  name: string;
  phone: string;
  numberSeat?: number;
  bookingDate?: Date;
  bookingTime?: Date;
}

const phoneRegex: string = [
  "^(840|84|0|)8(1|2|3|4|5|6|7|8|9)\\d{7}$",
  "(840|84|0|)9\\d{8}",
  "^(840|84|0|)5(2|6|8|9)\\d{7}$",
  "(840|84|0|)7(0|6|7|8|9)\\d{7}",
  "(840|84|0|)3[2-9]\\d{7}",
].join("|");

const phoneRegExp: RegExp = new RegExp(phoneRegex);

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Vui lòng nhập trên 2 ký tự!")
    .max(50, "Vui lòng nhập dưới 50 ký tự!")
    .required("Vui lòng nhập tên người đặt bàn"),
  phone: Yup.string().matches(phoneRegExp, "Số điện thọai không hợp lệ"),
  bookingDate: Yup.date().required("Vui lòng chọn ngày đặt bàn"),
  bookingTime: Yup.date().required("Vui lòng chọn giờ đặt bàn"),
});

const FormContent = () => {
  const { submitForm, isSubmitting } = useFormikContext();
  return (
    <Form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            required
            type="text"
            name="name"
            label="Họ tên"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Field
            component={TextField}
            type="number"
            name="numberSeat"
            label="Số người"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={DatePicker}
            name="bookingDate"
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            label="Đặt bàn ngày"
            inputVariant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={TimePicker}
            name="bookingTime"
            label="Đặt bàn lúc"
            inputVariant="outlined"
            variant="inline"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <AppButton
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
          disableElevation
        >
          ĐẶT BÀN NGAY
        </AppButton>
      </Box>
      <Box textAlign="left" fontSize={12} fontStyle="italic">
        Các thông tin * là bắt buộc
      </Box>{" "}
      <Box my={2}>{isSubmitting && <CircularProgress />}</Box>
    </Form>
  );
};

const BookingForm = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          bookingDate: new Date(),
          bookingTime: new Date(),
        }}
        validationSchema={FormSchema}
        onSubmit={(values: Values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            handleOpenDialog();
            console.log(values);
          }, 300);
        }}
      >
        <FormContent />
      </Formik>
      <Dialog open={showDialog} onClose={handleCloseDialog}>
        <DialogTitle>Đặt bàn thành công</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thông tin đặt bàn đã được ghi nhận. Xin cám ơn quý khách
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default BookingForm;
