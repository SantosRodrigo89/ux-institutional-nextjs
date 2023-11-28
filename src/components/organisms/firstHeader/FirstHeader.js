"use client";
import React from "react";
import WhatsappPhone from "@/components/molecules/whatsappPhone/whatsappPhone";
import EmailAdress from "@/components/molecules/emailAdress/emailAdress";
import FaceBookLogo from "@/components/atoms/faceBookLogo/faceBookLogo";
import InstagramLogo from "@/components/atoms/instagramLogo/instagramLogo";
import {
  MainContainer,
  WAContainer,
  EmailContainer,
  ThirdIcons,
} from "./style";


function FirstHeader() {
  return (
    <MainContainer>
      <WAContainer>
        <WhatsappPhone />
      </WAContainer>

      <EmailContainer>
        <EmailAdress />
      </EmailContainer>

      <ThirdIcons>
        <FaceBookLogo />
        <InstagramLogo />
      </ThirdIcons>

    </MainContainer>
  );
}
export default FirstHeader;
