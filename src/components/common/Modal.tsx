// Modal.tsx
import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      setShowModal(true);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else if (!isOpen && showModal) {
      // Start exit animation
      const timer = setTimeout(() => setShowModal(false), 200); // Duration matches CSS animation
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, [isOpen, showModal, onClose]);

  const handleBackdropClick = () => {
    onClose();
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleBackdropClick} // Close on backdrop click
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`box hideScroll relative flex max-h-[95dvh] w-96 flex-col gap-4 ${className} transform transition-all duration-500 ${
          isOpen ? "zoom-in" : "zoom-out"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex flex-col gap-4" id="modal-description">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
