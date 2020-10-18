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
import { DateTimePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AppButton from "../atoms/AppButton";
import {
  BookingInformation,
  BookingRequest,
  BookingResponse,
  bookTable,
} from "../../service/BookingService";
import { AxiosResponse } from "axios";
import Constant from "../../constant/Constant";

const phoneRegExp = new RegExp(Constant.PHONE_REGEX);

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Vui lòng nhập trên 2 ký tự!")
    .max(50, "Vui lòng nhập dưới 50 ký tự!")
    .required("Vui lòng nhập tên người đặt bàn"),
  phone: Yup.string().matches(phoneRegExp, "Số điện thọai không hợp lệ"),
  bookingTime: Yup.date().required("Vui lòng chọn thời gian đặt bàn"),
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
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Field
            component={DateTimePicker}
            name="bookingTime"
            label="Đặt bàn lúc"
            inputVariant="outlined"
            variant="inline"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={TextField}
            type="number"
            name="numberOfPeople"
            label="Số người"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            type="text"
            name="note"
            label="Ghi chú thêm"
            variant="outlined"
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
          bookingTime: new Date(),
        }}
        validationSchema={FormSchema}
        onSubmit={async (booking: BookingInformation, { setSubmitting }) => {
          setSubmitting(true);
          console.log(booking);
          const req: BookingRequest = {
            phoneNumber: booking.phone,
            customerName: booking.name,
            bookingTime: booking.bookingTime.getTime(),
            numberOfPeople: booking.numberOfPeople,
            note: booking.note,
          };
          const res: AxiosResponse<BookingResponse> = await bookTable(req);
          setSubmitting(false);
          console.log(res);
          if (res.data.code === 1) {
            handleOpenDialog();
          }
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
