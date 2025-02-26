// components/Popup.jsx
import { useEffect } from 'react';

export default function Toaster({ message, isOpen, onClose, status='popupFail' } : {message: string, isOpen: boolean, onClose: () => void, status?: string}) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='popupOverlay'>
      <div className={`popupContent ${status}`}>
        <p>{message}</p>
      </div>
    </div>
  );
};
