import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import QrCodeReader, { QRCode } from "react-qrcode-reader";

const QrReader = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <HeaderComponent title={"Reader"}></HeaderComponent>
      <>
        <QrCodeReader delay={100} width={600} height={500} action={setVal} />
        <p>{val}</p>
      </>
    </div>
  );
};

export default QrReader;
