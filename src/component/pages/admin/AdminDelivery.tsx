import React, { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import moment, { Moment } from "moment";
import {
  Box,
  Chip,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {
  DeliveryData,
  getDelivery,
  GetDeliveryResponse,
} from "../../../service/DeliveryService";
import {
  faChevronDown,
  faChevronUp,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DISH_MAP } from "../../../assets/dishes";
import Utils from "../../../constant/Utils";

const useStyles = makeStyles({
  head: {
    fontWeight: 600,
  },
});

const DeliveryRow = (props: { row: DeliveryData }) => {
  const [open, setOpen] = useState(false);
  const { row } = props;
  let sum = 0;
  return (
    <React.Fragment>
      <TableRow key={row.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
          </IconButton>
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell component="th" scope="row">
          {row.customerName}
        </TableCell>
        <TableCell align="right">{row.phoneNumber}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">abc</TableCell>
        <TableCell align="right">abc</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi tiết đơn hàng
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Mã món ăn</TableCell>
                    <TableCell>Tên món ăn</TableCell>
                    <TableCell>Đơn giá</TableCell>
                    <TableCell align="center">Số lượng</TableCell>
                    <TableCell align="right">Tổng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orderDetails.map((detailRow) => {
                    const dish = DISH_MAP[detailRow.dishId];
                    const total = dish.price * detailRow.quantity;
                    sum += total;
                    return (
                      <TableRow key={detailRow.dishId}>
                        <TableCell component="th" scope="row">
                          {detailRow.dishId}
                        </TableCell>
                        <TableCell>{dish.vnName}</TableCell>
                        <TableCell>
                          {Utils.toPriceString(dish.price)}
                        </TableCell>
                        <TableCell align="center">
                          {detailRow.quantity}
                        </TableCell>
                        <TableCell align="right">
                          {Utils.toPriceString(total)}
                        </TableCell>

                      </TableRow>
                    );
                  })}
                  <TableRow>
                  <TableCell align="right" colSpan={4}>
                    <b>Tổng thanh toán</b>
                  </TableCell>
                    <TableCell align="right" >
                      <b>{Utils.toPriceString(sum)}</b>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const AdminDelivery: FC = () => {
  const cellClasses = useStyles();
  const [data, setData] = useState<Array<DeliveryData>>([]);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(moment());
  useEffect(() => {
    const fetchDelivery = async () => {
      const queryDate = selectedDate !== null ? selectedDate : moment();
      const res: AxiosResponse<GetDeliveryResponse> = await getDelivery(
        queryDate.year(),
        queryDate.month() + 1,
        queryDate.date()
      );
      if (res.data.code === 1) {
        console.log(res.data.data);
        setData(res.data.data);
      }
    };
    fetchDelivery();
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
              <TableCell />
              <TableCell classes={cellClasses}>#</TableCell>
              <TableCell classes={cellClasses}>Tên khách</TableCell>
              <TableCell classes={cellClasses} align="right">
                Số điện thoại
              </TableCell>
              <TableCell classes={cellClasses} align="right">
                Địa chỉ
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
            {data.map((row) => (
              <DeliveryRow key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminDelivery;
