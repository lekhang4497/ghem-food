import {
  faAppleAlt,
  faPhone,
  faTruck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import InstructionCard, {
  InstructionCardProps,
} from "../atoms/InstructionCard";
import React from "react";

const instructions: Array<InstructionCardProps> = [
  {
    icon: faAppleAlt,
    name: "Đặt món ăn",
    description: "Đặt giao món ăn và combo dễ dàng trên website",
  },
  {
    icon: faPhone,
    name: "Xác nhận qua điện thoại",
    description: "Ghém sẽ liên hệ để xác nhận đơn hàng",
  },
  {
    icon: faTruck,
    name: "Giao món ăn",
    description:
      "Món ăn được giao đến tận nhà trong hộp giấy vệ sinh, bảo vệ môi trường",
  },
  {
    icon: faUtensils,
    name: "Thưởng thức món ăn",
    description: "Thưởng thức món ăn vệ sinh và ngon miệng",
  },
];

const InstructionSection = () => {
  return (
    <Grid container spacing={2} justify="center">
      {instructions.map((item, idx) => (
        <Grid item md={3} sm={6} xs={12} key={idx}>
          <InstructionCard
            icon={item.icon}
            name={item.name}
            description={item.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InstructionSection;
