"use client";

import { useStoreModal } from "@/store/modal-store";
import Modal from "@/components/modal";

const AlertModal = () => {
  const { isOpen, onClose } = useStoreModal();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="번역을 해드릴거에요!!"
      description="한국어로 번역 하실래요?"
    >
      번역 결과 내용입니다~!
    </Modal>
  );
};

export default AlertModal;
