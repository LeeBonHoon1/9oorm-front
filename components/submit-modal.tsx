"use client";

import { useStoreModal } from "@/store/modal-store";

import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";

const SubmitModal = () => {
  const { isOpen, onClose } = useStoreModal();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="서브밋할까요?"
      description="서브밋을 진행 하겠습니다."
    >
      <Button>button</Button>
    </Modal>
  );
};

export default SubmitModal;
