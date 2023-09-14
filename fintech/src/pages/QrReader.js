import React, { useState } from "react";
import QrCodeReader, { QRCode } from "react-qrcode-reader";
import Modal from "react-modal";
import HeaderComponent from "../components/HeaderComponent";
import ModalWithdraw from "../components/withdraw/ModalWithDraw";

const QrReaderPage = () => {
  const [val, setVal] = useState("");
  const [openModal, setOpenModal] = useState(false); //no camera : true

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleRead = (val) => {
    setOpenModal(true);
    setVal(val);
  };
  return (
    <div>
      <HeaderComponent title={"qr 리더"}></HeaderComponent>
      <QrCodeReader delay={100} width={600} height={500} action={handleRead} />
      <Modal isOpen={openModal} onRequestClose={closeModal}>
        <ModalWithdraw tofintechno={val}></ModalWithdraw>
      </Modal>
      {val}
    </div>
  );
};

export default QrReaderPage;
