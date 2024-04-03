import WhatsappLogo from "@/components/atoms/whatsappLogo/whatsappLogo";
import React from "react";
import { MainContainer } from "./style";

function WhatsappPhone() {
  return (
    <MainContainer>
      <WhatsappLogo /> <p>(31)99999-9999</p>
    </MainContainer>
  );
}

export default WhatsappPhone;
