import React, { FC, useEffect, useState } from "react";
import {
  BookingData,
  getBooking,
  GetBookingResponse,
} from "../../../service/BookingService";
import { AxiosResponse } from "axios";
import moment, { Moment } from "moment";
import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles({
  head: {
    fontWeight: 600,
  },
});

const AdminBooking: FC = () => {
  const cellClasses = useStyles();
  const [data, setData] = useState<Array<BookingData>>([]);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(moment());
  useEffect(() => {
    const fetchBooking = async () => {
      const queryDate = selectedDate !== null ? selectedDate : moment();
      const res: AxiosResponse<GetBookingResponse> = await getBooking(
        queryDate.year(),
        queryDate.month() + 1,
        queryDate.date()
      );
      if (res.data.code === 1) {
        console.log(res.data.data);
        setData(res.data.data);
      }
    };
    fetchBooking();
  }, [selectedDate]);
  return (
    <div>
      <Box mb={3}>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <DatePicker
            disableToolbar
            variant="static"
            format="DD/MM/yyyy"
            margin="normal"
            label="Ngày đặt bàn"
            value={selectedDate}
            onChange={setSelectedDate}
            inputVariant="outlined"
            orientation="landscape"
          />
        </MuiPickersUtilsProvider>
      </Box>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell classes={cellClasses}>#</TableCell>
              <TableCell classes={cellClasses}>Tên khách</TableCell>
              <TableCell classes={cellClasses} align="right">
                Số điện thoại
              </TableCell>
              <TableCell classes={cellClasses} align="right">
                Số người
              </TableCell>
              <TableCell classes={cellClasses} align="right">
                Thời gian đặt bàn
              </TableCell>
              <TableCell classes={cellClasses} align="right">
                Ghi chú
              </TableCell>
              <TableCell classes={cellClasses} align="right">
                Trạng thái
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              const time = moment(row.bookingTime);
              const startOfDate = moment().hour(0).minute(0).second(0);
              const active = time >= startOfDate;
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.customerName}
                  </TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.numberOfPeople}</TableCell>
                  <TableCell align="right">
                    {time.format("DD/MM/YYYY - H:m")}
                  </TableCell>
                  <TableCell align="right">{row.note}</TableCell>
                  <TableCell align="right">
                    <Chip
                      label={active ? "Hiện tại" : "Quá khứ"}
                      color={active ? "primary" : "default"}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminBooking;
