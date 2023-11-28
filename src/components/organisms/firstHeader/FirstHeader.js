'use client'

import React from "react";
import { MainContainer } from "./style";
import WhatsappPhone from "@/components/molecules/whatsappPhone/whatsappPhone";
import EmailAdress from "@/components/molecules/emailAdress/emailAdress";
import FaceBookLogo from "@/components/atoms/faceBookLogo/faceBookLogo";
import InstagramLogo from "@/components/atoms/instagramLogo/instagramLogo";

function FirstHeader() {
  return (
    <MainContainer>
      <WhatsappPhone />
      <EmailAdress />
      <div>
        <FaceBookLogo />
        <InstagramLogo />
      </div>
    </MainContainer>
  );
}
export default FirstHeader